import { CreateGameComponent } from "@/components";
import { getUserId } from "@/lib/db";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Creategame() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email as string;
  if(email === null) return null;
  const userId = await getUserId(email)

  
  return <CreateGameComponent userId={userId} />;
}
