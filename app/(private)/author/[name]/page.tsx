import { getStoriesByAuthorName, getSavedStoryIds } from "@/lib/stories";
import { notFound } from "next/navigation";
import { AuthorProfileView } from "@/components/feed/AuthorProfileView";
import { SavedStoriesProvider } from "@/components/provider/SavedStoriesProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

interface AuthorPageProps {
  params: Promise<{ name: string }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const stories = await getStoriesByAuthorName(decodedName);

  if (stories.length === 0) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  let savedIds: string[] = [];

  if (session?.user?.id) {
    savedIds = await getSavedStoryIds(session.user.id);
  }

  return (
    <SavedStoriesProvider initialSavedIds={savedIds}>
      <AuthorProfileView authorName={decodedName} stories={stories} />
    </SavedStoriesProvider>
  );
}
