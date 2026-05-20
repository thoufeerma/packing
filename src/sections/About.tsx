"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Package, Shield, Zap, TrendingUp } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "15+", icon: TrendingUp },
  { label: "Machines Installed", value: "500+", icon: Zap },
  { label: "Global Clients", value: "120+", icon: Shield },
  { label: "Material Types", value: "50+", icon: Package },
];

export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 bg-brand-dark relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Engineering the Future of <span className="text-gradient-teal">Packaging</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Based in Ernakulam, Fine Pack Machines And Materials is a premier provider of state-of-the-art packaging machinery and high-quality packing materials. We specialize in automated solutions that streamline production lines for businesses across diverse industries.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our commitment to innovation, durability, and precise engineering ensures that your products are packaged securely, efficiently, and with the aesthetic appeal that modern consumers demand.
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-brand-teal/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="lg:w-1/2 relative"
          >
            {/* Abstract visual representation instead of a placeholder image */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/20 to-brand-teal/20 rounded-3xl transform rotate-6 glass-card"></div>
              <div className="absolute inset-0 bg-brand-charcoal rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="w-32 h-32 rounded-full border border-brand-neon/30 absolute animate-[spin_10s_linear_infinite]"></div>
                <div className="w-48 h-48 rounded-full border border-brand-teal/30 absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="w-64 h-64 rounded-full border border-white/5 absolute animate-[spin_20s_linear_infinite]"></div>
                <Package size={64} className="text-brand-neon/50 relative z-10" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3 animate-[bounce_4s_ease-in-out_infinite]">
                <div className="w-3 h-3 rounded-full bg-brand-neon"></div>
                <span className="text-white font-medium text-sm">ISO Certified Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
