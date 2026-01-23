"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaGlobe, FaClock, FaUsers, FaMedal, FaHeadset } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: FaGlobe,
    title: "Global Network",
    description: "Extensive partnerships across 50+ countries enabling seamless international operations.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Expertise",
    description: "25+ years of experience in international trade with proven track record of success.",
  },
  {
    icon: FaClock,
    title: "Fast & Efficient",
    description: "Streamlined processes ensuring quick turnaround times and on-time deliveries.",
  },
  {
    icon: FaUsers,
    title: "Dedicated Team",
    description: "Expert professionals committed to understanding and meeting your unique needs.",
  },
  {
    icon: FaMedal,
    title: "Quality Assured",
    description: "Rigorous quality control measures ensuring excellence at every stage.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Round-the-clock customer support to address your queries and concerns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative">
        <SectionHeading
          title="Why Choose Almas Group?"
          subtitle="Our Advantages"
          light
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto mt-4"
          >
            Partner with a company that combines global reach with personalized service 
            to deliver exceptional results for your business.
          </motion.p>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="text-gold text-xl group-hover:text-royal-blue-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
