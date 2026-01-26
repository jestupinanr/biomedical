"use client";

import { LegacyAnimationControls, VariantLabels } from "motion";
import {
  motion,
  TargetAndTransition,
  Variants,
  ViewportOptions,
} from "motion/react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variants: Variants;
  viewport?: ViewportOptions;
  initial?: boolean | TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  style?: React.CSSProperties;
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | LegacyAnimationControls;
};

export default function AnimatedSection({
  children,
  className,
  variants,
  viewport,
  initial,
  whileInView,
  style,
  animate,
}: Props) {
  return (
    <motion.div
      className={className}
      {...{ variants, viewport, initial, whileInView, style, animate }}
    >
      {children}
    </motion.div>
  );
}
