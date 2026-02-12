import { LightRays } from "@/components/LightRays";
import { Header } from "@/components/Header";
import { TextType } from "@/components/TextType";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-zinc-900">
      <Header />
      <div
        className="fixed inset-0 flex flex-col items-center
      mt-60 text-6xl text-zinc-200 px-6 py-4 pointer-events-none"
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
        <Link href="/register">
          <Button className="mt-24 bg-zinc-100 text-zinc-900 font-semibold pointer-events-auto hover:bg-zinc-200 hover:scale-105 transition-all">
            Faça seu cadastro agora mesmo!
          </Button>
        </Link>
      </div>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={1}
        rayLength={2}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
      />
    </div>
  );
}
