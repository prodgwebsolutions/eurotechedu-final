'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, GraduationCap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import hero from "../public/hero.jpg"
import Image from 'next/image';
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

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
        throw new Error(data.error || 'Submission failed.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', program: '', destination: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

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
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={hero}
          alt="Study abroad background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Optional Gradient Overlay for premium feel */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-start">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left text-white"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20">
                  <GraduationCap className="w-4 h-4" />
                  2026-27 Intake Started — Enroll Now
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Your Gateway to a <span className="text-amber-300">Global Career</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0"
              >
                Pursuing education abroad is a smart and future-ready choice. We guide students through admissions, visa, and beyond.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <p className="text-3xl font-bold text-amber-300">500+</p>
                <p className="text-sm text-white/70 mt-1">Students Placed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <p className="text-3xl font-bold text-amber-300">10+</p>
                <p className="text-sm text-white/70 mt-1">Countries</p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <p className="text-3xl font-bold text-amber-300">98%</p>
                <p className="text-sm text-white/70 mt-1">Visa Success</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white"
          >
            <h2 className="text-2xl font-bold mb-6">
              Get Your Free Consultation
            </h2>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-green-600 text-3xl mb-2">✓</div>
                <p>We’ll contact you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-white rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-white rounded-lg"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-white rounded-lg"
                />

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
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3"
                >
                  {isLoading ? 'Submitting...' : 'Claim Free Consultation'}
                </Button>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}