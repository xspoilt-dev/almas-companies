"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  benefits?: string[];
  index?: number;
  compact?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
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
          "h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300",
          "hover:border-royal-blue/20 hover:-translate-y-2",
          compact ? "p-6" : "p-8"
        )}
      >
        {/* Icon */}
        <div className="mb-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-dark flex items-center justify-center shadow-lg shadow-royal-blue/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white text-2xl" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* Decorative line */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="w-0 h-0.5 bg-gradient-to-r from-royal-blue to-gold group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
