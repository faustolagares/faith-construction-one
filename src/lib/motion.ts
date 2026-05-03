import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Section scroll animations — used with whileInView
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Para listas que vêm depois de um heading no mesmo bloco orquestrado
export const staggerAfterHeading: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
};

// Para CTAs/elementos que entram depois de uma lista staggered
export const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.85 } },
};

// Hero animations — slower, more deliberate, editorial feel
export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.35 } },
};

// Tags entram só depois que todo o conteúdo da hero terminou
export const heroTagsStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 1.9 } },
};

export const viewport = { once: true, margin: "-80px 0px -80px 0px", amount: 0.15 };
