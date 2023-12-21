"use client";

import React from "react";
import { useMousePosition } from "@/hooks/index";
import { motion } from "framer-motion";
import clsx from "clsx";
import { type SpotlightProps } from "@/types/index";

export function Spotlight({
  children,
  size = 400,
  strength = 5,
  color = "rgba(188, 255, 219, 0.5)",
  className,
}: SpotlightProps) {
  const ref = React.useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;

  return (
    <motion.div
      ref={ref}
      className={clsx("relative h-full w-full overflow-hidden ", className)}
      whileHover='hover'
    >
      <motion.div
        style={
          {
            "--x": `${x ? x - offset : -offset}px`,
            "--y": `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background: `radial-gradient(${color} 0%, rgba(188, 255, 219, 0) 50%)`,
          } as React.CSSProperties
        }
        className={`pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity`}
        variants={{
          hover: {
            opacity: strength / 100,
          },
        }}
      />
      {children}
    </motion.div>
  );
}
