import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hello, I am enquiring about ${product.name}.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-brand-dark pt-24">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/#products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-brand-neon">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Product Image Gallery */}
          <div className="sticky top-32 space-y-6">
            <Link href="/#products" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} /> Back to Products
            </Link>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass-card border border-white/10 group">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Optional Thumbnail Row could go here */}
            <div className="grid grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-brand-neon">
                <Image src={product.image} alt="Thumbnail 1" fill className="object-cover" />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/10 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                   <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                     <span className="text-xs text-gray-500">Gallery</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                className="px-8 py-4 bg-brand-neon text-black font-semibold rounded-full hover:bg-brand-mint transition-colors text-center shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                Enquire via WhatsApp
              </a>
              <a 
                href="#specifications"
                className="px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors text-center"
              >
                View Specs
              </a>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-neon shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div id="specifications" className="scroll-mt-32">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <th className="py-4 px-6 font-medium text-gray-300 w-1/3">{key}</th>
                        <td className="py-4 px-6 text-gray-400">{value as React.ReactNode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Ideal Applications</h3>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
