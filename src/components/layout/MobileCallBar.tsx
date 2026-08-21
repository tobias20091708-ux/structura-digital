"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { contact } from "@/lib/data";

export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={contact.phoneHref}
      aria-label={`Ring ${contact.phone}`}
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-accent px-4 py-4 text-base font-semibold text-white shadow-[0_-4px_16px_rgba(0,0,0,0.15)] transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Phone className="h-4 w-4" />
      Ring nu — {contact.phone}
    </a>
  );
}
