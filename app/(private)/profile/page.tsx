import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MyProfileView } from "@/components/feed/MyProfileView";
import {
  getSavedStories,
  getStoriesByAuthorId,
  getSavedStoryIds,
} from "@/lib/stories";
import { SavedStoriesProvider } from "@/components/provider/SavedStoriesProvider";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const [savedStories, myStories, savedIds] = await Promise.all([
    getSavedStories(session.user.id),
    getStoriesByAuthorId(session.user.id),
    getSavedStoryIds(session.user.id),
  ]);

  return (
    <SavedStoriesProvider initialSavedIds={savedIds}>
      <MyProfileView
        userName={session.user?.name ?? "Usuário"}
        savedStories={savedStories}
        myStories={myStories}
      />
    </SavedStoriesProvider>
  );
}
