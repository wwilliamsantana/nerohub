import { prisma } from "@/lib/prisma";

export interface StoryWithDetails {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  rating: number;
  saves: number;
  tags: string[];
  createdAt: string;
}

export const ALL_TAGS = [
  "Todos",
  "Ficção Científica",
  "Tecnologia",
  "Suspense",
  "Não-ficção",
  "Viagem",
  "Lifestyle",
  "Fantasia",
  "Mistério",
  "Drama",
  "Culinária",
  "Memórias",
  "Cultura",
  "Romance",
  "Empreendedorismo",
  "Motivação",
];

function mapStory(story: any): StoryWithDetails {
  const ratings = story.ratings ?? [];
  const avgRating =
    ratings.length > 0
      ? ratings.reduce((acc: number, r: any) => acc + r.value, 0) /
        ratings.length
      : 0;

  return {
    id: story.id,
    title: story.title,
    content: story.content,
    authorId: story.authorId,
    authorName: story.author?.name ?? "Anônimo",
    rating: Math.round(avgRating * 10) / 10,
    saves: story._count?.savedBy ?? 0,
    tags: (story.tags ?? []).map((st: any) => st.tag.name),
    createdAt: story.createdAt.toISOString(),
  };
}

const storyInclude = {
  author: { select: { name: true } },
  tags: { include: { tag: true } },
  ratings: { select: { value: true } },
  _count: { select: { savedBy: true } },
};

export async function getAllStories(): Promise<StoryWithDetails[]> {
  const stories = await prisma.story.findMany({
    include: storyInclude,
    orderBy: { createdAt: "desc" },
  });

  return stories.map(mapStory);
}

export async function getStoryById(
  id: string,
): Promise<StoryWithDetails | null> {
  const story = await prisma.story.findUnique({
    where: { id },
    include: storyInclude,
  });

  if (!story) return null;
  return mapStory(story);
}

export async function getStoriesByAuthorId(
  authorId: string,
): Promise<StoryWithDetails[]> {
  const stories = await prisma.story.findMany({
    where: { authorId },
    include: storyInclude,
    orderBy: { createdAt: "desc" },
  });

  return stories.map(mapStory);
}

export async function getStoriesByAuthorName(
  authorName: string,
): Promise<StoryWithDetails[]> {
  const stories = await prisma.story.findMany({
    where: { author: { name: authorName } },
    include: storyInclude,
    orderBy: { createdAt: "desc" },
  });

  return stories.map(mapStory);
}

export async function getSavedStories(
  userId: string,
): Promise<StoryWithDetails[]> {
  const saved = await prisma.savedStory.findMany({
    where: { userId },
    include: {
      story: {
        include: storyInclude,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return saved.map((s) => mapStory(s.story));
}

export async function getSavedStoryIds(userId: string): Promise<string[]> {
  const saved = await prisma.savedStory.findMany({
    where: { userId },
    select: { storyId: true },
  });

  return saved.map((s) => s.storyId);
}

export async function getUserRatings(
  userId: string,
): Promise<Record<string, number>> {
  const ratings = await prisma.rating.findMany({
    where: { userId },
    select: { storyId: true, value: true },
  });

  return Object.fromEntries(ratings.map((r) => [r.storyId, r.value]));
}

export async function getAllTags(): Promise<string[]> {
  const tags = await prisma.tag.findMany({
    orderBy: { name: "asc" },
  });

  return tags.map((t) => t.name);
}
