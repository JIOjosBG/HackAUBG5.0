import { CreateGameComponent, ListComponent } from "@/components";
import ProfileCard from "@/components/Profile/ProfileComponent";
import { gamesCountByUser, getGamesByUserId, getUserId } from "@/lib/db";
import prisma from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email as string;

  console.log(email);
  const userId = await getUserId(email);
  console.log(userId);
  if (!userId) return null;
  const gamesCount = await gamesCountByUser(userId?.id);

  const games = await getGamesByUserId(userId.id);
  return (
    <>
      <ProfileCard user={session?.user} gamesCount={gamesCount} />
      <section className="fixed left-60">
        <ListComponent games={games} />
      </section>
    </>
  );
}
