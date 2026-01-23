"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Determine if navbar should use light text (on dark backgrounds)
  const useLightText = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : isHomePage
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                useLightText 
                  ? "bg-white/20 backdrop-blur-sm border border-white/30" 
                  : "bg-gradient-to-br from-royal-blue to-royal-blue-dark"
              )}>
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-xl font-bold transition-colors",
                  useLightText ? "text-white" : "text-royal-blue"
                )}>Almas</span>
                <span className={cn(
                  "text-xs -mt-1 transition-colors",
                  useLightText ? "text-white/70" : "text-gray-600"
                )}>Group</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    useLightText
                      ? pathname === link.href
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : pathname === link.href
                        ? "text-royal-blue bg-royal-blue/10"
                        : "text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-royal-blue to-royal-blue-dark text-white text-sm font-semibold rounded-lg shadow-lg shadow-royal-blue/25 hover:shadow-xl hover:shadow-royal-blue/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              useLightText 
                ? "text-white hover:text-gold" 
                : "text-gray-700 hover:text-royal-blue"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={cn(
                "py-4 border-t mx-4 rounded-lg",
                useLightText 
                  ? "bg-white/10 backdrop-blur-md border-white/20" 
                  : "bg-white border-gray-100"
              )}>
                <ul className="flex flex-col gap-2 px-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-center",
                          useLightText
                            ? pathname === link.href
                              ? "text-white bg-white/20"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                            : pathname === link.href
                              ? "text-royal-blue bg-royal-blue/10"
                              : "text-gray-700 hover:text-royal-blue hover:bg-royal-blue/5"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2 px-2">
                    <Link
                      href="/contact"
                      className="block text-center px-4 py-3 bg-gradient-to-r from-gold to-gold-dark text-royal-blue-dark text-sm font-semibold rounded-lg"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
