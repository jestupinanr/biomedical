// Animation variants for scroll-triggered effects
// Professional, subtle, and aligned with biomedical/corporate aesthetics

import { Variants } from "motion";

export const fadeInUp = (duration: number = 3): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1], // Custom ease-in-out curve
    },
  },
});

export const fadeInLeft = (duration: number = 0.6): Variants => ({
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const fadeInRight = (duration: number = 0.6): Variants => ({
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Container variant for staggered children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between each child
      delayChildren: 0.1,
    },
  },
};

// Container with faster stagger for smaller elements
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Viewport configuration for consistent behavior
export const viewportConfig = {
  once: true, // Animation triggers only once
  margin: "-50px", // Trigger 50px before element enters viewport
  amount: 0.2, // Trigger when 20% of element is visible
};

// More aggressive viewport for sections
export const viewportConfigSection = {
  once: true,
  margin: "-100px",
  amount: 0.1,
};

export const zoomOutBackground = (duration: number = 2.5): Variants => ({
  hidden: {
    scale: 1.15,
    opacity: 0.5,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});
