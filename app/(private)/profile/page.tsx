import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MyProfileView } from "@/components/feed/MyProfileView";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <MyProfileView userName={session.user?.name ?? "Usuário"} />;
}
