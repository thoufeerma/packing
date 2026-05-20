"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Industries", href: "/#industries" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image src="/images/logo1.jpeg" alt="Emblam Logo" width={40} height={40} className="rounded object-cover" />
          <span className="text-xl font-bold tracking-widest text-white">EMBLAM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-neon transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/919876543210?text=Hello,%20I%20am%20enquiring%20about%20your%20packaging%20solutions."
            target="_blank"
            className="px-5 py-2 rounded-full bg-brand-neon text-black font-semibold hover:bg-brand-mint transition-colors shadow-[0_0_15px_rgba(57,255,20,0.4)]"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-200 hover:text-brand-neon transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/919876543210?text=Hello,%20I%20am%20enquiring%20about%20your%20packaging%20solutions."
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center px-5 py-3 rounded-full bg-brand-neon text-black font-semibold hover:bg-brand-mint transition-colors"
            >
              Enquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
