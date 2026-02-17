"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface SavedStoriesContextType {
  savedIds: number[];
  isSaved: (id: number) => boolean;
  toggleSave: (id: number) => void;
  totalSaved: number;
}

const SavedStoriesContext = createContext<SavedStoriesContextType | undefined>(
  undefined,
);

export function SavedStoriesProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const isSaved = useCallback(
    (id: number) => savedIds.includes(id),
    [savedIds],
  );

  const toggleSave = useCallback((id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
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
