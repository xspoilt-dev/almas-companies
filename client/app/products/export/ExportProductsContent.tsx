"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaClock, FaPlane } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPORT_PRODUCTS } from "@/lib/constants";

export default function ExportProductsContent() {
  const hasProducts = EXPORT_PRODUCTS.length > 0;
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  // Get unique categories
  const categories = [...new Set(EXPORT_PRODUCTS.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? EXPORT_PRODUCTS 
    : EXPORT_PRODUCTS.filter((p) => p.category === selectedCategory);

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
            <>
              <SectionHeading title="Our Export Portfolio" subtitle="Quality Products">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-600 max-w-3xl mx-auto mt-4"
                >
                  We export high-quality products from Bangladesh to international markets. 
                  Each product is carefully selected and quality-controlled to meet global standards.
                </motion.p>
              </SectionHeading>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                <button
                  onClick={() => setSelectedCategory("All Products")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedCategory === "All Products"
                      ? "bg-indigo-600 text-white"
                      : "bg-white/70 backdrop-blur-sm text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-white/70 backdrop-blur-sm text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <div className="relative h-full bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg shadow-indigo-900/5 overflow-hidden hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
                      {/* Product Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-indigo-900/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-amber-400 text-indigo-950 text-xs font-semibold rounded-full">
                            {product.category}
                          </span>
                        </div>

                        {/* Export Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <FaPlane className="text-white text-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {product.description}
                        </p>

                        {/* Inquiry Button */}
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}&type=export`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <FaBoxOpen className="text-xs" />
                          Inquire Now
                          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
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
