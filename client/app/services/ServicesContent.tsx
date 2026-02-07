"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServicesContent() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions for all your international trade and business needs"
      />

      {/* Services Overview */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <SectionHeading title="What We Offer" subtitle="Our Expertise">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto mt-4"
            >
              At Almas Group, we provide end-to-end solutions that cover every aspect 
              of international trade. Our experienced team ensures seamless operations 
              from sourcing to delivery.
            </motion.p>
          </SectionHeading>

          {/* Services Grid */}
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-amber-100/80 text-amber-700 text-sm font-semibold rounded-full">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 hover:text-indigo-700 transition-all duration-200"
                    >
                      Get a Quote
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-xl relative">
                        {/* Service Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                          quality={75}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/50 to-transparent z-10" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                          <h4 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                            {service.title}
                          </h4>
                          <p className="text-white/90 text-sm drop-shadow-md">
                            {service.shortDescription}
                          </p>
                        </div>

                        {/* Logo watermark */}
                        <div className="absolute top-6 right-6 z-20 opacity-60">
                          <Image 
                            src="/images/logo.png" 
                            alt="Almas Group" 
                            width={50} 
                            height={50}
                            className="opacity-80"
                            loading="lazy"
                            quality={75}
                          />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -z-10 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"} w-24 h-24 bg-amber-400/20 rounded-2xl`} />
                      <div className={`absolute -z-10 ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"} w-16 h-16 bg-indigo-500/10 rounded-xl`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white/60 to-amber-50/40 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl shadow-indigo-900/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-slate-600 mb-8">
              Our team is ready to design a tailored package that meets your specific 
              business requirements. Contact us to discuss your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
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
