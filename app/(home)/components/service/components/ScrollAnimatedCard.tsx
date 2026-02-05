/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Direction = "up" | "left" | "right";

type Props = {
  children: React.ReactNode;
  index: number;
  direction?: Direction;
};

export default function ScrollAnimatedCard({
  children,
  index,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"],
  });

  // Base movement
  const baseY = 28 + index * 4;
  const baseX = 24;

  const y =
    direction === "up" ? useTransform(scrollYProgress, [0, 1], [baseY, 0]) : 0;

  const x =
    direction === "left"
      ? useTransform(scrollYProgress, [0, 1], [-baseX, 0])
      : direction === "right"
        ? useTransform(scrollYProgress, [0, 1], [baseX, 0])
        : 0;

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        style={{ x, y, opacity }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
