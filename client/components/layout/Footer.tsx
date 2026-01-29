import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { NAV_LINKS, CONTACT_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      
      <div className="relative container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="Almas Group Logo" 
                width={180} 
                height={64}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner in international trade, logistics, and business consulting. 
              Connecting businesses across continents since 1995.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-indigo-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-indigo-400"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://facebook.com/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-indigo-400"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent"></span>
              Our Services
            </h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent"></span>
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <FaMapMarkerAlt className="text-amber-400" />
                </div>
                <span className="text-white/60 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <FaEnvelope className="text-amber-400" />
                </div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/60 hover:text-amber-400 transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <FaPhone className="text-amber-400" />
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/60 hover:text-amber-400 transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Almas Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-300 group">
              <span className="text-white/60 text-sm">Crafted with</span>
              <svg
                className="w-4 h-4 text-gold animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/60 text-sm">by</span>
              <a
                href="https://theforgebit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold group-hover:text-white transition-colors duration-300 relative"
              >
                TheForgeBit
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
