import { getStoriesByAuthor, getUniqueAuthors } from "@/lib/mock-stories";
import { notFound } from "next/navigation";
import { AuthorProfileView } from "@/components/feed/AuthorProfileView";

interface AuthorPageProps {
  params: Promise<{ name: string }>;
}

export function generateStaticParams() {
  return getUniqueAuthors().map((name) => ({
    name: encodeURIComponent(name),
  }));
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const stories = getStoriesByAuthor(decodedName);

  if (stories.length === 0) {
    notFound();
  }

  return <AuthorProfileView authorName={decodedName} stories={stories} />;
}
