"use client";

import { Bookmark, Eye, Clock } from "lucide-react";
import { StarRating } from "./StarRating";
import { TagBadge } from "./TagBadge";
import { useSavedStories } from "@/components/provider/SavedStoriesProvider";
import { formatRelativeDate } from "@/lib/utils";
import type { Story } from "@/lib/mock-stories";
import Link from "next/link";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  const { isSaved, toggleSave } = useSavedStories();
  const saved = isSaved(story.id);

  return (
    <Link href={`/story/${story.id}`} className="block">
      <article className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-[0_0_24px_rgba(0,0,0,0.3)]">
        {/* Header: Author + Rating */}
        <div className="flex items-start justify-between mb-3">
          <Link
            href={`/author/${encodeURIComponent(story.authorName)}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white uppercase shrink-0">
              {story.authorName.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-100 truncate hover:text-violet-300 transition-colors">
                {story.authorName}
              </p>
              <StarRating rating={story.rating} />
            </div>
          </Link>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(story.id);
            }}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              saved ? "text-amber-400" : "text-zinc-500 hover:text-amber-400"
            }`}
            title={saved ? "Remover dos salvos" : "Salvar história"}
          >
            <Bookmark
              size={16}
              className={`transition-transform group-hover:scale-110 ${
                saved ? "fill-amber-400" : ""
              }`}
            />
            <span className="text-xs font-medium">{story.saves}</span>
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-zinc-100 mb-2 line-clamp-1 group-hover:text-white transition-colors">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
          {story.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {story.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Date + Read indicator */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-800/50">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock size={12} />
            <span>{formatRelativeDate(story.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye size={14} />
            <span>Ler</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
