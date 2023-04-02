import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ProfileCard from "@/components/Profile/ProfileComponent";
import {  PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function Home() {
  const session = await getServerSession()
  const user = await prisma.user.findFirst({where:{email:session?.user?.email}})
  console.log(JSON.stringify(user))
  return (
    <main>
      <div>
        <ProfileCard />;
      </div>
    </main>
  );
}
