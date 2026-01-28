"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="py-16 relative">
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-amber-50/40 to-white/70 backdrop-blur-md border-y border-amber-200/30" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-violet-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
