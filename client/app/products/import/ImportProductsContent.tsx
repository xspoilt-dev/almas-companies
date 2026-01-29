"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBoxOpen, FaShip } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMPORT_PRODUCTS } from "@/lib/constants";

export default function ImportProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  // Get unique categories
  const categories = [...new Set(IMPORT_PRODUCTS.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? IMPORT_PRODUCTS 
    : IMPORT_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Import Products"
        subtitle="Premium quality commodities sourced from trusted global suppliers"
        badge="Our Imports"
      />

      {/* Products Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <SectionHeading title="Our Import Portfolio" subtitle="Quality Products">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 max-w-3xl mx-auto mt-4"
            >
              We import a diverse range of high-quality products from trusted international 
              suppliers. Each product undergoes rigorous quality checks to ensure it meets 
              our strict standards.
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

                    {/* Import Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <FaShip className="text-white text-sm" />
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
                      href={`/contact?product=${encodeURIComponent(product.name)}&type=import`}
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
        </div>
      </section>

      {/* CTA Section */}
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
              Need a Custom Import Solution?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Can&apos;t find what you&apos;re looking for? Contact us with your specific 
              requirements and we&apos;ll source it for you from our global network.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-indigo-950 font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Our Team
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
