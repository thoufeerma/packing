import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Products />
      {/* 
        You can add more sections here:
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <FAQ />
      */}
      <Footer />
    </main>
  );
}
