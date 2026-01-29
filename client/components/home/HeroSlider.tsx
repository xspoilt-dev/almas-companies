"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { HERO_SLIDES } from "@/lib/constants";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-900/85 to-violet-900/80" />
          
          {/* Decorative shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
          </div>

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
                >
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-white/95 text-sm font-medium tracking-wide">
                    25+ Years of Excellence in Global Trade
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-7 leading-tight font-display tracking-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started
                    <FaArrowRight className="text-sm" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border-2 border-white/25 backdrop-blur-md hover:border-white/40 transition-all duration-300"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          className="pointer-events-auto p-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/40"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="pointer-events-auto p-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:border-white/40"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-gradient-to-r from-amber-400 to-amber-500"
                : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator - centered at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
        </motion.div>
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
