"use client";

import { useCallback, useId, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/95 backdrop-blur-md dark:border-zinc-800 dark:bg-black/95">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-900 transition-colors hover:bg-zinc-200/80 md:hidden dark:text-zinc-50 dark:hover:bg-zinc-800"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className="flex h-[14px] w-[22px] flex-col justify-between"
            aria-hidden
          >
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
            <span className="block h-0.5 w-full rounded-full bg-current" />
          </span>
        </button>

        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:order-1"
          onClick={close}
        >
          Robert Garcia
        </a>

        <nav
          className="hidden md:order-2 md:block"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        id={panelId}
        className={`border-t border-zinc-200/80 bg-zinc-50 dark:border-zinc-800 dark:bg-black md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col px-4 py-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-zinc-700 transition-colors hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
