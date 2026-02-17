import ScrollReveal from "@/components/ui/ScrollReveal";
import { Separator } from "@/components/ui/separator";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full min-h-screen relative bg-black text-zinc-200">
      <Link
        href="/"
        className="fixed top-6 right-6 z-50 text-sm text-zinc-400 hover:text-zinc-100 underline underline-offset-4 transition-colors"
      >
        ← Início
      </Link>

      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF", "#00F0FF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.4}
        isBounce={false}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={1.2}
        takeoverDuration={0.2}
        autoResumeDelay={5000}
        autoRampDuration={0.5}
        className="fixed! inset-0 z-0"
      />

      <div className="relative z-10">
        <section className="min-h-screen flex items-start justify-center px-6 pt-[30vh]">
          <h1 className="text-5xl md:text-7xl font-bold text-center tracking-tight text-zinc-100">
            Sobre o NeroHub
          </h1>
        </section>

        {/* Missão */}
        <section className="max-w-3xl mx-auto px-6 py-32">
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur
            baseRotation={20}
            blurStrength={50}
          >
            O NeroHub nasceu da vontade de dar voz a quem tem histórias para
            contar. Acreditamos que toda jornada merece ser escrita,
            compartilhada e vivida por quem lê.
          </ScrollReveal>
        </section>

        <Separator className="max-w-xs mx-auto bg-zinc-700/50" />

        {/* Visão */}
        <section className="max-w-3xl mx-auto px-6 py-32">
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur
            baseRotation={20}
            blurStrength={50}
          >
            Queremos construir um espaço onde escritores independentes possam
            criar universos, desenvolver personagens e encontrar leitores que se
            conectem com suas narrativas.
          </ScrollReveal>
        </section>

        <Separator className="max-w-xs mx-auto bg-zinc-700/50" />

        {/* Valores */}
        <section className="max-w-3xl mx-auto px-6 py-32">
          <ScrollReveal
            baseOpacity={0.05}
            enableBlur
            baseRotation={20}
            blurStrength={50}
          >
            Criatividade sem limites. Comunidade acolhedora. Histórias que
            inspiram. Esses são os pilares que guiam cada decisão no NeroHub.
          </ScrollReveal>
        </section>

        <Separator className="max-w-xs mx-auto bg-zinc-700/50" />

        {/* Chamada final */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 pb-20 flex-col">
          <ScrollReveal
            baseOpacity={0}
            enableBlur
            baseRotation={5}
            blurStrength={20}
            containerClassName="text-center"
            textClassName="text-zinc-400"
          >
            Sua história começa aqui. Junte-se a nós e faça parte dessa
            comunidade de criadores.
          </ScrollReveal>
          <div className="mt-10 flex gap-4 pointer-events-auto">
            <Link href="/register">
              <Button className="bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 hover:scale-105 transition-all">
                Criar conta
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-transparent text-zinc-400 border border-zinc-600 font-semibold hover:scale-105 transition-all">
                Entrar
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
