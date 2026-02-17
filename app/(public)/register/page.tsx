import { LiquidEther } from "@/components/ui/LiquidEther";
import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <div className="w-full min-h-screen relative bg-black overflow-hidden">
      <Link
        href="/"
        className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 text-xs sm:text-sm text-zinc-400 hover:text-zinc-100 underline underline-offset-4 transition-colors"
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

      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
        <RegisterForm />
      </div>
    </div>
  );
}
