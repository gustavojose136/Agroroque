"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function DefaultNav() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('auth/login');
  }

  return (
    <header className="sticky top-0 z-[50] w-full border-b border-transparent bg-white drop-shadow-sm">
      {/* DESKTOP NAV */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-16 max-w-[88rem] items-center px-8">
          <div className="mr-4 flex">
            <a
              className="dark:text-gray-100 mr-10 flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600"
              href="/"
            >
              <div className="relative h-30 w-26">
                <Image
                  alt="Logo"
                  loading="lazy"
                  fill
                  decoding="async"
                  className="block object-contain dark:hidden"
                  src="/images/logo/logo-horizontal.png"
                />
              </div>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            <Link
              className="hidden space-x-1 text-black transition-colors hover:text-foreground/60 sm:flex"
              href="/contato"
            >
              Contato
            </Link>

            <button className="flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium outline-none ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:outline-none active:ring-0 disabled:pointer-events-none disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon h-4 w-4 text-neutral-500 dark:text-neutral-500"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span className="sr-only">Mudar tema</span>
            </button>

            <span className="text-sm text-foreground/60">|</span>
            <button 
            onClick={() => {redirectToLogin()}}
            className="relative flex w-fit items-center justify-start rounded-xl border border-gray bg-transparent px-4 py-2 text-sm font-semibold text-muted-foreground shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] transition-all hover:bg-accent hover:text-accent-foreground dark:border-white/[0.2]">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultNav;
