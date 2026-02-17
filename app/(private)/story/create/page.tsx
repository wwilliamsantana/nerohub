import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { CreateStoryForm } from "@/components/feed/CreateStoryForm";

export default async function CreateStoryPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <CreateStoryForm authorName={session.user?.name ?? "Anônimo"} />;
}
