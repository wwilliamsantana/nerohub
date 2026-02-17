"use client";

import Link from "next/link";
import { ArrowLeft, Bookmark, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { StarRating } from "./StarRating";
import { TagBadge } from "./TagBadge";
import { useSavedStories } from "@/components/provider/SavedStoriesProvider";
import type { Story } from "@/lib/mock-stories";

interface StoryViewProps {
  story: Story;
}

export function StoryView({ story }: StoryViewProps) {
  const router = useRouter();
  const { isSaved, toggleSave } = useSavedStories();
  const saved = isSaved(story.id);

  const paragraphs = story.content.split("\n\n");

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer group"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Voltar ao Feed</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toggleSave(story.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm hover:bg-zinc-800/60 transition-all cursor-pointer ${
                saved ? "text-amber-400" : "text-zinc-400 hover:text-amber-400"
              }`}
              title={saved ? "Remover dos salvos" : "Salvar história"}
            >
              <Bookmark size={16} className={saved ? "fill-amber-400" : ""} />
              <span className="text-xs font-medium">{story.saves}</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-violet-400 hover:bg-zinc-800/60 transition-all cursor-pointer"
              title="Compartilhar"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="mb-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {story.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
            {story.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-4 pb-8 border-b border-zinc-800">
            <Link
              href={`/author/${encodeURIComponent(story.authorName)}`}
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-base font-bold text-white uppercase shrink-0">
                {story.authorName.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-zinc-100 hover:text-violet-300 transition-colors">
                  {story.authorName}
                </p>
                <div className="flex items-center gap-4 mt-0.5">
                  <StarRating rating={story.rating} size={15} />
                  <span className="text-xs text-zinc-500">
                    {story.saves} salvamentos
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-zinc-300 leading-relaxed tracking-wide"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* Bottom back button */}
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
