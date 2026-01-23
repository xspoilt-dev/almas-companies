import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { NAV_LINKS, CONTACT_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-royal-blue-dark via-royal-blue to-royal-blue-dark text-white">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      
      <div className="relative container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-gold font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Almas Group</h3>
                <p className="text-sm text-white/60">Global Trade Excellence</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner in international trade, logistics, and business consulting. 
              Connecting businesses across continents since 1999.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold/80 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold/80 flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://facebook.com/almasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold/80 flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/70 hover:text-gold transition-colors text-sm"
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
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-white/50 text-xs">
              Developed by{" "}
              <a
                href="https://theforgebit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/80 hover:text-gold transition-colors font-medium"
              >
                TheForgeBit
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
