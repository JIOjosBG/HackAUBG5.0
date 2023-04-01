import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ProfileCard from "@/components/Profile/ProfileComponent";

export default async function Home() {
  return (
    <main>
      <div>
        <ProfileCard />;
      </div>
    </main>
  );
}
