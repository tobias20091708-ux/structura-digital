"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { ctaText } from "@/lib/data";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#fordele", label: "Om os" },
  { href: "/portfolio", label: "Cases" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-xl px-4 py-2.5 backdrop-blur-md transition-all duration-300",
            scrolled
              ? "border border-foreground/10 bg-background/90 shadow-[0_8px_24px_-16px_rgba(31,41,55,0.25)]"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link href="/" aria-label="Structura Digital – forside">
            <Logo invert={onDark} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary-light"
                      : onDark
                        ? "text-white/70 hover:text-white"
                        : "text-foreground/70 hover:text-primary-light"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/kontakt" size="sm">
              {ctaText}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex items-center justify-center rounded-lg p-2 md:hidden",
              onDark ? "text-white" : "text-foreground"
            )}
            aria-label="Åbn menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-6 mt-2 rounded-xl border border-foreground/10 bg-background/95 p-4 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary-light/[0.07] text-primary-light"
                      : "text-foreground/70 hover:bg-foreground/[0.05] hover:text-primary-light"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href="/kontakt" className="mt-3 w-full" onClick={() => setOpen(false)}>
              {ctaText}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
