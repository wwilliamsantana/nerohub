import { getStoryById, MOCK_STORIES } from "@/lib/mock-stories";
import { notFound } from "next/navigation";
import { StoryView } from "@/components/feed/StoryView";

interface StoryPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return MOCK_STORIES.map((story) => ({ id: String(story.id) }));
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) {
    notFound();
  }

  return <StoryView story={story} />;
}
