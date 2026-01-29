"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaStar,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { CORE_VALUES, STATS } from "@/lib/constants";

const valueIcons = [FaHandshake, FaStar, FaLightbulb, FaUsers];

export default function AboutContent() {
  return (
    <>
      <PageHeader
        title="About Almas Group"
        subtitle="Connecting global markets with trust, expertise, and innovation since 1995"
      />

      {/* Company Overview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full text-amber-600 bg-amber-50 border border-amber-200/50">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                A Legacy of Excellence in Global Trade
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded in 1995, Almas Group has grown from a small trading company 
                  to a diversified conglomerate with operations spanning multiple continents. 
                  Our journey began with a simple vision: to bridge the gap between markets 
                  and create opportunities for businesses worldwide.
                </p>
                <p>
                  Today, we are proud to serve over 100 happy clients across 10+ countries, 
                  handling more than 600 shipments annually. Our comprehensive suite of 
                  services covers everything from import-export operations to logistics, 
                  customs clearance, and strategic business consulting.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to our clients&apos; success. 
                  We don&apos;t just facilitate transactions; we build lasting partnerships 
                  that help businesses thrive in the global marketplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/30 to-amber-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-indigo-900/5 border border-white/50 hover:shadow-xl hover:border-indigo-200 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with seamless international trade solutions, 
                delivering exceptional value through innovative services, operational 
                excellence, and unwavering commitment to client success. We strive to 
                be the bridge that connects opportunities across borders, enabling 
                growth and prosperity for all our partners.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-indigo-900/5 border border-white/50 hover:shadow-xl hover:border-amber-200 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25">
                <FaEye className="text-indigo-950 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the world&apos;s most trusted partner in international trade, 
                recognized for our integrity, innovation, and impact. We envision a 
                future where businesses of all sizes can access global markets with 
                confidence, supported by our comprehensive solutions and dedicated 
                team of experts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-amber-50/30 to-indigo-50/40 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <SectionHeading title="Our Core Values" subtitle="What Drives Us" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:border-indigo-200 hover:shadow-xl shadow-lg shadow-indigo-900/5 transition-all h-full">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="text-2xl text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Mindset */}
      <section className="section-padding bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-amber-400" />
                <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                  Global Perspective
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Global Business Mindset
              </h2>

              <p className="text-white/80 leading-relaxed mb-6">
                In today&apos;s interconnected world, success requires more than local expertise. 
                At Almas Group, we combine deep understanding of regional markets with a 
                truly global perspective. Our team includes professionals from diverse 
                backgrounds, bringing unique insights and cultural awareness to every project.
              </p>

              <ul className="space-y-4">
                {[
                  "Operations across 50+ countries and growing",
                  "Multilingual team serving diverse markets",
                  "Strategic partnerships on every continent",
                  "Compliance with international trade regulations",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-amber-400 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Globe representation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center">
                  <FaGlobe className="text-[150px] text-white/20" />
                </div>

                {/* Floating indicators */}
                {[
                  { pos: "top-0 left-1/4", label: "Europe" },
                  { pos: "top-1/4 right-0", label: "Asia" },
                  { pos: "bottom-1/4 right-0", label: "Americas" },
                  { pos: "bottom-0 left-1/4", label: "Africa" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`absolute ${item.pos}`}
                  >
                    <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
