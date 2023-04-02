import {
  CreateGameComponent,
  ListComponent,
  LoginButton,
  LoginComponent,
} from "@/components";
import ProfileCard from "@/components/Profile/ProfileComponent";
import { logout } from "@/lib/auth";
import { gamesCountByUser, getGamesByUserId, getUserId } from "@/lib/db";
import prisma from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";
export default async function Profile() {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email as string;
  if (!email) return <LoginComponent />;
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
