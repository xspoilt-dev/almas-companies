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
        subtitle="Connecting global markets with trust, expertise, and innovation since 1999"
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-gold" />
                <span className="text-gold-dark text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence in Global Trade
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1999, Almas Group has grown from a small trading company 
                  to a diversified conglomerate with operations spanning multiple continents. 
                  Our journey began with a simple vision: to bridge the gap between markets 
                  and create opportunities for businesses worldwide.
                </p>
                <p>
                  Today, we are proud to serve over 1,000 clients across 50+ countries, 
                  handling more than 5,000 shipments annually. Our comprehensive suite of 
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
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-bold text-royal-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-royal-blue-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-royal-blue/20">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
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
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gold/20">
                <FaEye className="text-royal-blue-dark text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
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
                  <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-royal-blue/20 hover:shadow-lg transition-all h-full">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-royal-blue/10 flex items-center justify-center group-hover:bg-royal-blue group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-2xl text-royal-blue group-hover:text-white transition-colors" />
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
      <section className="section-padding bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-light relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
                <span className="w-10 h-0.5 bg-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
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
                    <FaCheckCircle className="text-gold flex-shrink-0" />
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
