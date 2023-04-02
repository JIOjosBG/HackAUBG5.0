import prisma from "./prisma";
export const getGamesByUserId = async (userId: string) =>
  await prisma.game.findMany({
    where: {
      users: {
        some: {
          id: {
            equals: userId,
          },
        },
      },
    },
  });

// getUser from prism

export const getUserId = async (email: string) =>
  prisma.user.findUnique({ where: { email }, select: { id: true } });

export const getUser = async (email: string) =>
  prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, name: true, points: true },
  });

export const gamesCountByUser = async (userId: any) =>
  prisma.game.count({
    where: {
      users: {
        some: {
          id: {
            equals: userId,
          },
        },
      },
    },
  });
