"use client";

import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
};

const particles: Particle[] = [
  { x: "6%", y: "18%", size: 3, duration: 12, delay: 0 },
  { x: "14%", y: "62%", size: 2, duration: 15, delay: 0.6 },
  { x: "22%", y: "34%", size: 3, duration: 11, delay: 1.2 },
  { x: "31%", y: "78%", size: 2, duration: 16, delay: 0.3 },
  { x: "38%", y: "12%", size: 2, duration: 13, delay: 1.8 },
  { x: "46%", y: "48%", size: 4, duration: 14, delay: 0.9 },
  { x: "53%", y: "24%", size: 2, duration: 12, delay: 2.1 },
  { x: "61%", y: "68%", size: 3, duration: 17, delay: 0.4 },
  { x: "68%", y: "38%", size: 2, duration: 13, delay: 1.4 },
  { x: "76%", y: "16%", size: 3, duration: 15, delay: 0.7 },
  { x: "83%", y: "58%", size: 2, duration: 11, delay: 2.4 },
  { x: "91%", y: "30%", size: 3, duration: 14, delay: 1.1 },
  { x: "12%", y: "88%", size: 2, duration: 16, delay: 1.6 },
  { x: "58%", y: "86%", size: 2, duration: 12, delay: 0.2 },
  { x: "88%", y: "82%", size: 3, duration: 15, delay: 1.9 },
];

const lines = [
  { x1: "6%", y1: "18%", x2: "22%", y2: "34%" },
  { x1: "22%", y1: "34%", x2: "38%", y2: "12%" },
  { x1: "46%", y1: "48%", x2: "61%", y2: "68%" },
  { x1: "53%", y1: "24%", x2: "68%", y2: "38%" },
  { x1: "68%", y1: "38%", x2: "76%", y2: "16%" },
  { x1: "76%", y1: "16%", x2: "91%", y2: "30%" },
];

export function HeroParticles() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary-light/25 blur-[130px]" />
      <div className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[110px]" />

      <div
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px]"
      />

      <svg className="absolute inset-0 h-full w-full">
        {lines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(96,165,250,0.22)"
            strokeWidth={1}
            animate={reduce ? undefined : { opacity: [0.12, 0.4, 0.12] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </svg>

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary-light shadow-[0_0_14px_2px_rgba(37,99,235,0.55)]"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={reduce ? undefined : { y: [0, -16, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}
