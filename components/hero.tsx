'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    destination: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Basic Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // Phone: Optional +91 or 91, then a 10-digit number starting with 6-9
    const phoneRegex = /^(?:\+?91[\-\s]?)?[6789]\d{9}$/;
    const cleanPhone = formData.phone.trim();
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', program: '', destination: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  return (
    <section className="relative bg-transparent py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Glowing Orbs for the Light Blue & Golden Theme */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              {/* 2026-27 Intake Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-accent/20">
                  <GraduationCap className="w-4 h-4" />
                  2026-27 Intake Started — Enroll Now
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900"
              >
                Your Gateway to a <span className="text-primary">Global Career</span> Abroad
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
              >
                Pursuing education abroad is a smart and future-ready choice. We guide aspiring students through end-to-end admission support — from university selection to visa approval and post-study guidance.
              </motion.p>
            </div>

            {/* Quick Stats - Glassmorphism Light */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm hover:shadow-md hover:bg-white/80 transition-all">
                <p className="text-3xl sm:text-4xl font-bold text-accent">500+</p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Students Placed</p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm hover:shadow-md hover:bg-white/80 transition-all">
                <p className="text-3xl sm:text-4xl font-bold text-accent">10+</p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Countries</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm hover:shadow-md hover:bg-white/80 transition-all">
                <p className="text-3xl sm:text-4xl font-bold text-accent">98%</p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Visa Success</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="bg-white/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-sky-900/10 border border-white relative overflow-hidden"
          >
            {/* Form Inner Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/20">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  MBBS | Engineering | MBA & More
                </span>
              </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">
              Get Your Free Consultation
            </h2>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 text-center py-12 sm:py-16"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-4">✓</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-foreground/70 text-sm sm:text-base">Your inquiry has been received. Our team will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-sm flex-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-sm flex-1"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your mobile number"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-sm flex-1"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                  <div>
                    <label htmlFor="program" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                      Program
                    </label>
                    <div className="relative">
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-sm"
                      >
                        <option value="">Select Program</option>
                        <option value="mbbs">MBBS</option>
                        <option value="engineering">Engineering</option>
                        <option value="mba">MBA</option>
                        <option value="pg">Post-Graduation</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 text-xs">▼</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                      Destination
                    </label>
                    <div className="relative">
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-accent/50 transition text-sm"
                      >
                        <option value="">Select Destination</option>
                        <option value="uk">United Kingdom</option>
                        <option value="usa">USA</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="georgia">Georgia</option>
                        <option value="spain">Spain</option>
                        <option value="france">France</option>
                        <option value="canada">Canada</option>
                        <option value="sweden">Sweden</option>
                        <option value="singapore">Singapore</option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 text-xs">▼</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-foreground font-bold py-3.5 sm:py-4 rounded-lg sm:rounded-xl transition-all active:scale-[0.98] text-sm sm:text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </span>
                  ) : (
                    'Claim My Free Consultation'
                  )}
                </Button>

                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 text-center mt-2"
                  >
                    {error}
                  </motion.p>
                )}

                <p className="text-[10px] sm:text-xs text-foreground/50 text-center pt-2">
                  By submitting, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
