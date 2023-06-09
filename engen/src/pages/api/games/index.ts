import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Game } from "@prisma/client";
import runCompletion from "@/lib/chat";
import { getGamesByUserId } from "@/lib/db";

const prisma = new PrismaClient();
type Error = { error: string };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[] | Game | Error>
) {
  switch (req.method) {
    case "POST":
      return createGame(req, res);
    case "GET":
      if (req.query.userId) {
        return getUserGames(req, res);
      } else {
        return getGames(req, res);
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}

async function createGame(
  req: NextApiRequest,
  res: NextApiResponse<Game | Error>
) {
  try {
    const completion = await runCompletion(req.body.prompt);
    const title = completion?.title as string;
    const description = completion?.description as string;
    const userId = req.body.userId as string;

    const game = await prisma.game.create({
      data: {
        title,
        description,
        users: {
          connect: { id: userId },
        },
      },
    });
    console.log(game)
    res.status(201).json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create game" });
  }
}

async function getGames(
  _req: NextApiRequest,
  res: NextApiResponse<Game[] | Error>
) {
  try {
    const games = await prisma.game.findMany({
      include: {
        users: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch games" });
  }
}

async function getUserGames(
  req: NextApiRequest,
  res: NextApiResponse<Game[] | Error>
) {
  const userId = req.query.userId as string;

  try {
    const games = await getGamesByUserId(userId);

    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch games" });
  }
}

//
