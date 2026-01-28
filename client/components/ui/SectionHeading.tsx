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
      className={cn("mb-14", centered && "text-center")}
    >
      <div className="flex items-center gap-4 mb-5 justify-center">
        <span className={cn("w-12 h-px", light ? "bg-amber-400" : "bg-gradient-to-r from-transparent to-amber-400")} />
        <span className={cn(
          "text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full",
          light 
            ? "text-amber-400 bg-white/10" 
            : "text-amber-600 bg-amber-50 border border-amber-200/50"
        )}>
          {subtitle}
        </span>
        <span className={cn("w-12 h-px", light ? "bg-amber-400" : "bg-gradient-to-l from-transparent to-amber-400")} />
      </div>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  );
}
