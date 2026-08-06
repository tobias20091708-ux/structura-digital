"use client";

import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  className: string;
  colorClassName: string;
  x: number[];
  y: number[];
  rotateX: number[];
  rotateY: number[];
  rotateZ: number[];
  duration: number;
  delay: number;
};

const orbs: Orb[] = [
  {
    className: "-left-40 top-[6%] h-[30rem] w-[30rem] rounded-[6rem]",
    colorClassName: "bg-gradient-to-br from-primary/[0.06] to-primary-light/[0.05]",
    x: [0, 36, -18, 0],
    y: [0, -26, 16, 0],
    rotateX: [0, 14, -10, 0],
    rotateY: [0, -16, 12, 0],
    rotateZ: [0, 6, -4, 0],
    duration: 34,
    delay: 0,
  },
  {
    className: "right-[-12%] top-[38%] h-[24rem] w-[24rem] rounded-[5rem]",
    colorClassName: "bg-gradient-to-br from-accent/[0.05] to-accent/[0.02]",
    x: [0, -32, 20, 0],
    y: [0, 22, -14, 0],
    rotateX: [0, -12, 9, 0],
    rotateY: [0, 15, -11, 0],
    rotateZ: [0, -5, 4, 0],
    duration: 38,
    delay: 3,
  },
  {
    className: "left-[26%] bottom-[-14%] h-[26rem] w-[26rem] rounded-[5.5rem]",
    colorClassName: "bg-gradient-to-br from-success/[0.05] to-success/[0.02]",
    x: [0, 18, -28, 0],
    y: [0, -18, 14, 0],
    rotateX: [0, 9, -13, 0],
    rotateY: [0, -13, 10, 0],
    rotateZ: [0, 4, -6, 0],
    duration: 30,
    delay: 6,
  },
];

export function AmbientOrbs() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute blur-3xl ${orb.className} ${orb.colorClassName}`}
          style={{ transformStyle: "preserve-3d" }}
          animate={
            reduce
              ? undefined
              : {
                  x: orb.x,
                  y: orb.y,
                  rotateX: orb.rotateX,
                  rotateY: orb.rotateY,
                  rotateZ: orb.rotateZ,
                }
          }
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
