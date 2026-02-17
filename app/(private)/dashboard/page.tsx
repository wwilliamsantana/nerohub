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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Olá, {session.user?.name?.split(" ")[0]} 👋
              </h1>
              <p className="text-sm sm:text-base text-zinc-400">
                Bem-vindo ao NeroHub
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                href="/story/create"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm-px-3 rounded-lg bg-violet-600 text-xs sm:text-sm font-semibold text-white hover:bg-violet-500 transition-all whitespace-nowrap"
              >
                <PenLine size={16} />
                <span className="hidden sm:inline">Escrever</span>
                <span className="sm:hidden">Novo</span>
              </Link>
              <Link
                href="/profile"
                className="sm:flex items-center px-4 py-2 rounded-lg bg-violet-600/20 border border-violet-500/30 text-sm text-violet-300 hover:bg-violet-600/30 hover:text-violet-200 transition-all"
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
