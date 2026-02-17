"use client";

import { Button } from "@/components/ui/button";
import { LiquidEther } from "@/components/ui/LiquidEther";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(1, "Digite sua senha"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  // Se está verificando sessão, mostra loading
  if (status === "loading") {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="h-6 w-6 border-2 border-zinc-600 border-t-violet-400 rounded-full animate-spin" />
      </div>
    );
  }

  async function onSubmit(data: LoginFormData) {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("email", {
          message: "E-mail ou senha incorretos",
        });
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("email", {
        message: "Ocorreu um erro. Tente novamente.",
      });
    }
  }

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <Link
        href="/"
        className="fixed top-6 right-6 z-50 text-sm text-zinc-400 hover:text-zinc-100 underline underline-offset-4 transition-colors"
      >
        ← Início
      </Link>

      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF", "#00F0FF"]}
        mouseForce={30}
        cursorSize={120}
        isViscous
        viscous={40}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.6}
        autoIntensity={1.8}
        takeoverDuration={0.2}
        autoResumeDelay={3000}
        autoRampDuration={0.5}
      />

      <div className="fixed inset-0 flex items-start justify-center pt-[12vh] sm:pt-[18vh] z-10 pointer-events-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 sm:gap-7 w-full max-w-sm mx-4 sm:mx-0 bg-zinc-950/60 backdrop-blur-xl p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-zinc-700/50 shadow-2xl pointer-events-auto"
        >
          <div className="text-center space-y-1.5 sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Entre na sua conta para continuar
            </p>
            {errors.email && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
                className={`px-4 py-3 rounded-lg bg-zinc-900/80 border focus:outline-none focus:ring-2 text-zinc-200 placeholder-zinc-600 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500/60 focus:ring-red-500/40 focus:border-red-500/40"
                    : "border-zinc-700/60 focus:ring-purple-500/40 focus:border-purple-500/40"
                }`}
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
                {...register("password")}
                className={`px-4 py-3 rounded-lg bg-zinc-900/80 border focus:outline-none focus:ring-2 text-zinc-200 placeholder-zinc-600 transition-all duration-300 ${
                  errors.password
                    ? "border-red-500/60 focus:ring-red-500/40 focus:border-red-500/40"
                    : "border-zinc-700/60 focus:ring-purple-500/40 focus:border-purple-500/40"
                }`}
                autoComplete="current-password"
              />
              {errors.password && (
                <span className="text-xs text-red-400 mt-1">
                  {errors.password.message}
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
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-500">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-zinc-300 hover:text-zinc-100 underline underline-offset-4 transition-colors"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
