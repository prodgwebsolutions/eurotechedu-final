'use client';

import { TrendingUp, Check, ArrowRight, Globe, Briefcase, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';

const mbaCountries = [
  { name: 'USA', flag: '🇺🇸', duration: '2 Years', fees: '$60,000-120,000/year', highlights: ['M7 Schools', 'High ROI', 'Silicon Valley'], programs: ['MBA', 'Executive MBA'] },
  { name: 'UK', flag: '🇬🇧', duration: '1 Year', fees: '£25,000-65,000/year', highlights: ['Quick Return', 'Global Network', 'Finance Hub'], programs: ['MBA', 'MiM', 'MSc Finance'] },
  { name: 'Australia', flag: '🇦🇺', duration: '1.5-2 Years', fees: 'AUD 45,000-70,000/year', highlights: ['Work Rights', 'PR Pathway', 'Asia-Pacific'], programs: ['MBA', 'MPA', 'MSc'] },
  { name: 'Canada', flag: '🇨🇦', duration: '1-2 Years', fees: 'CAD 35,000-60,000/year', highlights: ['PGWP', 'Immigration', 'Affordable'], programs: ['MBA', 'PGDM'] },
  { name: 'Germany', flag: '🇩🇪', duration: '1-2 Years', fees: '€15,000-45,000/year', highlights: ['Low Cost', 'Industry Links', 'EU Blue Card'], programs: ['MBA', 'Executive MBA'] },
  { name: 'France', flag: '🇫🇷', duration: '1-2 Years', fees: '€20,000-50,000/year', highlights: ['Top B-Schools', 'Luxury Mgmt', 'EU Network'], programs: ['MBA', 'MiM', 'MSc'] },
];

const specializations = [
  { icon: Briefcase, name: 'Finance & Investment', desc: 'Corporate Finance, Investment Banking, Fintech, Risk Management' },
  { icon: Users, name: 'Marketing & Brand', desc: 'Digital Marketing, Brand Management, Consumer Behavior, Analytics' },
  { icon: Award, name: 'Leadership & Strategy', desc: 'General Management, Consulting, Operations, Entrepreneurship' },
];

const whyStudy = [
  'Globally recognised degrees',
  'International business exposure',
  'Industry-oriented curriculum',
  'Strong networking & alumni base',
  'Better career growth & global salaries',
  'Post-study work & PR opportunities',
];

const eligibility = [
  'Bachelor\'s degree with minimum 50-60%',
  'GMAT/GRE score (varies by university)',
  'Work experience preferred (2-5 years for Executive MBA)',
  'English proficiency (IELTS/TOEFL/PTE)',
  'Statement of Purpose & Essays',
];

export default function MBAPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 bg-fixed">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              2026-27 Intake Started
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Study <span className="text-emerald-500">MBA / PG</span> Abroad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Transform Your Career with Global Education
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 mt-4 max-w-3xl mx-auto"
            >
              An MBA or Post-Graduation abroad equips students and working professionals with global business exposure, advanced knowledge, leadership skills, and international career opportunities. At Euro Tech EDU, we provide end-to-end guidance to help you choose the right country, university, and specialization aligned with your career goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Popular MBA Specializations</h2>
            <p className="text-slate-600">Choose a specialization that aligns with your career aspirations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{spec.name}</h3>
                <p className="text-sm text-slate-600">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study MBA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                Career Transformation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Study MBA / PG Abroad?
              </h2>
              <div className="space-y-4">
                {whyStudy.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-emerald-100 p-1.5 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-500" />
                Admission Requirements
              </h3>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Globe className="w-4 h-4" />
                Global Destinations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Countries We Offer MBA / PG Programs In
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Access world-class business schools and advance your career globally
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbaCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-xl font-bold text-slate-900">{country.name}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold text-slate-700">{country.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tuition:</span>
                    <span className="font-semibold text-slate-700">{country.fees}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {country.highlights.map((highlight) => (
                    <span key={highlight} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Transform Your Career Today
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance for MBA and Post-Graduation admissions. Our experts will help you select the right program for your career goals.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
     <div className="w-[90%] rounded-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
