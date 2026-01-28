"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-24 relative">
      {/* Subtle frosted overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 via-transparent to-indigo-50/20" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 rounded-[2.5rem] overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight"
            >
              Ready to Expand Your Business Globally?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Partner with Almas Group for seamless international trade solutions. 
              Let&apos;s discuss how we can help you achieve your global ambitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-900 font-bold rounded-2xl shadow-xl shadow-black/15 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us Today
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-2xl border border-white/25 backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
