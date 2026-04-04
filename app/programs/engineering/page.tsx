'use client';

import { Cpu, Check, ArrowRight, Globe, Wrench, Code, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LeadForm from '@/components/lead-form';

const enggCountries = [
  { name: 'USA', flag: '🇺🇸', duration: '4 Years', fees: '$30,000-60,000/year', highlights: ['Top Ranked', 'Silicon Valley', 'Research Focus'], specializations: ['CS', 'AI/ML', 'Robotics'] },
  { name: 'Germany', flag: '🇩🇪', duration: '3-4 Years', fees: '€1,500-€10,000/year', highlights: ['Free Tuition', 'Industry Links', 'Job Guarantee'], specializations: ['Mechanical', 'Automotive', 'Electrical'] },
  { name: 'Australia', flag: '🇦🇺', duration: '4 Years', fees: 'AUD 35,000-50,000/year', highlights: ['PR Pathway', 'Work Rights', 'Quality Life'], specializations: ['Civil', 'Mining', 'Software'] },
  { name: 'Canada', flag: '🇨🇦', duration: '4 Years', fees: 'CAD 25,000-40,000/year', highlights: ['PGWP', 'Immigration', 'Co-op Programs'], specializations: ['Engineering', 'Tech', 'Energy'] },
  { name: 'UK', flag: '🇬🇧', duration: '3-4 Years', fees: '£20,000-35,000/year', highlights: ['1-Year Masters', 'Global Recognition', 'Placement Year'], specializations: ['Aerospace', 'Marine', 'Chemical'] },
  { name: 'Singapore', flag: '🇸🇬', duration: '4 Years', fees: 'SGD 20,000-40,000/year', highlights: ['Tech Hub', 'Asian Gateway', 'High Salaries'], specializations: ['Tech', 'Data Science', 'Cybersecurity'] },
];

const specializations = [
  { icon: Code, name: 'Computer Science & IT', desc: 'Software Engineering, AI, Data Science, Cybersecurity' },
  { icon: Wrench, name: 'Mechanical & Automotive', desc: 'Automotive Engineering, Robotics, Mechatronics' },
  { icon: Building2, name: 'Civil & Construction', desc: 'Structural Engineering, Urban Planning, Environmental' },
];

const whyStudy = [
  'Globally ranked universities',
  'Industry-focused & practical learning',
  'Access to advanced labs & research facilities',
  'International internships & paid co-op programs',
  'High employability & global career mobility',
  'Strong pathways to PR and work visas',
];

const eligibility = [
  'Minimum 60% in PCM (Physics, Chemistry, Math) in 12th',
  'SAT/ACT (for USA) or country-specific entrance tests',
  'English proficiency (IELTS/TOEFL/PTE)',
  'Statement of Purpose & Letters of Recommendation',
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 bg-fixed">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            >
              <Cpu className="w-4 h-4" />
              2026-27 Intake Started
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Study <span className="text-blue-500">Engineering</span> Abroad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Build a Global Engineering Career
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 mt-4 max-w-3xl mx-auto"
            >
              Studying Engineering Abroad opens doors to world-class education, cutting-edge technology, global exposure, and international career opportunities. At Euro Tech EDU, we guide engineering aspirants from course selection to successful overseas education and career pathways.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Top Engineering Specializations</h2>
            <p className="text-slate-600">Choose from cutting-edge fields that drive global innovation</p>
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
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{spec.name}</h3>
                <p className="text-sm text-slate-600">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Engineering */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                Why Engineering Abroad?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why Study Engineering Abroad?
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
                    <div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
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
                <Globe className="w-5 h-5 text-blue-500" />
                Eligibility Requirements
              </h3>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Globe className="w-4 h-4" />
                Global Destinations
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Countries We Offer Engineering Programs In
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Access world-renowned engineering institutions with industry connections
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enggCountries.map((country, index) => (
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
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-2">Popular:</p>
                  <div className="flex flex-wrap gap-2">
                    {country.specializations.map((spec) => (
                      <span key={spec} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
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
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Engineer Your Future Today
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get expert guidance for engineering admissions to top global universities. Start your journey to becoming a world-class engineer.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
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
        <div className="w-[90%] rounded-full mx-auto">
               <LeadForm />
             </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
