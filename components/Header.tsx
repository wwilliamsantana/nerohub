import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <span className="text-white text-xl font-bold">NeroHub</span>
      </div>
      <nav className="flex items-center gap-4 text-zinc-300 ">
        <Link
          href="/login"
          className="text-sm hover:text-zinc-100 hover:text-base transition-all "
        >
          login
        </Link>
      </nav>
    </header>
  );
}
