"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: IconType;
  image?: string;
  benefits?: string[];
  index?: number;
  compact?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  benefits,
  index = 0,
  compact = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={cn(
          "h-full rounded-3xl transition-all duration-500",
          "bg-gradient-to-b from-white to-slate-50/80 backdrop-blur-sm",
          "border border-slate-200/60 shadow-sm",
          "hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-3 hover:border-indigo-200/60",
          compact ? "p-6" : "p-8"
        )}
      >
        {/* Icon or Image */}
        <div className="mb-5">
          {image ? (
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-2">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
            </div>
          ) : Icon ? (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-500/25 group-hover:scale-110 group-hover:shadow-indigo-500/40 transition-all duration-500">
              <Icon className="text-white text-3xl" />
            </div>
          ) : null}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 font-display tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4">{description}</p>

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2.5">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* Decorative line */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="w-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}
