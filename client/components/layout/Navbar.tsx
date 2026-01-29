"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Update current path when pathname changes
  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  // Check if a link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  const isHomePage = currentPath === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Determine if navbar should use light text (on dark backgrounds)
  const useLightText = isHomePage && !isScrolled;

  return (
    <>
      {/* Main navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50"
            : useLightText 
              ? "bg-white/5 backdrop-blur-xl border-b border-white/10" 
              : "bg-white/90 backdrop-blur-2xl shadow-sm border-b border-slate-200/50"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className={cn(
                  "relative h-16 transition-all duration-300 group-hover:scale-105",
                )}>
                  <Image 
                    src="/logo.png" 
                    alt="Almas Group Logo" 
                    width={180} 
                    height={64}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center"
            >
              <div className={cn(
                "flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-300",
                useLightText 
                  ? "bg-white/10 backdrop-blur-md border border-white/15" 
                  : "bg-slate-100/80 border border-slate-200/50"
              )}>
                {(NAV_LINKS as readonly NavLink[]).map((link) => {
                  const isActive = isLinkActive(link.href);
                  const hasChildren = link.children && link.children.length > 0;

                  if (hasChildren) {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(link.href)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className={cn(
                            "relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5",
                            useLightText
                              ? isActive
                                ? "text-white bg-white/25 shadow-inner"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                              : isActive
                                ? "text-indigo-700 bg-white shadow-md font-semibold"
                                : "text-slate-600 hover:text-indigo-600 hover:bg-white/60"
                          )}
                        >
                          {link.label}
                          <FaChevronDown className={cn(
                            "text-[10px] transition-transform duration-200",
                            openDropdown === link.href && "rotate-180"
                          )} />
                          {isActive && (
                            <motion.div
                              layoutId="activeNav"
                              className={cn(
                                "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full",
                                useLightText ? "bg-amber-400" : "bg-indigo-600"
                              )}
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {openDropdown === link.href && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-56 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/50 overflow-hidden z-50"
                            >
                              {link.children?.map((child) => {
                                const isChildActive = isLinkActive(child.href);
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      "block px-4 py-3 text-sm font-medium transition-all duration-200",
                                      isChildActive
                                        ? "text-indigo-700 bg-indigo-50 border-l-4 border-indigo-600"
                                        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50 border-l-4 border-transparent"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                        useLightText
                          ? isActive
                            ? "text-white bg-white/25 shadow-inner"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                          : isActive
                            ? "text-indigo-700 bg-white shadow-md font-semibold"
                            : "text-slate-600 hover:text-indigo-600 hover:bg-white/60"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className={cn(
                            "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full",
                            useLightText ? "bg-amber-400" : "bg-indigo-600"
                          )}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex items-center gap-4"
            >
              <Link
                href="/contact"
                className={cn(
                  "group inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5",
                  useLightText
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
                    : "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
                )}
              >
                Get Started
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-3 rounded-xl transition-all duration-300",
                useLightText 
                  ? "text-white bg-white/10 hover:bg-white/20 border border-white/20" 
                  : "text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
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
                className="lg:hidden overflow-hidden"
              >
                <div className={cn(
                  "py-6 mx-4 mb-4 rounded-2xl border",
                  useLightText 
                    ? "bg-white/10 backdrop-blur-xl border-white/20" 
                    : "bg-white/95 backdrop-blur-xl border-slate-200/50 shadow-xl"
                )}>
                  <ul className="flex flex-col gap-2 px-4">
                    {(NAV_LINKS as readonly NavLink[]).map((link, index) => {
                      const isActive = isLinkActive(link.href);
                      const hasChildren = link.children && link.children.length > 0;

                      if (hasChildren) {
                        return (
                          <motion.li
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <button
                              onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                              className={cn(
                                "w-full flex items-center justify-between px-5 py-4 rounded-xl text-base font-medium transition-all duration-200",
                                useLightText
                                  ? isActive
                                    ? "text-white bg-white/25 border-l-4 border-amber-400"
                                    : "text-white/90 hover:text-white hover:bg-white/10"
                                  : isActive
                                    ? "text-indigo-700 bg-indigo-50 border-l-4 border-indigo-600 font-semibold"
                                    : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                              )}
                            >
                              {link.label}
                              <FaChevronDown className={cn(
                                "text-xs transition-transform duration-200",
                                openDropdown === link.href && "rotate-180"
                              )} />
                            </button>

                            {/* Mobile Submenu */}
                            <AnimatePresence>
                              {openDropdown === link.href && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pt-2 space-y-1">
                                    {link.children?.map((child) => {
                                      const isChildActive = isLinkActive(child.href);
                                      return (
                                        <Link
                                          key={child.href}
                                          href={child.href}
                                          className={cn(
                                            "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                                            useLightText
                                              ? isChildActive
                                                ? "text-white bg-white/20 border-l-2 border-amber-400"
                                                : "text-white/80 hover:text-white hover:bg-white/10"
                                              : isChildActive
                                                ? "text-indigo-700 bg-indigo-50/70 border-l-2 border-indigo-600"
                                                : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                                          )}
                                        >
                                          {child.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.li>
                        );
                      }

                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center justify-between px-5 py-4 rounded-xl text-base font-medium transition-all duration-200",
                              useLightText
                                ? isActive
                                  ? "text-white bg-white/25 border-l-4 border-amber-400"
                                  : "text-white/90 hover:text-white hover:bg-white/10"
                                : isActive
                                  ? "text-indigo-700 bg-indigo-50 border-l-4 border-indigo-600 font-semibold"
                                  : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                            )}
                          >
                            {link.label}
                            {isActive && (
                              <div className={cn(
                                "w-2 h-2 rounded-full animate-pulse",
                                useLightText ? "bg-amber-400" : "bg-indigo-600"
                              )} />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: NAV_LINKS.length * 0.05 }}
                      className="pt-4 px-1"
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold rounded-xl shadow-lg"
                      >
                        Get Started
                        <FaArrowRight className="text-sm" />
                      </Link>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
