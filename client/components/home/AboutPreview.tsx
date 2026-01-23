"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-gold" />
              <span className="text-gold-dark text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Connecting Global Markets Since 1999
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Almas Group has been at the forefront of international trade for over two decades. 
              As a diversified conglomerate, we specialize in import-export services, logistics, 
              and business consulting, serving clients across continents.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our commitment to excellence, combined with our deep understanding of global markets, 
              has made us a trusted partner for businesses seeking to expand their international footprint. 
              We bridge the gap between markets, ensuring seamless transactions and lasting partnerships.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-royal-blue/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-royal-blue">25+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Years</div>
                  <div className="text-sm text-gray-500">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-gold-dark">50+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Countries</div>
                  <div className="text-sm text-gray-500">Worldwide</div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn More About Us
              <FaArrowRight className="text-sm" />
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
              <div className="aspect-[4/3] bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <span className="text-5xl font-bold text-gold">A</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Almas Group</h3>
                    <p className="text-white/70">Global Trade Excellence</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-royal-blue/10 rounded-2xl -z-10" />
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">ISO Certified</div>
                    <div className="text-xs text-gray-500">Quality Assured</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
