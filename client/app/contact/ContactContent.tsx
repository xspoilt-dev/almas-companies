"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactContent() {
  const searchParams = useSearchParams();
  
  // Get query parameters
  const productParam = searchParams.get('product');
  const typeParam = searchParams.get('type');
  const subjectParam = searchParams.get('subject');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill form based on URL parameters
  useEffect(() => {
    if (productParam && typeParam) {
      const subjectText = `${typeParam === 'import' ? 'Import' : 'Export'} Inquiry - ${productParam}`;
      const messageText = `I would like to inquire about ${productParam} for ${typeParam}.

Product: ${productParam}
Type: ${typeParam.toUpperCase()}

Please provide me with:
- Pricing information
- Minimum order quantity
- Lead time
- Shipping options
- Product specifications

Thank you.`;

      setFormData(prev => ({
        ...prev,
        subject: 'product-inquiry',
        message: messageText
      }));
    } else if (subjectParam) {
      setFormData(prev => ({
        ...prev,
        subject: subjectParam
      }));
    }
  }, [productParam, typeParam, subjectParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://almas-companies.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to start your global trade journey? We're here to help"
      />

      {/* Contact Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-amber-50/20 to-indigo-50/30 backdrop-blur-[1px]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-0.5 bg-amber-500" />
                  <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
                    Get in Touch
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s Discuss Your Business Needs
                </h2>

                <p className="text-gray-600 mb-8">
                  Whether you need import-export services, logistics solutions, or 
                  business consulting, our team is ready to assist you.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-indigo-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-indigo-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-indigo-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-indigo-600 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600 text-sm">{CONTACT_INFO.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com/almas-companies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://twitter.com/almas-companies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61587080888720"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/50 shadow-xl shadow-indigo-900/5">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we&apos;ll respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="import-export">Import/Export Inquiry</option>
                          <option value="logistics">Logistics & Shipping</option>
                          <option value="customs">Customs & Documentation</option>
                          <option value="consulting">Business Consulting</option>
                          <option value="sourcing">Sourcing & Procurement</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white/60 to-amber-50/40 backdrop-blur-[1px]" />
        <div className="container-custom py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Google Maps Embed */}
            <div className="aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.35739479228!2d90.41018878663496!3d23.75024366976588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85916ce4e85%3A0xa0adb5fd6f443174!2sRahmania%20International%20Complex!5e0!3m2!1sen!2sbd!4v1769232015764!5m2!1sen!2sbd"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
