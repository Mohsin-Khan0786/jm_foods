'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin, ShoppingBag, Award, Heart, Sparkles, ChevronRight, Share2, Globe } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Good Time",
      tag: "Slanty",
      description: "The ultimate party snack packed with joyful savory spices and crispy crunch for every celebration.",
      image: "/images/products/good-time-slanty.jpeg",
      bgTone: "from-blue-950/60 via-slate-900/50 to-black border-blue-600/30 hover:shadow-blue-500/20",
      badgeBg: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      glowColor: "from-blue-600/30 to-indigo-600/10",
      price: "Rs. 10"
    },
    {
      id: 2,
      name: "Sindhi Matka Biryani",
      tag: "Karari",
      description: "Authentic spicy crunch loaded with traditional royal Sindhi biryani spices, mint, and rich aroma.",
      image: "/images/products/sindhi-matka-biryani.jpeg",
      bgTone: "from-red-950/60 via-stone-900/50 to-black border-red-600/30 hover:shadow-red-500/20",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      glowColor: "from-red-600/30 to-amber-600/10",
      price: "Rs. 10"
    },
    {
      id: 3,
      name: "Onion / Pyaz Snack",
      tag: "Karari",
      description: "Crispy golden rings bursting with sweet caramelized onion essence and zesty savory spices.",
      image: "/images/products/onion-pyaz-snack.jpeg",
      bgTone: "from-sky-950/60 via-slate-950/50 to-black border-sky-600/30 hover:shadow-cyan-500/20",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      glowColor: "from-cyan-600/30 to-blue-900/10",
      price: "Rs. 10"
    },
    {
      id: 4,
      name: "Dumbah Karahi",
      tag: "Karari",
      description: "Rich, savory tribal mutton karahi flavor infused with deep smoky and peppery nomadic notes.",
      image: "/images/products/dumbah-karahi.jpeg",
      bgTone: "from-amber-950/60 via-orange-950/40 to-black border-amber-600/30 hover:shadow-orange-500/20",
      badgeBg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      glowColor: "from-orange-600/30 to-amber-700/10",
      price: "Rs. 10"
    },
    {
      id: 5,
      name: "Lahori Bar B.Q",
      tag: "Slanty",
      description: "Tantalizing street-style charcoal BBQ flavor with an irresistible smoky melting crunch.",
      image: "/images/products/lahori-bar-bq.jpeg",
      bgTone: "from-red-950/70 via-black to-zinc-950 border-red-600/30 hover:shadow-red-600/25",
      badgeBg: "bg-red-600/20 text-red-300 border-red-600/40",
      glowColor: "from-red-600/35 to-rose-950/10",
      price: "Rs. 10"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-[#C81E2C] selection:text-white">
      
      {/* Curved Red-to-Gold Gradient Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] sticky top-0 z-50 shadow-lg shadow-[#C81E2C]/20" />

      {/* Navbar */}
      <nav className="sticky top-1.5 z-50 bg-black backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-50 bg-black">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A017] shadow-md group-hover:scale-105 transition-transform bg-white/5 p-0.5">
              <Image 
                src="/logo.png" 
                alt="JM Foods Logo" 
                fill 
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-lg sm:text-xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                JM FOODS <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#C81E2C]/30 text-[#C81E2C] border border-[#C81E2C]/40 ml-1">BY TMJ</span>
              </span>
              <span className="text-xs italic text-[#D4A017] tracking-wide">Good Food, Great Mood.</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-[#D4A017] transition-colors">Home</a>
            <a href="#products" className="hover:text-[#D4A017] transition-colors">Products</a>
            <a href="/about" className="hover:text-[#D4A017] transition-colors">About Us</a>
            <a href="#contact" className="hover:text-[#D4A017] transition-colors">Contact</a>
            <a 
              href="#products" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-semibold shadow-lg shadow-[#C81E2C]/30 hover:shadow-[#C81E2C]/50 hover:scale-105 transition-all duration-300 border border-[#D4A017]/40"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-[#C81E2C]" /> : <Menu size={24} className="text-[#D4A017]" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with 100% solid black background and high z-index */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/20 px-6 py-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Home
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Products
            </a>
            <a 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#products" 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-center block shadow-lg shadow-[#C81E2C]/40 border border-[#D4A017]/40"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Restructured into Two Clear Layers */}
      <section id="home" className="relative flex flex-col w-full">
        {/* Layer 1 — Photo area (top) with natural aspect ratio scaling so zero cropping occurs */}
        <div className="relative w-full overflow-hidden bg-black flex items-center justify-center py-2">
          <div className="relative w-full max-w-6xl aspect-[16/9] min-h-[250px] sm:min-h-[450px]">
            <Image 
              src="/images/hero-family.jpeg"
              alt="JM Foods Family & Kids Enjoying Snacks"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
            {/* Very light 10% overlay */}
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          </div>
        </div>

        {/* Step 3 — Visual transition between the two layers: Red/gold curved accent stripe at the seam */}
        <div className="relative z-20 h-2 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] shadow-[0_0_15px_rgba(200,30,44,0.6)]" />

        {/* Layer 2 — Text block (below the photo, its own solid section) */}
        <div className="relative w-full bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-20">
          {/* Subtle dark red-black gradient undertone for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-tight text-white">
              PREMIUM <span className="bg-gradient-to-r from-[#C81E2C] via-[#E63946] to-[#D4A017] bg-clip-text text-transparent">SNACKS</span>
            </h1>

            <div className="max-w-xl mx-auto px-6 py-2">
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
                Crafted with passion, premium ingredients, and authentic Pakistani spices for an extraordinary crunch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a 
                href="#products" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-base shadow-xl shadow-[#C81E2C]/50 hover:shadow-[#C81E2C]/70 hover:scale-105 transition-all duration-300 border border-[#D4A017]/60 flex items-center justify-center gap-2 group"
              >
                <span>View Our Products</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900 border border-white/20 text-white font-semibold text-base hover:bg-zinc-800 transition-all shadow-lg"
              >
                Get in Touch
              </a>
            </div>

            {/* 3 Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 max-w-2xl mx-auto">
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-[#D4A017]/40 flex items-center gap-3 shadow-lg">
                <Award className="text-[#D4A017] shrink-0" size={22} />
                <div className="text-left">
                  <h4 className="font-bold text-xs text-white">Finest Quality</h4>
                  <p className="text-[10px] text-gray-400">Pure ingredients</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-[#C81E2C]/50 flex items-center gap-3 shadow-lg">
                <Heart className="text-[#C81E2C] shrink-0" size={22} />
                <div className="text-left">
                  <h4 className="font-bold text-xs text-white">Authentic Taste</h4>
                  <p className="text-[10px] text-gray-400">Traditional spices</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-[#D4A017]/40 flex items-center gap-3 shadow-lg">
                <ShoppingBag className="text-[#D4A017] shrink-0" size={22} />
                <div className="text-left">
                  <h4 className="font-bold text-xs text-white">Fresh Crunch</h4>
                  <p className="text-[10px] text-gray-400">Unmatched texture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#C81E2C]/20 border border-[#C81E2C]/30 text-[#C81E2C] text-xs font-bold tracking-widest uppercase">
            Our Signature Range
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
            EXPLORE OUR <span className="text-[#D4A017]">PRODUCTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-gray-400 text-base">
            Each snack is meticulously formulated with packaging tones matching its true flavor experience.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b ${product.bgTone} border backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out`}
            >
              {/* Subtle Ambient Accent Glow behind each card */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${product.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`} />

              <div className="absolute top-6 right-6 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${product.badgeBg} uppercase tracking-wider backdrop-blur-md shadow-sm`}>
                  {product.tag}
                </span>
              </div>

              <div>
                {/* Product Image Frame */}
                <div className="relative w-full h-56 sm:h-64 mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500 ease-out p-2"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-black group-hover:text-[#D4A017] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  {product.price && (
                    <span className="text-sm font-black px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/15 shrink-0">
                      {product.price}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C81E2C] animate-pulse" />
                  Authentic Pack
                </span>
                <a 
                  href="#contact" 
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#C81E2C] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg hover:shadow-[#C81E2C]/30"
                >
                  <span>Enquire</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}

          {/* Extra Callout Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#C81E2C]/30 via-black to-[#D4A017]/20 border border-[#D4A017]/30 flex flex-col justify-between backdrop-blur-xl group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#D4A017]/20 text-[#D4A017] border border-[#D4A017]/40 uppercase tracking-wider">
                Wholesale & Retail
              </span>
              <h3 className="text-2xl font-black text-white">Looking for Bulk Orders or Distribution?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Partner with JM Foods by TMJ to bring premium crunch and authentic flavors to your stores and customers across Pakistan.
              </p>
            </div>
            <div className="pt-6">
              <a 
                href="#contact" 
                className="w-full py-3 rounded-full bg-[#D4A017] text-black font-bold text-sm text-center block shadow-lg shadow-[#D4A017]/30 hover:bg-white transition-all"
              >
                Contact Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About + Contact Section (Combined Footer Block) */}
      <footer id="about" className="relative bg-gradient-to-b from-black via-stone-950 to-black border-t border-white/10 pt-20 pb-12 overflow-hidden">
        {/* Accent Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#C81E2C]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* About Block with Logo */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4A017] bg-white/5 p-1 shadow-md">
                  <Image 
                    src="/logo.png" 
                    alt="JM Foods Logo" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-wide">JM FOODS <span className="text-[#C81E2C]">BY TMJ</span></h3>
                  <p className="text-sm font-medium text-[#D4A017]">Good Food, Great Mood.</p>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                JM Foods is committed to delivering high-quality snacks made with the finest ingredients and authentic flavors. Our aim is to provide delicious snacks that bring happiness to every moment.
              </p>

              {/* Social Icon Placeholders */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#C81E2C] hover:text-white hover:border-[#C81E2C] transition-all"
                  aria-label="Facebook"
                >
                  <Share2 size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#C81E2C] hover:text-white hover:border-[#C81E2C] transition-all"
                  aria-label="Instagram"
                >
                  <Globe size={18} />
                </a>
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#D4A017] hover:text-black hover:border-[#D4A017] transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-[#D4A017] transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-[#D4A017] transition-colors">Our Products</a></li>
                <li><a href="/about" className="hover:text-[#D4A017] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#D4A017] transition-colors">Contact Details</a></li>
              </ul>
            </div>

            {/* Contact Details Block */}
            <div id="contact" className="lg:col-span-4 space-y-4">
              <h4 className="text-lg font-bold text-white tracking-wide">Management & Contact</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex flex-col space-y-1.5 pb-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4A017] font-bold text-xs uppercase tracking-wider">Muhammad Umair (CEO)</span>
                    <a href="tel:923200060111" className="text-xs text-gray-300 hover:text-[#D4A017] font-semibold">+92 320 0060111</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4A017] font-bold text-xs uppercase tracking-wider">Ghulam Sarwar (GM Prod)</span>
                    <a href="tel:923113435351" className="text-xs text-gray-300 hover:text-[#D4A017] font-semibold">+92 311 3435351</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4A017] font-bold text-xs uppercase tracking-wider">Jhanzaib Pathan (GM Mktg)</span>
                    <a href="tel:923073470790" className="text-xs text-gray-300 hover:text-[#D4A017] font-semibold">+92 307 3470790</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Mail size={18} className="text-[#C81E2C] shrink-0 mt-1" />
                  <a href="mailto:jmfoods8@gmail.com" className="hover:text-[#D4A017] transition-colors break-all">jmfoods8@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D4A017] shrink-0 mt-1" />
                  <span>Near Wah Garden, Backside of Butt Karahi, G.T. Road, Wah Cantt, Pakistan</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#D4A017] bg-white/5">
                <Image 
                  src="/logo.png" 
                  alt="Logo Mark" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span>© {new Date().getFullYear()} JM Foods by TMJ. All rights reserved.</span>
            </div>
            <p className="italic text-[#D4A017]/80">Good Food, Great Mood.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
