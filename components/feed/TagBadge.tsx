"use client";

import { cn } from "@/lib/utils";

interface TagBadgeProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagBadge({ label, active = false, onClick }: TagBadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer",
        active
          ? "bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-[0_0_8px_rgba(139,92,246,0.15)]"
          : "bg-zinc-800/50 text-zinc-400 border-zinc-700/50 hover:bg-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600",
      )}
    >
      {label}
    </button>
  );
}
