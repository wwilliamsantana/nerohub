"use client";

import { useState } from "react";
import { StoryCard } from "./StoryCard";
import { TagBadge } from "./TagBadge";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_TAGS } from "@/lib/stories";
import type { StoryWithDetails } from "@/lib/stories";

const STORIES_PER_PAGE = 14;

interface StoryFeedProps {
  stories: StoryWithDetails[];
}

export function StoryFeed({ stories: allStories }: StoryFeedProps) {
  const [activeTag, setActiveTag] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStories = (
    activeTag === "Todos"
      ? [...allStories]
      : allStories.filter((story) => story.tags.includes(activeTag))
  ).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
  const paginatedStories = filteredStories.slice(
    startIndex,
    startIndex + STORIES_PER_PAGE,
  );

  function handleTagChange(tag: string) {
    setActiveTag(tag);
    setCurrentPage(1);
  }

  return (
    <section className="mt-10 space-y-6">
      {/* Section header */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
          <BookOpen size={18} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-zinc-100">Feed de Histórias</h2>
          <p className="text-xs text-zinc-500">
            Descubra histórias incríveis da comunidade
          </p>
        </div>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 pb-2">
        {ALL_TAGS.map((tag) => (
          <TagBadge
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => handleTagChange(tag)}
          />
        ))}
      </div>

      {/* Stories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {paginatedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer shrink-0 ${
                currentPage === page
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
          >
            <ChevronRight size={14} className="sm:w-4 sm:h-4" />
          </button>

          <span className="ml-2 sm:ml-3 text-xs text-zinc-500 shrink-0">
            {startIndex + 1}–
            {Math.min(startIndex + STORIES_PER_PAGE, filteredStories.length)}
          </span>
        </div>
      )}

      {/* Empty state */}
      {filteredStories.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <BookOpen size={40} className="text-zinc-700 mb-3" />
          <p className="text-sm text-zinc-500">
            Nenhuma história encontrada com a tag{" "}
            <span className="text-violet-400 font-medium">"{activeTag}"</span>
          </p>
        </div>
      )}
    </section>
  );
}
