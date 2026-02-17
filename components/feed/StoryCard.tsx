"use client";

import { useState } from "react";
import { Bookmark, Eye, Clock, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { StarRating } from "./StarRating";
import { TagBadge } from "./TagBadge";
import { useSavedStories } from "@/components/provider/SavedStoriesProvider";
import { formatRelativeDate } from "@/lib/utils";
import type { StoryWithDetails } from "@/lib/stories";
import Link from "next/link";

interface StoryCardProps {
  story: StoryWithDetails;
  isOwn?: boolean;
  onDelete?: (storyId: string) => void;
}

export function StoryCard({ story, isOwn = false, onDelete }: StoryCardProps) {
  const { data: session } = useSession();
  const { isSaved, toggleSave } = useSavedStories();
  const saved = isSaved(story.id);
  const [isDeleting, setIsDeleting] = useState(false);

  const isAuthor = session?.user?.id === story.authorId;

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm("Tem certeza que deseja deletar esta história?")) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/stories/${story.id}/delete`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar história");
      }

      onDelete?.(story.id);
    } catch (error) {
      console.error("Erro ao deletar:", error);
      alert("Erro ao deletar a história. Tente novamente.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Link href={`/story/${story.id}`} className="block">
      <article className="group relative rounded-lg sm:rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-[0_0_24px_rgba(0,0,0,0.3)]">
        {/* Header: Author + Rating */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <Link
            href={`/author/${encodeURIComponent(story.authorName)}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-1 min-w-0"
          >
            <div className="flex h-8 sm:h-9 w-8 sm:w-9 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-xs sm:text-sm font-bold text-white uppercase shrink-0">
              {story.authorName.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-semibold text-zinc-100 truncate hover:text-violet-300 transition-colors">
                {story.authorName}
              </p>
              <StarRating rating={story.rating} />
            </div>
          </Link>

          <div className="flex items-center gap-2 shrink-0">
            {isOwn && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex items-center justify-center p-1 text-zinc-500 hover:text-red-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                title="Deletar história"
              >
                <Trash2
                  size={14}
                  className="transition-transform hover:scale-110 sm:w-4 sm:h-4"
                />
              </button>
            )}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSave(story.id);
              }}
              disabled={isAuthor}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                isAuthor
                  ? "text-zinc-600 cursor-not-allowed"
                  : saved
                    ? "text-amber-400"
                    : "text-zinc-500 hover:text-amber-400"
              }`}
              title={
                isAuthor
                  ? "Você não pode salvar suas próprias histórias"
                  : saved
                    ? "Remover dos salvos"
                    : "Salvar história"
              }
            >
              <Bookmark
                size={14}
                className={`transition-transform group-hover:scale-110 sm:w-4 sm:h-4 ${
                  saved ? "fill-amber-400" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-zinc-100 mb-2 line-clamp-2 sm:line-clamp-1 group-hover:text-white transition-colors">
          {story.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4">
          {story.content.slice(0, 300) +
            (story.content.length > 300 ? "..." : "")}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {story.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
          {story.tags.length > 3 && (
            <span className="text-[10px] sm:text-xs text-zinc-500 flex items-center px-1.5 py-0.5">
              +{story.tags.length - 3}
            </span>
          )}
        </div>

        {/* Date + Read indicator */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-zinc-800/50 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{formatRelativeDate(story.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye size={12} />
            <span className="hidden sm:inline">Ler</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
