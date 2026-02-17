"use client";

import { ArrowLeft, BookOpen, Star, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { StoryCard } from "./StoryCard";
import type { StoryWithDetails } from "@/lib/stories";

interface AuthorProfileViewProps {
  authorName: string;
  stories: StoryWithDetails[];
}

export function AuthorProfileView({
  authorName,
  stories,
}: AuthorProfileViewProps) {
  const router = useRouter();

  const totalSaves = stories.reduce((acc, story) => acc + story.saves, 0);
  const avgRating =
    stories.reduce((acc, story) => acc + story.rating, 0) / stories.length;
  const allTags = [...new Set(stories.flatMap((story) => story.tags))];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Top */}
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer group mb-10"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Voltar ao Feed</span>
        </button>

        {/* Header Autor*/}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-3xl font-bold text-white uppercase mb-4 shadow-[0_0_32px_rgba(139,92,246,0.25)]">
            {authorName.charAt(0)}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            {authorName}
          </h1>
          <p className="text-sm text-zinc-500 mb-6">Autor no NeroHub</p>

          {/* Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <BookOpen size={16} className="text-violet-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {stories.length}
              </span>
              <span className="text-xs text-zinc-500">
                {stories.length === 1 ? "história" : "histórias"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {avgRating.toFixed(1)}
              </span>
              <span className="text-xs text-zinc-500">média</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Bookmark size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {totalSaves}
              </span>
              <span className="text-xs text-zinc-500">salvamentos</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Seção de Histórias */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
            <BookOpen size={18} className="text-violet-400" />
            Histórias de {authorName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* Botão de Voltar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-center">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-700 hover:bg-zinc-700/60 hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Voltar para o Feed
          </button>
        </div>
      </div>
    </div>
  );
}
