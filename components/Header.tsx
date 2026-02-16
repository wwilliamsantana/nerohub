"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full flex justify-center fixed left-0 px-6 py-4 z-50 top-20 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="w-full max-w-3xl flex items-center justify-between px-6 py-4 bg-transparent border border-zinc-600 rounded-full">
        <Link href="/" className="text-base font-bold text-zinc-200">
          NeroHub
        </Link>
        <Link href="/login">
          <button className="text-zinc-200 hover:scale-105 transition-all">
            login
          </button>
        </Link>
      </div>
    </header>
  );
}
