"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full flex justify-center fixed left-0 px-3 sm:px-6 py-3 sm:py-4 z-50 top-16 sm:top-20 transition-all duration-300">
      <div className="w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-zinc-600 rounded-lg sm:rounded-full">
        <Link
          href="/"
          className="text-sm sm:text-base font-bold text-zinc-200 flex items-center justify-center gap-2 flex-shrink-0"
        >
          <Image
            src="/book-open.png"
            alt="NeroHub Logo"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <span className="hidden sm:inline">NeroHub</span>
        </Link>

        {session ? (
          <Link href="/dashboard">
            <button className="text-xs sm:text-sm text-zinc-200 hover:scale-105 transition-all font-medium">
              Dashboard
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="text-xs sm:text-sm text-zinc-200 hover:scale-105 transition-all font-medium">
              login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
