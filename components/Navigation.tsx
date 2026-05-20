"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-100/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-950"
        >
          Kanae Tokitou
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {(
            [
              ["Works", "#works"],
              ["Skills", "#skills"],
            ] as [string, string][]
          ).map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-950"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
