import { getStoryById, getSavedStoryIds, getUserRatings } from "@/lib/stories";
import { notFound } from "next/navigation";
import { StoryView } from "@/components/feed/StoryView";
import { SavedStoriesProvider } from "@/components/provider/SavedStoriesProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

interface StoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;
  const story = await getStoryById(id);

  if (!story) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  let savedIds: string[] = [];
  let userRating = 0;

  if (session?.user?.id) {
    const [ids, ratings] = await Promise.all([
      getSavedStoryIds(session.user.id),
      getUserRatings(session.user.id),
    ]);
    savedIds = ids;
    userRating = ratings[story.id] ?? 0;
  }

  return (
    <SavedStoriesProvider initialSavedIds={savedIds}>
      <StoryView
        story={story}
        currentUserId={session?.user?.id}
        userRating={userRating}
      />
    </SavedStoriesProvider>
  );
}
