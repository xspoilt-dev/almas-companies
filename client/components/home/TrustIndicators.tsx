"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaAward, FaCertificate, FaShippingFast } from "react-icons/fa";

const partners = [
  { name: "Chamber of Commerce", icon: FaCertificate },
  { name: "Trade Federation", icon: FaHandshake },
  { name: "Logistics Alliance", icon: FaShippingFast },
  { name: "Quality Council", icon: FaAward },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 relative">
      {/* Frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-white/60 to-amber-50/40 backdrop-blur-md border-y border-indigo-200/20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-slate-500 text-sm uppercase tracking-wider font-medium">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm border border-slate-200/50 flex items-center justify-center group-hover:shadow-lg group-hover:border-indigo-300/50 transition-all duration-300">
                <partner.icon className="text-3xl text-slate-400 group-hover:text-indigo-500 transition-colors duration-300" />
              </div>
              <span className="text-sm text-slate-600 font-medium text-center">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
