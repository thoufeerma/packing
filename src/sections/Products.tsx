"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-neon/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our range of premium packaging machines and materials designed for reliability and performance.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-neon/30 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden bg-white/5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="absolute -top-10 right-6 w-12 h-12 rounded-full bg-brand-neon text-black flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.4)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                      {product.shortDescription}
                    </p>
                    
                    <Link 
                      href={`/products/${product.id}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-neon hover:text-white transition-colors uppercase tracking-wider"
                    >
                      View Details
                      <span className="ml-2 w-0 h-0.5 bg-brand-neon group-hover:w-4 transition-all duration-300 inline-block align-middle"></span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
