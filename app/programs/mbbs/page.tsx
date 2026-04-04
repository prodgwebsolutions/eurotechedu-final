'use client';

import { HeartPulse, Check, ArrowRight, Globe, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';

const mbbsCountries = [
  { name: 'UK', flag: '🇬🇧', duration: '5-6 Years', fees: '£25,000-£45,000/year', highlights: ['NMC Approved', 'Clinical Training', 'Global Recognition'] },
  { name: 'USA', flag: '🇺🇸', duration: '4 Years (MD)', fees: '$50,000-70,000/year', highlights: ['World-Class Labs', 'Research Focus', 'Residency Options'] },
  { name: 'Australia', flag: '🇦🇺', duration: '5-6 Years', fees: 'AUD 60,000-80,000/year', highlights: ['Quality Education', 'PR Pathway', 'High Standard'] },
  { name: 'Germany', flag: '🇩🇪', duration: '6 Years', fees: '€1,500-€10,000/year', highlights: ['Low Tuition', 'English Programs', 'Advanced Tech'] },
  { name: 'Georgia', flag: '🇬🇪', duration: '6 Years', fees: '$4,000-8,000/year', highlights: ['Affordable', 'NMC Listed', 'English Medium'] },
  { name: 'Spain', flag: '🇪🇸', duration: '6 Years', fees: '€6,000-15,000/year', highlights: ['EU Recognition', 'Clinical Exposure', 'English Programs'] },
  { name: 'France', flag: '🇫🇷', duration: '6 Years', fees: '€3,000-15,000/year', highlights: ['Affordable', 'Research Focus', 'Global Degree'] },
];

const whyStudy = [
  'Globally recognised medical degrees',
  'Affordable tuition compared to private medical colleges in India',
  'No donation / No capitation fees',
  'Advanced medical infrastructure & research exposure',
  'International clinical exposure',
  'High FMGE / NEXT success rates',
  'Opportunity for global medical practice',
];

const eligibility = [
  'Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th',
  'NEET qualification (for Indian students)',
  'English proficiency (IELTS/TOEFL for some countries)',
  'Age 17+ years at time of admission',
];

export default function MBBSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 bg-fixed">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            >
              <Stethoscope className="w-4 h-4" />
              2026-27 Intake Started
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Study <span className="text-rose-500">MBBS</span> Abroad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Your Gateway to a Global Medical Career
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 mt-4 max-w-3xl mx-auto"
            >
              Pursuing an MBBS abroad is a smart and future-ready choice for Indian students seeking globally recognised medical education, advanced infrastructure, and international exposure. At Euro Tech EDU, we guide aspiring doctors through end-to-end admission support, from university selection to visa approval and post-study guidance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Study MBBS Abroad */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">
                <HeartPulse className="w-4 h-4" />
                Why MBBS Abroad?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Study MBBS Abroad?
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
                    <div className="bg-rose-100 p-1.5 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-rose-600" />
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
                <GraduationCap className="w-5 h-5 text-rose-500" />
                Eligibility Criteria
              </h3>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-rose-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
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
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Globe className="w-4 h-4" />
                Global Destinations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Countries We Offer MBBS Programs In
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Choose from top medical universities across the world with NMC-recognized degrees
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbbsCountries.map((country, index) => (
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
                    <span key={highlight} className="bg-rose-50 text-rose-700 text-xs font-medium px-2 py-1 rounded-full">
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
            className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 sm:p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Medical Journey Today
            </h2>
            <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance for MBBS admissions. Our experts will help you choose the right university and navigate the entire process.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold px-8 py-4 rounded-xl hover:bg-rose-50 transition-colors"
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
