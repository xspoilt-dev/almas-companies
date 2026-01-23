"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServicesContent() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions for all your international trade and business needs"
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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
              const Icon = service.icon;
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
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal-blue to-royal-blue-dark flex items-center justify-center shadow-lg shadow-royal-blue/20">
                        <Icon className="text-white text-2xl" />
                      </div>
                      <span className="px-3 py-1 bg-gold/10 text-gold-dark text-sm font-semibold rounded-full">
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
                      className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:gap-3 transition-all duration-200"
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
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                        {/* Pattern background */}
                        <div 
                          className="absolute inset-0 opacity-50"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(30, 64, 175, 0.1) 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                          }}
                        />

                        {/* Icon display */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-royal-blue to-royal-blue-dark flex items-center justify-center shadow-xl">
                              <Icon className="text-white text-4xl" />
                            </div>
                            <p className="text-gray-900 font-semibold">{service.title}</p>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className={`absolute -z-10 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"} w-24 h-24 bg-gold/20 rounded-2xl`} />
                      <div className={`absolute -z-10 ${isEven ? "-top-4 -left-4" : "-top-4 -right-4"} w-16 h-16 bg-royal-blue/10 rounded-xl`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is ready to design a tailored package that meets your specific 
              business requirements. Contact us to discuss your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-blue to-royal-blue-dark text-white font-semibold rounded-lg shadow-lg shadow-royal-blue/25 hover:shadow-xl hover:shadow-royal-blue/30 transform hover:-translate-y-0.5 transition-all duration-200"
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
