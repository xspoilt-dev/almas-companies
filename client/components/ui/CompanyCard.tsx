"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface CompanyCardProps {
  name: string;
  description: string;
  category: string;
  icon: IconType;
  index?: number;
}

export default function CompanyCard({
  name,
  description,
  category,
  icon: Icon,
  index = 0,
}: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-blue via-royal-blue-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-8">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold text-royal-blue bg-royal-blue/10 rounded-full mb-4">
            {category}
          </span>

          {/* Logo placeholder */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center mb-5 group-hover:from-royal-blue/5 group-hover:to-royal-blue/10 group-hover:border-royal-blue/20 transition-all duration-300">
            <Icon className="text-3xl text-royal-blue group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-royal-blue transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Learn more link */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-royal-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
