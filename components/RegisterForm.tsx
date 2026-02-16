"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function RegisterForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch =
    confirmPassword.length === 0 || password === confirmPassword;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) return;
    // TODO: lógica de registro
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 w-full max-w-sm bg-zinc-950/60 backdrop-blur-xl p-10 rounded-2xl border border-zinc-700/50 shadow-2xl pointer-events-auto"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Crie sua conta
        </h1>
        <p className="text-sm text-zinc-400">Preencha os campos para começar</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Nome
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="new-password"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Confirmar senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`px-4 py-3 rounded-lg bg-zinc-900/80 border focus:outline-none focus:ring-2 text-zinc-200 placeholder-zinc-600 transition-all duration-300 ${
              !passwordsMatch
                ? "border-red-500/60 focus:ring-red-500/40 focus:border-red-500/40"
                : "border-zinc-700/60 focus:ring-purple-500/40 focus:border-purple-500/40"
            }`}
            autoComplete="new-password"
          />
          {!passwordsMatch && (
            <span className="text-xs text-red-400 mt-1">
              As senhas não coincidem
            </span>
          )}
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={!passwordsMatch || password.length === 0}
          className="w-full py-3 rounded-lg bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base disabled:opacity-40 disabled:pointer-events-none"
        >
          Criar conta
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-zinc-500">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 transition-colors"
          >
            Entrar
          </Link>
        </p>
      </div>
    </form>
  );
}
