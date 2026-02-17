import { Header } from "@/components/Header";
import { TextType } from "@/components/ui/TextType";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiquidEther } from "@/components/ui/LiquidEther";

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <Header />
      <div
        className="fixed inset-0 flex flex-col items-center
      mt-60 text-6xl text-zinc-100 px-6 py-4 pointer-events-none"
      >
        <TextType
          text={[
            "Escreva sua própria jornada.",
            "Compartilhe contos inesquecíveis.",
            "Dê vida aos seus personagens.",
            "Sua história começa aqui.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
        />
        <div className="mt-24 flex gap-4">
          <Link href="/register">
            <Button className="bg-zinc-100 text-zinc-900 font-semibold pointer-events-auto hover:bg-zinc-200 hover:scale-105 transition-all">
              Faça seu cadastro agora mesmo!
            </Button>
          </Link>
          <Link href="/about">
            <Button className="bg-transparent text-zinc-400 border border-zinc-600 font-semibold pointer-events-auto hover:scale-105 transition-all">
              Saiba mais sobre o projeto
            </Button>
          </Link>
        </div>
      </div>
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF", "#00F0FF"]}
        mouseForce={40}
        cursorSize={140}
        isViscous
        viscous={50}
        iterationsViscous={48}
        iterationsPoisson={48}
        resolution={0.7}
        isBounce={true}
        autoDemo
        autoSpeed={1.2}
        autoIntensity={3.5}
        takeoverDuration={0.15}
        autoResumeDelay={1500}
        autoRampDuration={0.3}
      />
    </div>
  );
}
