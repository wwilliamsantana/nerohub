"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

export function StarRating({
  rating,
  maxStars = 5,
  size = 14,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const halfFilled = !filled && i < rating;

        return (
          <Star
            key={i}
            size={size}
            className={cn(
              "transition-colors",
              filled
                ? "fill-amber-400 text-amber-400"
                : halfFilled
                  ? "fill-amber-400/50 text-amber-400"
                  : "fill-transparent text-zinc-600",
            )}
          />
        );
      })}
      <span className="ml-1.5 text-xs text-zinc-400 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
