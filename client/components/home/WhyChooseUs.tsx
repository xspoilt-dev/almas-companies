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
    description: "30+ years of experience in international trade with proven track record of success.",
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
    <section className="section-padding bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
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
            className="text-white/80 max-w-2xl mx-auto mt-5 text-lg leading-relaxed"
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
              <div className="h-full p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-amber-400/20 flex items-center justify-center group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-500">
                    <reason.icon className="text-amber-400 text-xl group-hover:text-indigo-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">
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
