"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CompanyCard from "@/components/ui/CompanyCard";
import { COMPANIES } from "@/lib/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CompaniesContent() {
  return (
    <>
      <PageHeader
        title="Our Companies"
        subtitle="A diversified portfolio of businesses driving global growth and innovation"
      />

      {/* Companies Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <SectionHeading title="The Almas Group Portfolio" subtitle="Our Businesses">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto mt-4"
            >
              Almas Group operates across multiple sectors through specialized subsidiary 
              companies. Each business unit brings unique expertise and capabilities, 
              creating synergies that benefit our clients and partners.
            </motion.p>
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANIES.map((company, index) => (
              <CompanyCard
                key={company.id}
                name={company.name}
                description={company.description}
                category={company.category}
                icon={company.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white/60 to-amber-50/40 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-amber-500" />
                <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
                  Unified Strength
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Power of Synergy
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our diverse portfolio isn&apos;t just a collection of businesses – it&apos;s an 
                integrated ecosystem where each company enhances the capabilities of others. 
                When you partner with any Almas company, you gain access to the resources 
                and expertise of the entire group.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Seamless coordination across supply chain",
                  "Shared technology and infrastructure",
                  "Combined market intelligence",
                  "Unified quality standards",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Partner With Us
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Network visualization */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/30 z-10">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-amber-400">A</span>
                    <p className="text-white text-xs">Group</p>
                  </div>
                </div>

                {/* Orbiting companies */}
                {COMPANIES.map((company, index) => {
                  const Icon = company.icon;
                  const angle = (index * 60) - 30; // 60 degrees apart
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="absolute top-1/2 left-1/2 w-14 h-14 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      title={company.name}
                    >
                      <Icon className="text-xl text-indigo-600" />
                    </motion.div>
                  );
                })}

                {/* Connection lines (decorative) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="rgba(79, 70, 229, 0.15)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl animate-blob" />
        </div>

        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you&apos;re looking for a service provider, business partner, or 
              investment opportunity, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-indigo-950 font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
