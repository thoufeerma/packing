"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !elementsRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(elementsRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCA0MEwwIDBMMDAgME00MCA0MEwwIDQwTDAgNDAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={elementsRef} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-brand-neon/30 bg-brand-neon/5 text-brand-neon text-sm font-medium mb-6 backdrop-blur-sm">
              Next-Gen Packaging Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Industrial Automation <br />
            <span className="text-gradient">Redefined.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Emblam delivers premium packing machines and materials engineered for scale, efficiency, and modern B2B enterprises.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton intensity={0.2}>
              <Link 
                href="/#products" 
                className="px-8 py-4 bg-brand-neon text-black font-semibold rounded-full hover:bg-brand-mint transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                View Products <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            
            <MagneticButton intensity={0.2}>
              <a 
                href="https://wa.me/919876543210?text=Hello,%20I%20am%20enquiring%20about%20your%20packaging%20solutions."
                target="_blank"
                className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Enquire Now
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
