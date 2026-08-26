'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, Send, Share2, Globe, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-[#C81E2C] selection:text-white">
      
      {/* Curved Red-to-Gold Gradient Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] sticky top-0 z-50 shadow-lg shadow-[#C81E2C]/20" />

      {/* Navbar */}
      <nav className="sticky top-1.5 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-[#D4A017] transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-[#D4A017] transition-colors">Products</Link>
            <Link href="/about" className="hover:text-[#D4A017] transition-colors">About Us</Link>
            <Link href="/contact" className="text-[#D4A017] font-semibold transition-colors">Contact</Link>
            <Link 
              href="/#products" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-semibold shadow-lg shadow-[#C81E2C]/30 hover:shadow-[#C81E2C]/50 hover:scale-105 transition-all duration-300 border border-[#D4A017]/40"
            >
              Order Now
            </Link>
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/20 px-6 py-6 space-y-4 shadow-2xl z-50">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/#products" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-gray-200 hover:text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-semibold text-[#D4A017] py-3 border-b border-white/10 transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link 
                href="/#products" 
                onClick={() => setMobileMenuOpen(false)} 
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-center block shadow-lg shadow-[#C81E2C]/40 border border-[#D4A017]/40"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header / Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-stone-950 via-black to-black border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-[700px] h-[300px] bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] rounded-full blur-[140px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#D4A017] shadow-xl bg-white/5 p-1 animate-pulse">
            <Image 
              src="/logo.png" 
              alt="JM Foods Logo" 
              fill 
              sizes="80px"
              className="object-contain"
            />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 uppercase">
            Get in Touch With Us
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            Contact <span className="bg-gradient-to-r from-[#C81E2C] via-[#E63946] to-[#D4A017] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#D4A017] italic">
            "Good Food, Great Mood."
          </p>
        </div>
      </section>

      {/* Red/Gold Curved Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] shadow-md shadow-[#C81E2C]/30" />

      {/* Two Column Layout: Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C81E2C]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#C81E2C]/20 border border-[#C81E2C]/30 text-[#C81E2C] text-xs font-bold tracking-widest uppercase">
                Reach Out
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
                Let's Start a <span className="text-[#D4A017]">Conversation</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you have questions about our products, distribution, bulk wholesale orders, or retail partnerships, our team is here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone / WhatsApp Numbers */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-[#D4A017]/40 flex items-start gap-4 shadow-lg hover:border-[#D4A017] transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A017] shrink-0 mt-1">
                  <Phone size={22} />
                </div>
                <div className="space-y-2.5 w-full">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Muhammad Umair:</span>
                      <a href="tel:923200060111" className="font-bold text-white hover:text-[#D4A017] transition-colors">+92 320 0060111</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Ghulam Sarwar:</span>
                      <a href="tel:923113435351" className="font-bold text-white hover:text-[#D4A017] transition-colors">+92 311 3435351</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Jhanzaib Pathan:</span>
                      <a href="tel:923073470790" className="font-bold text-white hover:text-[#D4A017] transition-colors">+92 307 3470790</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-[#C81E2C]/40 flex items-center gap-4 shadow-lg hover:border-[#C81E2C] transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C81E2C] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:jmfoods8@gmail.com" className="text-base font-bold text-white hover:text-[#D4A017] transition-colors break-all">jmfoods8@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-[#D4A017]/40 flex items-start gap-4 shadow-lg hover:border-[#D4A017] transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A017] shrink-0 mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Head Office Location</h4>
                  <p className="text-sm font-semibold text-white leading-relaxed">Near Wah Garden, Backside of Butt Karahi, G.T. Road, Wah Cantt, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Connect on Social Media</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#C81E2C] hover:text-white hover:border-[#C81E2C] transition-all shadow-md"
                  aria-label="Facebook"
                >
                  <Share2 size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#C81E2C] hover:text-white hover:border-[#C81E2C] transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <Globe size={20} />
                </a>
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#D4A017] hover:text-black hover:border-[#D4A017] transition-all shadow-md"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-stone-900/90 via-black to-red-950/30 border border-white/10 backdrop-blur-xl shadow-2xl relative">
              
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-black text-white">Send Us a Message</h3>
                <p className="text-sm text-gray-400">Fill out the form below and our team will get back to you promptly.</p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/50 flex items-center justify-center mx-auto text-[#D4A017]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out to JM Foods. We have received your inquiry and will contact you shortly.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#D4A017] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Ali" 
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ali@example.com" 
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">Your Message / Inquiry</label>
                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your order or inquiry..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-base shadow-xl shadow-[#C81E2C]/40 hover:shadow-[#C81E2C]/60 hover:scale-[1.01] transition-all duration-300 border border-[#D4A017]/50 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Google Map Placeholder Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/80 shadow-2xl relative h-[350px] sm:h-[400px] flex items-center justify-center">
          {/* Decorative Map Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-zinc-950 to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 text-center space-y-4 px-4 max-w-lg">
            <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/20 border border-[#D4A017]/50 flex items-center justify-center mx-auto text-[#D4A017] shadow-lg animate-bounce">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">JM Foods Head Office</h3>
            <p className="text-sm text-gray-300 font-medium">
              Near Wah Garden, Backside of Butt Karahi, G.T. Road, Wah Cantt, Pakistan
            </p>
            <div className="pt-2">
              <a 
                href="https://maps.google.com/?q=Wah+Garden+Wah+Cantt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#C81E2C] text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20 shadow-md"
              >
                <span>Open in Google Maps</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-[#C81E2C]/20 via-black to-[#D4A017]/20 border border-[#D4A017]/30 backdrop-blur-2xl shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            EXPLORE OUR SIGNATURE <span className="text-[#D4A017]">PRODUCTS</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover the delicious variety of snacks crafted with authentic Pakistani spices and unmatched crunch.
          </p>
          <div className="pt-4">
            <Link 
              href="/#products" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-lg shadow-xl shadow-[#C81E2C]/40 hover:shadow-[#C81E2C]/60 hover:scale-105 transition-all duration-300 border border-[#D4A017]/50"
            >
              <span>View Products</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-black via-stone-950 to-black border-t border-white/10 pt-20 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4A017] bg-white/5 p-1 shadow-md">
                  <Image 
                    src="/logo.png" 
                    alt="JM Foods Logo" 
                    fill 
                    sizes="64px"
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
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-[#D4A017] transition-colors">Home</Link></li>
                <li><Link href="/#products" className="hover:text-[#D4A017] transition-colors">Our Products</Link></li>
                <li><Link href="/about" className="hover:text-[#D4A017] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4A017] transition-colors">Contact Details</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
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

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#D4A017] bg-white/5">
                <Image 
                  src="/logo.png" 
                  alt="Logo Mark" 
                  fill 
                  sizes="24px"
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
