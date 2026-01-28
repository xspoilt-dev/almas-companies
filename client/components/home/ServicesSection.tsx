"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="section-padding relative">
      {/* Subtle frosted glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-[1px]" />
      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="What We Offer"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed"
          >
            Comprehensive solutions for all your international trade and business needs. 
            We deliver excellence at every step of your global journey.
          </motion.p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              index={index}
              compact
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Services
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
