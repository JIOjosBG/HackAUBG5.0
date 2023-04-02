import { ListComponent } from "@/components";
import {
  getUserId,
  gamesCountByUser,
  getGamesByUserId,
  getAllGames,
} from "@/lib/db";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
const prisma = new PrismaClient();

// The return value is *not* serialized
// You can return Date, Map, Set, etc.

export default async function List() {
  const games = await getAllGames();

  return (
    <>
      <ListComponent games={games} />;
    </>
  );
}
