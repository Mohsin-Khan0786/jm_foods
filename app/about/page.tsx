import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Sparkles, ChevronRight, Phone, Mail, MapPin, ShoppingBag, ShieldCheck, Flame, Smile } from 'lucide-react';

export default function AboutPage() {
  const qualityPoints = [
    {
      title: "Premium Quality",
      description: "Rigorous quality standards at every step of production to ensure superior taste and texture.",
      icon: <Award className="text-[#D4A017]" size={28} />,
      bg: "from-amber-950/40 via-black to-black border-amber-600/30"
    },
    {
      title: "Fresh Ingredients",
      description: "Sourced locally and globally, our ingredients are handpicked for unmatched purity and rich flavor.",
      icon: <Sparkles className="text-[#C81E2C]" size={28} />,
      bg: "from-red-950/40 via-black to-black border-red-600/30"
    },
    {
      title: "Hygienic Packing",
      description: "State-of-the-art packaging technology locks in freshness and crunch while ensuring absolute food safety.",
      icon: <ShieldCheck className="text-[#D4A017]" size={28} />,
      bg: "from-yellow-950/30 via-black to-black border-yellow-600/30"
    },
    {
      title: "Great Taste",
      description: "Expertly blended authentic Pakistani spices and savory seasonings crafted to perfection.",
      icon: <Flame className="text-[#C81E2C]" size={28} />,
      bg: "from-orange-950/40 via-black to-black border-orange-600/30"
    },
    {
      title: "Perfect for Every Moment",
      description: "Whether it's tea time, family gatherings, or movie nights, our snacks bring joy to every occasion.",
      icon: <Smile className="text-[#D4A017]" size={28} />,
      bg: "from-amber-950/30 via-black to-black border-amber-500/30"
    }
  ];

  const leadershipTeam = [
    {
      name: "Muhammad Umair",
      role: "CEO (Chief Executive Officer)",
      initial: "M",
      bio: "Driving the visionary growth and strategic direction of JM Foods, ensuring unwavering dedication to excellence, premium standards, and customer happiness across Pakistan.",
      accent: "border-[#D4A017]/50 hover:border-[#D4A017] shadow-[#D4A017]/10"
    },
    {
      name: "Ghulam Sarwar",
      role: "GM Production (General Manager, Production)",
      initial: "G",
      bio: "Overseeing state-of-the-art manufacturing operations and rigorous quality controls to guarantee that every single snack delivers the ultimate fresh crunch and authentic taste.",
      accent: "border-[#C81E2C]/50 hover:border-[#C81E2C] shadow-[#C81E2C]/10"
    },
    {
      name: "Jhanzaib Pathan",
      role: "GM Marketing (General Manager, Marketing)",
      initial: "J",
      bio: "Spearheading brand expansion, market outreach, and retail partnerships to bring the joy of JM Foods into households and celebrations nationwide.",
      accent: "border-[#D4A017]/50 hover:border-[#D4A017] shadow-[#D4A017]/10"
    }
  ];

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
            <Link href="/about" className="text-[#D4A017] font-semibold transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#D4A017] transition-colors">Contact</Link>
            <Link 
              href="/#products" 
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-semibold shadow-lg shadow-[#C81E2C]/30 hover:shadow-[#C81E2C]/50 hover:scale-105 transition-all duration-300 border border-[#D4A017]/40"
            >
              Order Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Step 1: Page Header / Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-stone-950 via-black to-black border-b border-white/10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-[700px] h-[300px] bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] rounded-full blur-[140px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

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
            JM Foods by TMJ
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
            About <span className="bg-gradient-to-r from-[#C81E2C] via-[#E63946] to-[#D4A017] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#D4A017] italic">
            "Good Food, Great Mood."
          </p>
        </div>
      </section>

      {/* Red/Gold Curved Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] shadow-md shadow-[#C81E2C]/30" />

      {/* Step 1 & 2: Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#C81E2C]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#C81E2C]/20 border border-[#C81E2C]/30 text-[#C81E2C] text-xs font-bold tracking-widest uppercase">
              Our Heritage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-snug">
              The Journey of <span className="text-[#D4A017]">JM Foods</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded under the proud banner of TMJ, JM Foods has emerged as a beloved name in premium snacking across Pakistan. We specialize in crafting exceptional snack ranges—including our signature Karari and Slanty varieties—that capture the rich, authentic essence of traditional spices combined with a modern, irresistible crunch.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-stone-900/90 via-black to-red-950/30 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <h3 className="text-xl font-bold text-[#D4A017] flex items-center gap-2">
              <Sparkles size={20} />
              <span>Crafted for Quality & Happiness</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our commitment to excellence starts from the careful selection of raw ingredients. Every batch is prepared under strict hygienic conditions and rigorously tested to guarantee that you receive only the finest quality snacks.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Beyond just snacks, our mission is captured in our motto: <strong className="text-white italic">"Good Food, Great Mood."</strong> We believe that sharing great-tasting food brings people closer, lights up celebrations, and turns ordinary moments into cherished memories.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#D4A017] to-[#C81E2C] rounded-full blur-[140px]" />
        </div>
        <div className="relative z-10 space-y-4 mb-8">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-xs font-bold tracking-widest uppercase">
            Brand Story Video
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            SEE JM FOODS <span className="text-[#C81E2C]">IN ACTION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] mx-auto rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base">
            A quick look at the passion, care, and crunch behind every pack.
          </p>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto rounded-3xl overflow-hidden border-2 border-[#D4A017]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-zinc-950 p-2">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
            <video 
              controls 
              preload="metadata"
              poster="/logo.png"
              className="w-full h-auto max-h-[550px] object-contain"
            >
              <source src="/videos/jm-foods-story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-xs font-bold tracking-widest uppercase">
            Visionary Guidance
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            LEADERSHIP <span className="text-[#C81E2C]">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] mx-auto rounded-full" />
          <p className="max-w-xl mx-auto text-gray-400 text-base">
            Meet the dedicated leaders guiding JM Foods toward excellence, quality, and nationwide growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 bg-gradient-to-b from-stone-900/90 via-black to-black border ${member.accent} backdrop-blur-xl flex flex-col justify-between hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out group`}
            >
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#C81E2C] to-[#D4A017] p-0.5 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{member.initial}</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#D4A017] transition-colors">{member.name}</h3>
                  <p className="text-xs font-bold text-[#D4A017] uppercase tracking-wider">{member.role}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">JM Foods by TMJ</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alternating Background Tint Section: Our Mission / What We Stand For */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950/80 via-black to-stone-950/80 border-y border-white/10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-xs font-bold tracking-widest uppercase">
            Our Core Mission
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            WHAT WE <span className="text-[#C81E2C]">STAND FOR</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] mx-auto rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            At JM Foods by TMJ, our mission is to redefine snacking by blending authentic Pakistani flavors with uncompromising quality. We strive to be a household symbol of joy, bringing smiles to families and friends through every crunchy bite.
          </p>
        </div>
      </section>

      {/* Step 1 & 4: Why Choose Us (Icon Cards) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#C81E2C]/20 border border-[#C81E2C]/30 text-[#C81E2C] text-xs font-bold tracking-widest uppercase">
            Excellence in Every Bite
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            WHY CHOOSE <span className="text-[#D4A017]">JM FOODS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C81E2C] to-[#D4A017] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityPoints.map((point, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 bg-gradient-to-b ${point.bg} border backdrop-blur-xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C81E2C]/20 transition-all duration-300`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-black text-white">{point.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">JM Foods Standard</span>
                <span className="text-xs text-gray-500">TMJ</span>
              </div>
            </div>
          ))}

          {/* Brand Promise Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#C81E2C]/30 via-black to-[#D4A017]/20 border border-[#D4A017]/30 flex flex-col justify-between backdrop-blur-xl">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#D4A017]/20 text-[#D4A017] border border-[#D4A017]/40 uppercase tracking-wider">
                Our Guarantee
              </span>
              <h3 className="text-2xl font-black text-white">100% Satisfaction Guaranteed</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                From our Karari range to our delightful Slanty snacks, every packet is manufactured with love and devotion to quality.
              </p>
            </div>
            <div className="pt-6">
              <Link 
                href="/#products" 
                className="w-full py-3 rounded-full bg-[#D4A017] text-black font-bold text-sm text-center block shadow-lg shadow-[#D4A017]/30 hover:bg-white transition-all"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 & 5: Bilingual Urdu Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-stone-950 to-black border-t border-white/10 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#D4A017] to-[#C81E2C] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-stone-900/90 via-black to-red-950/40 border border-[#D4A017]/30 backdrop-blur-xl shadow-2xl space-y-8">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-[#D4A017] text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} />
                <span>Urdu Section / اردو سیکشن</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-urdu text-right text-[#D4A017]">
                ہمارے بارے میں
              </h2>
            </div>

            <div className="space-y-6 text-right font-urdu text-gray-200 text-base sm:text-xl leading-loose" dir="rtl">
              <p>
                ٹی ایم جے (TMJ) کے زیرِ اہتمام جے ایم فوڈز (JM Foods) پاکستان میں بہترین اور اعلٰی معیار کےسنیکس کا ایک قابلِ اعتماد نام ہے۔ ہم روایت اور جدید ذائقے کا بہترین امتزاج پیش کرتے ہیں، جس میں ہمارے مقبول ترین سنیکس جیسے کہ کراری (Karari) اور سلینٹی (Slanty) رینج شامل ہیں۔
              </p>
              <p>
                ہماری اولین ترجیح معیار، تازہ اجزاء اور حفظان صحت کے اصولوں کے مطابق بہترین پیکنگ ہے۔ ہم صفائی اور ذائقے پر کوئی سمجھوتہ نہیں کرتے تاکہ ہمارے صارفین تک صرف بہترین پروڈکٹ پہنچے۔
              </p>
              <p>
                ہمارا بنیادی مقصد اور نعرہ ہے: <span className="text-[#D4A017] font-bold">"اچھا کھانا، شاندار موڈ" (Good Food, Great Mood)</span>۔ ہم ہر لقمے میں خوشیاں اور مسرت بکھیرنے کے لیے پرعزم ہیں تاکہ آپ کا ہر لمحہ خوشگوار گزرے۔
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
              <span className="font-urdu">معیار اور ذائقہ — جے ایم فوڈز</span>
              <span className="italic text-[#D4A017]">JM Foods by TMJ • Good Food, Great Mood.</span>
            </div>

          </div>
        </div>
      </section>

      {/* Red/Gold Curved Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#C81E2C] via-[#D4A017] to-[#C81E2C] shadow-md shadow-[#C81E2C]/30" />

      {/* Step 1: CTA Bottom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-[#C81E2C]/20 via-black to-[#D4A017]/20 border border-[#D4A017]/30 backdrop-blur-2xl shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            READY TO EXPERIENCE THE <span className="text-[#D4A017]">CRUNCH?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our full range of premium snacks or get in touch with our team for wholesale, distribution, and retail inquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/#products" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C81E2C] to-[#9B1C26] text-white font-bold text-lg shadow-xl shadow-[#C81E2C]/40 hover:shadow-[#C81E2C]/60 hover:scale-105 transition-all duration-300 border border-[#D4A017]/50 flex items-center justify-center gap-3"
            >
              <span>View Products</span>
              <ChevronRight size={20} />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Contact Us
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
                    <span className="text-[#D4A017] font-bold text-xs uppercase tracking-wider">Jhanzaib Pathan (GM MrktG)</span>
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
