"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", centered && "text-center")}
    >
      <div className="flex items-center gap-3 mb-4 justify-center">
        <span className={cn("w-10 h-0.5", light ? "bg-gold" : "bg-gold")} />
        <span className={cn("text-sm font-semibold uppercase tracking-wider", light ? "text-gold" : "text-gold-dark")}>
          {subtitle}
        </span>
        <span className={cn("w-10 h-0.5", light ? "bg-gold" : "bg-gold")} />
      </div>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
