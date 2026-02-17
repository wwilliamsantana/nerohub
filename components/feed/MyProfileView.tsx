"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Heart,
  User as UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { StoryCard } from "./StoryCard";
import type { StoryWithDetails } from "@/lib/stories";

interface MyProfileViewProps {
  userName: string;
  savedStories: StoryWithDetails[];
  myStories: StoryWithDetails[];
}

export function MyProfileView({
  userName,
  savedStories,
  myStories,
}: MyProfileViewProps) {
  const router = useRouter();
  const [stories, setStories] = useState(myStories);

  const handleDeleteStory = (storyId: string) => {
    setStories((prevStories) =>
      prevStories.filter((story) => story.id !== storyId),
    );
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Top bar */}
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer group mb-10"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Voltar ao Feed</span>
        </button>

        {/* Header do perfil */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-3xl font-bold text-white uppercase mb-4 shadow-[0_0_32px_rgba(139,92,246,0.25)]">
            {userName.charAt(0)}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            {userName}
          </h1>
          <p className="text-sm text-zinc-500 mb-6">Meu perfil no NeroHub</p>

          {/* Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <BookOpen size={16} className="text-violet-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {stories.length}
              </span>
              <span className="text-xs text-zinc-500">
                {stories.length === 1 ? "história" : "histórias"}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Bookmark size={16} className="text-amber-400" />
              <span className="text-sm font-semibold text-zinc-200">
                {savedStories.length}
              </span>
              <span className="text-xs text-zinc-500">
                {savedStories.length === 1 ? "salva" : "salvas"}
              </span>
            </div>
          </div>
        </div>

        {/* Seção de Minhas Histórias */}
        {stories.length > 0 && (
          <div className="space-y-4 mb-12">
            <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
              <BookOpen size={18} className="text-violet-400" />
              Minhas Histórias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  isOwn={true}
                  onDelete={handleDeleteStory}
                />
              ))}
            </div>
          </div>
        )}

        {/* Seção de Histórias Salvas */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
            <Heart size={18} className="text-rose-400" />
            Histórias que mais gostei
          </h2>

          {savedStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30">
              <Bookmark size={40} className="text-zinc-700 mb-3" />
              <p className="text-sm text-zinc-500 mb-1">
                Você ainda não salvou nenhuma história
              </p>
              <p className="text-xs text-zinc-600">
                Clique no ícone{" "}
                <Bookmark size={12} className="inline text-zinc-500" /> em
                qualquer história para salvá-la aqui
              </p>
            </div>
          )}
        </div>

        {/* Botão de Voltar */}
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
