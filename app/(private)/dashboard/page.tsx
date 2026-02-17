import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/SignOutButton";
import { StoryFeed } from "@/components/feed/StoryFeed";
import { PenLine } from "lucide-react";
import Link from "next/link";
import { getAllStories, getSavedStoryIds } from "@/lib/stories";
import { SavedStoriesProvider } from "@/components/provider/SavedStoriesProvider";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const [stories, savedIds] = await Promise.all([
    getAllStories(),
    getSavedStoryIds(session.user.id),
  ]);

  return (
    <SavedStoriesProvider initialSavedIds={savedIds}>
      <div className="min-h-screen bg-black text-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Olá, {session.user?.name} 👋
              </h1>
              <p className="text-zinc-400">
                Bem-vindo ao seu painel no NeroHub.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/story/create"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 transition-all"
              >
                <PenLine size={16} />
                Escrever
              </Link>
              <Link
                href="/profile"
                className="px-4 py-2 rounded-lg bg-violet-600/20 border border-violet-500/30 text-sm text-violet-300 hover:bg-violet-600/30 hover:text-violet-200 transition-all"
              >
                Meu Perfil
              </Link>
              <SignOutButton />
            </div>
          </div>

          <StoryFeed stories={stories} />
        </div>
      </div>
    </SavedStoriesProvider>
  );
}
