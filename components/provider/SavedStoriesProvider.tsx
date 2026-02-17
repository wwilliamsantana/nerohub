"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface SavedStoriesContextType {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => void;
  totalSaved: number;
}

const SavedStoriesContext = createContext<SavedStoriesContextType | undefined>(
  undefined,
);

export function SavedStoriesProvider({
  children,
  initialSavedIds = [],
}: {
  children: ReactNode;
  initialSavedIds?: string[];
}) {
  const [savedIds, setSavedIds] = useState<string[]>(initialSavedIds);

  const isSaved = useCallback(
    (id: string) => savedIds.includes(id),
    [savedIds],
  );

  const toggleSave = useCallback(async (id: string) => {
    // Optimistic update
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );

    try {
      const res = await fetch(`/api/stories/${id}/save`, { method: "POST" });
      if (!res.ok) {
        // Reverte em caso de erro
        setSavedIds((prev) =>
          prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
        );
      }
    } catch {
      setSavedIds((prev) =>
        prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
      );
    }
  }, []);

  return (
    <SavedStoriesContext.Provider
      value={{ savedIds, isSaved, toggleSave, totalSaved: savedIds.length }}
    >
      {children}
    </SavedStoriesContext.Provider>
  );
}

export function useSavedStories() {
  const context = useContext(SavedStoriesContext);
  if (!context) {
    throw new Error(
      "useSavedStories must be used within a SavedStoriesProvider",
    );
  }
  return context;
}
