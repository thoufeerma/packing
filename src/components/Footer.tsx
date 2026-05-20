import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-16 pb-8 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent"></div>
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo1.jpeg" alt="Fine Pack Logo" width={40} height={40} className="rounded object-cover" />
              <span className="text-xl font-bold tracking-widest text-white">FINE PACK</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fine Pack Machines And Materials. Providing premium industrial packaging solutions for modern B2B enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Industries", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-brand-neon transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0 text-brand-neon" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-neon shrink-0 mt-0.5" />
                <span>NORTH KALAMASSERY, ERNAKULAM - 683105</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-neon shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-neon shrink-0" />
                <a href="mailto:info@finepack.com" className="hover:text-white transition-colors">info@finepack.com</a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enquire Now</h4>
            <p className="text-gray-400 text-sm mb-4">
              Need custom packaging machinery? Get in touch via WhatsApp.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello,%20I%20am%20enquiring%20about%20your%20packaging%20solutions."
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-brand-neon/30 text-brand-neon font-medium hover:bg-brand-neon hover:text-black transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Fine Pack Machines And Materials. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
