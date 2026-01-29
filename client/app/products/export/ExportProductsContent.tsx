"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaClock } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { EXPORT_PRODUCTS } from "@/lib/constants";

export default function ExportProductsContent() {
  const hasProducts = EXPORT_PRODUCTS.length > 0;

  return (
    <>
      <PageHeader
        title="Export Products"
        subtitle="Quality products from Bangladesh to global markets"
        badge="Our Exports"
      />

      {/* Products Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          {hasProducts ? (
            // Products Grid - will be populated when export products are added
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Products will be mapped here */}
            </div>
          ) : (
            // Coming Soon State
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="max-w-2xl mx-auto">
                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/10">
                  <FaClock className="text-4xl text-indigo-600" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Coming Soon
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We&apos;re currently curating our export products catalog. 
                  Our team is working to bring you a comprehensive range of 
                  quality products for global markets.
                </p>

                {/* Features coming */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  {[
                    { icon: FaBoxOpen, title: "Quality Products", desc: "Rigorously tested" },
                    { icon: FaBoxOpen, title: "Global Standards", desc: "International compliance" },
                    { icon: FaBoxOpen, title: "Competitive Pricing", desc: "Best market rates" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50"
                    >
                      <item.icon className="text-2xl text-indigo-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/products/import"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm text-indigo-600 font-semibold rounded-xl border border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
                  >
                    View Import Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Contact for Inquiries
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Notify Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white/60 to-amber-50/40 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl shadow-indigo-900/5"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Get Notified
            </h3>
            <p className="text-slate-600 mb-6">
              Be the first to know when our export catalog goes live. 
              Contact us to register your interest.
            </p>
            <Link
              href="/contact?subject=export-notify"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-950 font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Register Interest
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
