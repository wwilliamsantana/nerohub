"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .max(50, "O nome não pode ultrapassar 50 caracteres"),
    email: z.string().email("E-mail inválido").toLowerCase(),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(100, "A senha não pode ultrapassar 100 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const { status } = useSession();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  async function onSubmit(data: RegisterFormData) {
    setServerError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const responseData = await res.json();

      if (!res.ok) {
        setServerError(responseData.error || "Erro ao criar conta");
        return;
      }

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        router.push("/login");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setServerError("Ocorreu um erro. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-7 w-full max-w-sm bg-zinc-950/60 backdrop-blur-xl p-10 rounded-2xl border border-zinc-700/50 shadow-2xl pointer-events-auto"
    >
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Crie sua conta
        </h1>
        <p className="text-sm text-zinc-400">Preencha os campos para começar</p>
        {serverError && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 mt-1">
            {serverError}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Nome
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            {...register("name")}
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="name"
          />
          {errors.name && (
            <span className="text-xs text-red-400 mt-1">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            {...register("email")}
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="email"
          />
          {errors.email && (
            <span className="text-xs text-red-400 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("password")}
            className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
            autoComplete="new-password"
          />
          {errors.password && (
            <span className="text-xs text-red-400 mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
            Confirmar senha
          </label>
          <input
            type="password"
            placeholder="••••••••"
            {...register("confirmPassword")}
            className={`px-4 py-3 rounded-lg bg-zinc-900/80 border focus:outline-none focus:ring-2 text-zinc-200 placeholder-zinc-600 transition-all duration-300 ${
              errors.confirmPassword
                ? "border-red-500/60 focus:ring-red-500/40 focus:border-red-500/40"
                : "border-zinc-700/60 focus:ring-purple-500/40 focus:border-purple-500/40"
            }`}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <span className="text-xs text-red-400 mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base disabled:opacity-40 disabled:pointer-events-none"
        >
          {isSubmitting ? "Criando conta..." : "Criar conta"}
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
