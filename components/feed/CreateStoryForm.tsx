"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  Send,
  X,
  BookOpen,
  Type,
  FileText,
  Tags,
} from "lucide-react";
import { ALL_TAGS } from "@/lib/stories";

const AVAILABLE_TAGS = ALL_TAGS.filter((tag) => tag !== "Todos");

const createStorySchema = z.object({
  title: z
    .string()
    .min(3, "O título deve ter no mínimo 3 caracteres")
    .max(120, "O título não pode ultrapassar 120 caracteres"),
  content: z
    .string()
    .min(50, "A história deve ter no mínimo 50 caracteres")
    .max(50000, "A história não pode ultrapassar 50.000 caracteres"),
  tags: z
    .array(z.string())
    .min(1, "Selecione ao menos 1 tag")
    .max(5, "Selecione no máximo 5 tags"),
});

type CreateStoryFormData = z.infer<typeof createStorySchema>;

export function CreateStoryForm({ authorName }: { authorName: string }) {
  const router = useRouter();
  const [customTag, setCustomTag] = useState("");
  const [showTagInput, setShowTagInput] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateStoryFormData>({
    resolver: zodResolver(createStorySchema),
    defaultValues: {
      tags: [],
    },
  });

  const selectedTags = watch("tags");
  const title = watch("title");
  const content = watch("content");

  // Gera o resumo automaticamente dos primeiros 300 caracteres do conteúdo
  const excerpt = content
    ? content.slice(0, 300) + (content.length > 300 ? "..." : "")
    : "";

  function toggleTag(tag: string) {
    setValue(
      "tags",
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : selectedTags.length < 5
          ? [...selectedTags, tag]
          : selectedTags,
    );
  }

  function addCustomTag() {
    const tag = customTag.trim();
    if (tag && !selectedTags.includes(tag) && selectedTags.length < 5) {
      setValue("tags", [...selectedTags, tag]);
      setCustomTag("");
      setShowTagInput(false);
    }
  }

  async function onSubmit(data: CreateStoryFormData) {
    setServerError("");

    try {
      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title.trim(),
          content: data.content.trim(),
          tags: data.tags,
        }),
      });

      if (!res.ok) {
        const responseData = await res.json();
        setServerError(responseData.error || "Erro ao publicar história");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setServerError("Ocorreu um erro. Tente novamente.");
    }
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer group"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Voltar ao Feed</span>
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Nova História</h1>
            <p className="text-sm text-zinc-500">
              Compartilhe sua história com a comunidade
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Erro do servidor */}
          {serverError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {serverError}
            </div>
          )}

          {/* Autor (read-only) */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white uppercase shrink-0">
              {authorName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-100">
                {authorName}
              </p>
              <p className="text-xs text-zinc-500">Autor da história</p>
            </div>
          </div>

          {/* Título */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Type size={14} className="text-violet-400" />
              Título
            </label>
            <input
              type="text"
              placeholder="Dê um título cativante à sua história..."
              maxLength={120}
              {...register("title")}
              className={`w-full rounded-xl border bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all ${
                errors.title
                  ? "border-red-500/60 focus:ring-red-500/30 focus:border-red-500/50"
                  : "border-zinc-800 focus:ring-violet-500/30 focus:border-violet-500/50"
              }`}
            />
            <div className="flex justify-between">
              <span className="text-xs text-red-400">
                {errors.title?.message}
              </span>
              <span className="text-xs text-zinc-600">
                {title?.length || 0}/120
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
              <FileText size={14} className="text-violet-400" />
              Conteúdo
            </label>
            <textarea
              placeholder="Escreva sua história aqui... Use parágrafos para organizar o texto."
              rows={14}
              {...register("content")}
              className={`w-full rounded-xl border bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-all resize-none leading-relaxed ${
                errors.content
                  ? "border-red-500/60 focus:ring-red-500/30 focus:border-red-500/50"
                  : "border-zinc-800 focus:ring-violet-500/30 focus:border-violet-500/50"
              }`}
            />
            <div className="flex justify-between">
              <span className="text-xs text-red-400">
                {errors.content?.message}
              </span>
              <div className="flex gap-4 text-xs text-zinc-600">
                <span>
                  {content?.split(/\s+/).filter(Boolean).length || 0} palavras
                </span>
                <span>{content?.length || 0} caracteres</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Tags size={14} className="text-violet-400" />
              Tags
              <span className="text-xs text-zinc-600 font-normal">
                ({selectedTags.length}/5 selecionadas)
              </span>
            </label>

            {/* Mensagem de erro das tags */}
            {errors.tags && (
              <p className="text-xs text-red-400">{errors.tags.message}</p>
            )}

            {/* Tags selecionadas */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/20 text-violet-300 border border-violet-500/40"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className="hover:text-violet-100 transition-colors cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Tags disponíveis */}
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_TAGS.filter((tag) => !selectedTags.includes(tag)).map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    disabled={selectedTags.length >= 5}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:bg-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>

            {/* Input de tag personalizada */}
            {showTagInput && (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addCustomTag();
                    }
                    if (e.key === "Escape") {
                      setShowTagInput(false);
                      setCustomTag("");
                    }
                  }}
                  placeholder="Nome da tag..."
                  maxLength={30}
                  autoFocus
                  className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={addCustomTag}
                  disabled={!customTag.trim()}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Adicionar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowTagInput(false);
                    setCustomTag("");
                  }}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            {/* Botão para adicionar tag personalizada */}
            {!showTagInput && selectedTags.length < 5 && (
              <button
                type="button"
                onClick={() => setShowTagInput(true)}
                className="text-xs text-zinc-400 hover:text-zinc-300 underline underline-offset-2 transition-colors"
              >
                + Tag personalizada
              </button>
            )}
          </div>

          {/* Divisor */}
          <div className="border-t border-zinc-800/60" />

          {/* Preview rápido */}
          {title && (
            <div className="space-y-3 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
                Pré-visualização
              </p>
              <h3 className="text-lg font-bold text-zinc-100">{title}</h3>
              {content && (
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {excerpt}
                </p>
              )}
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Botão de enviar */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Publicando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Publicar História
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
