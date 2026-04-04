'use client';

import { Check, HeartPulse, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const programs = [
  {
    name: 'MBBS Abroad',
    subtitle: 'Your Gateway to a Global Medical Career',
    icon: <HeartPulse className="w-10 h-10 text-rose-500" />,
    description: 'Pursuing an MBBS abroad is a smart and future-ready choice for Indian students seeking globally recognised medical education, advanced infrastructure, and international exposure.',
    whyStudy: [
      'Globally recognised medical degrees',
      'Affordable tuition compared to private medical colleges in India',
      'No donation / No capitation fees',
      'Advanced medical infrastructure & research exposure',
      'International clinical exposure',
      'High FMGE / NEXT success rates',
      'Opportunity for global medical practice'
    ],
    countries: 'UK | USA | AUSTRALIA | GERMANY | GEORGIA | SPAIN | FRANCE & MORE...',
    gradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    glowColor: 'bg-rose-400',
  },
  {
    name: 'Engineering Abroad',
    subtitle: 'Build a Global Engineering Career',
    icon: <Cpu className="w-10 h-10 text-blue-500" />,
    description: 'Studying Engineering Abroad opens doors to world-class education, cutting-edge technology, global exposure, and international career opportunities.',
    whyStudy: [
      'Globally ranked universities',
      'Industry-focused & practical learning',
      'Access to advanced labs & research facilities',
      'International internships & paid co-op programs',
      'High employability & global career mobility',
      'Strong pathways to PR and work visas'
    ],
    countries: 'USA | AUSTRALIA | GERMANY | CANADA | SPAIN | FRANCE | SWEDEN | SINGAPORE & MORE...',
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    glowColor: 'bg-blue-400',
  },
  {
    name: 'MBA / Post-Graduation',
    subtitle: 'Transform Your Career with Global Education',
    icon: <TrendingUp className="w-10 h-10 text-emerald-500" />,
    description: 'An MBA or Post-Graduation abroad equips students and working professionals with global business exposure, advanced knowledge, leadership skills, and international career opportunities.',
    whyStudy: [
      'Globally recognised degrees',
      'International business exposure',
      'Industry-oriented curriculum',
      'Strong networking & alumni base',
      'Better career growth & global salaries',
      'Post-study work & PR opportunities'
    ],
    countries: 'UK | USA | AUSTRALIA | GERMANY | CANADA | SPAIN | FRANCE | SWEDEN | SINGAPORE & MORE...',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    glowColor: 'bg-emerald-400',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
};

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-transparent text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent text-xs font-bold tracking-widest uppercase">Programs</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Study Programs</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            From Medicine to Executive MBAs, get expert guidance through every step of your international academic journey.
          </p>
        </motion.div>

        {/* Programs List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 lg:space-y-12 shrink-0"
        >
          {programs.map((program) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={program.name}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className={`relative overflow-hidden bg-slate-50/80 backdrop-blur-xl border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-lg bg-gradient-to-br ${program.gradient}`}>
                
                {/* Glow dot in the background */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${program.glowColor}`} />

                {/* Left Side: Info */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left inline-block bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-fit">
                    {program.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-2 tracking-wide">{program.name}</h3>
                  <p className="text-accent font-bold mb-4">{program.subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>
                  
                  <div className="mt-auto">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Available In</p>
                    <p className="text-sm font-semibold text-slate-700 bg-white/60 inline-block px-4 py-2 rounded-lg border border-slate-200/50">{program.countries}</p>
                  </div>
                </div>

                {/* Right Side: Highlights */}
                <div className="relative z-10 flex-1 bg-white/50 rounded-2xl p-6 lg:p-8 border border-white">
                  <h4 className="font-bold text-slate-800 mb-6">Why Study {program.name.split(' ')[0]} Abroad?</h4>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {program.whyStudy.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="bg-accent/10 p-1 rounded-full shrink-0 mt-0.5">
                           <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-700 font-medium group-hover:text-primary transition-colors leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                      <Link
                        href={`/programs/${program.name.toLowerCase().includes('mba') ? 'mba' : program.name.toLowerCase().split(' ')[0]}`}
                        className="text-accent text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all duration-300"
                      >
                         Explore {program.name.split(' ')[0]} Programs <span className="text-lg">→</span>
                      </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
