import { Button } from "@/components/ui/button";
import { LiquidEther } from "@/components/LiquidEther";
import Link from "next/link";

export default function Login() {
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

      <div className="fixed inset-0 flex items-start justify-center pt-[18vh] z-10 pointer-events-none">
        <form className="flex flex-col gap-7 w-full max-w-sm bg-zinc-950/60 backdrop-blur-xl p-10 rounded-2xl border border-zinc-700/50 shadow-2xl pointer-events-auto">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-sm text-zinc-400">
              Entre na sua conta para continuar
            </p>
          </div>

          <div className="flex flex-col gap-4">
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
                className="px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-zinc-200 placeholder-zinc-600 transition-all duration-300"
                autoComplete="current-password"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full py-3 rounded-lg bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base"
            >
              Entrar
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
