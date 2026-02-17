"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveRatingProps {
  storyId: string;
  initialRating: number;
}

export function InteractiveRating({
  storyId,
  initialRating,
}: InteractiveRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(initialRating > 0);

  async function handleRate(value: number) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setRating(value);

    try {
      const res = await fetch(`/api/stories/${storyId}/rate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setRating(initialRating);
      }
    } catch {
      setRating(initialRating);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-zinc-400">
        {submitted ? "Sua avaliação" : "Avalie esta história"}
      </p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          const starValue = i + 1;
          const isActive = starValue <= (hoveredStar || rating);

          return (
            <button
              key={i}
              type="button"
              disabled={isSubmitting}
              onClick={() => handleRate(starValue)}
              onMouseEnter={() => setHoveredStar(starValue)}
              onMouseLeave={() => setHoveredStar(0)}
              className="p-1 cursor-pointer transition-transform hover:scale-110 disabled:cursor-not-allowed"
            >
              <Star
                size={28}
                className={cn(
                  "transition-colors",
                  isActive
                    ? "fill-amber-400 text-amber-400"
                    : "fill-transparent text-zinc-600 hover:text-amber-400/50",
                )}
              />
            </button>
          );
        })}
      </div>
      {submitted && (
        <p className="text-xs text-zinc-500">
          Você deu {rating} {rating === 1 ? "estrela" : "estrelas"}
        </p>
      )}
    </div>
  );
}
