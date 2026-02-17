"use client";

import { SessionProvider } from "next-auth/react";
import { SavedStoriesProvider } from "./SavedStoriesProvider";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <SavedStoriesProvider>{children}</SavedStoriesProvider>
    </SessionProvider>
  );
}
