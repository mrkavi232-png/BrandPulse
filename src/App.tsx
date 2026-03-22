/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Search, 
  Share2, 
  Zap, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Menu,
  X,
  Phone,
  MapPin
} from "lucide-react";
import React, { useState } from "react";

const services = [
  {
    title: "Copywriting",
    description: "Compelling narratives that convert. We craft messages that resonate with your audience and drive action.",
    icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,
    features: ["Sales Pages", "Email Sequences", "Brand Voice"]
  },
  {
    title: "Social Strategy",
    description: "Data-driven social media management that builds community and increases brand awareness across all platforms.",
    icon: <Share2 className="w-8 h-8 text-violet-400" />,
    features: ["Content Planning", "Community Growth", "Influencer Outreach"]
  },
  {
    title: "SEO Optimization",
    description: "Dominate search results. Our technical and content SEO strategies ensure your brand is found by the right people.",
    icon: <Search className="w-8 h-8 text-blue-400" />,
    features: ["Keyword Research", "On-Page SEO", "Backlink Strategy"]
  },
  {
    title: "Workflow Automation",
    description: "Scale efficiently. We implement smart automations that save time and eliminate manual bottlenecks.",
    icon: <Zap className="w-8 h-8 text-amber-400" />,
    features: ["CRM Integration", "Lead Nurturing", "Process Optimization"]
  }
];

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus("submitting");
    
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xqeyojzy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("idle");
      }
    } catch (error) {
      setFormStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Zap className="text-zinc-950 w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">BrandPulse</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-white text-zinc-950 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 px-4 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-lg font-medium text-zinc-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block w-full text-center bg-emerald-500 text-zinc-950 py-3 rounded-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                Digital Excellence Redefined
              </span>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                Ignite Your Brand's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital Pulse.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg lg:text-xl text-zinc-400 mb-10 leading-relaxed">
                We blend creative copywriting, strategic social management, and cutting-edge automation to scale your business at the speed of light.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-emerald-500 text-zinc-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                >
                  Start Your Growth <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services" 
                  className="w-full sm:w-auto bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>

            {/* Hero Stats/Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { label: "Client Growth", value: "250%+" },
                { label: "Successful Projects", value: "1.2k+" },
                { label: "Ad Spend Managed", value: "$15M+" },
                { label: "Industry Awards", value: "12" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Our Expertise</h2>
              <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                Comprehensive digital solutions designed to capture attention, build trust, and drive measurable revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                >
                  <div className="mb-6 p-3 bg-zinc-950 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Why Us Section */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  We don't just market. <br />
                  <span className="text-emerald-400 text-italic">We accelerate.</span>
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  BrandPulse was born from the idea that digital marketing should be more than just "posting content." It should be a high-performance engine that powers your business growth.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Data-First Approach", desc: "Every decision we make is backed by rigorous analytics and market research." },
                    { title: "Creative Edge", desc: "Our copywriters and designers push boundaries to ensure your brand stands out." },
                    { title: "Scalable Systems", desc: "We build automations that grow with you, ensuring you never hit a ceiling." }
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-zinc-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 border border-white/10 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-zinc-950/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 max-w-xs text-center">
                      <div className="text-4xl font-black text-emerald-400 mb-2">98%</div>
                      <div className="text-sm font-bold text-white uppercase tracking-widest">Client Retention Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact/Booking Section */}
        <section id="contact" className="py-24 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-emerald-500 p-10 lg:p-12 text-zinc-950">
                  <h2 className="text-3xl font-black mb-6 leading-tight">Let's build something legendary.</h2>
                  <p className="font-medium mb-10 opacity-80">
                    Ready to scale? Book a strategy call or send us a message to get started.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5" />
                      <span className="font-bold">hello@brandpulse.agency</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5" />
                      <span className="font-bold">+1 (555) 000-1234</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5" />
                      <span className="font-bold">New York, NY</span>
                    </div>
                  </div>

                  <div className="mt-16 flex gap-4">
                    <Twitter className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <Linkedin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                    <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-3 p-10 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Needed</label>
                      <select name="service" className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                        <option value="Copywriting">Copywriting</option>
                        <option value="Social Strategy">Social Strategy</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="Full Scale Marketing">Full Scale Marketing</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                      <textarea 
                        required
                        name="message"
                        rows={4} 
                        placeholder="Tell us about your project..." 
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                      />
                    </div>
                    
                    <button 
                      disabled={formStatus !== "idle"}
                      type="submit" 
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        formStatus === "success" 
                        ? "bg-emerald-500 text-zinc-950" 
                        : "bg-white text-zinc-950 hover:bg-emerald-400"
                      }`}
                    >
                      {formStatus === "idle" && "Send Message"}
                      {formStatus === "submitting" && "Sending..."}
                      {formStatus === "success" && "Message Sent!"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap className="text-zinc-950 w-5 h-5 fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">BrandPulse</span>
              </div>
              <p className="text-zinc-500 text-sm max-w-xs mb-8">
                The high-performance marketing agency for brands that refuse to be average.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Copywriting</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Social Strategy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Workflow Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Agency</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">
              © 2026 BrandPulse Digital Agency. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-zinc-600">
              <span>Built for high performance.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
