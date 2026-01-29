"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section className="section-padding relative">
      {/* Subtle frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-amber-600 bg-amber-50 border border-amber-200/50">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Connecting Global Markets Since 1995
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              Almas Group has been at the forefront of international trade for over two decades. 
              As a diversified conglomerate, we specialize in import-export services, logistics, 
              and business consulting, serving clients across continents.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Our commitment to excellence, combined with our deep understanding of global markets, 
              has made us a trusted partner for businesses seeking to expand their international footprint. 
              We bridge the gap between markets, ensuring seamless transactions and lasting partnerships.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/50 flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">25+</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Years</div>
                  <div className="text-sm text-slate-500">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 flex items-center justify-center">
                  <span className="text-xl font-bold text-amber-600">50+</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Countries</div>
                  <div className="text-sm text-slate-500">Worldwide</div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-indigo-600 font-semibold hover:gap-4 transition-all duration-300 group"
            >
              Learn More About Us
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual block */}
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/25">
                {/* Pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center flex items-center justify-center">
                    <Image 
                      src="/logo.png" 
                      alt="Almas Group Logo" 
                      width={280} 
                      height={120}
                      className="w-auto h-auto max-w-[280px] brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-amber-200 to-amber-300 rounded-3xl -z-10 opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl -z-10 opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
