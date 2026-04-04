'use client';

import { Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Career Counselling & Profile Evaluation',
    items: [
      'Personalized one-to-one counseling',
      'Course & career pathway guidance',
      'Country & university suitability assessment',
      'Gap year, academic & work experience evaluation',
    ],
  },
  {
    number: '02',
    title: 'Country & University Shortlisting',
    items: [
      'Shortlisting based on academics, budget & career goals',
      'UG / PG / MBA / Engineering / MBBS options',
      'Public & private university guidance',
      'Ranking, recognition & accreditation checks',
    ],
  },
  {
    number: '03',
    title: 'Admission & Application Processing',
    items: [
      'University application submission',
      'Document verification & formatting',
      'Follow-ups with universities',
      'Offer letter & admission confirmation support',
    ],
  },
  {
    number: '04',
    title: 'SOP, LOR & Resume Assistance',
    items: [
      'Statement of Purpose drafting & editing',
      'Letter of Recommendation guidance',
      'Academic & professional resume preparation',
      'Profile strengthening strategies',
    ],
  },
  {
    number: '05',
    title: 'Entrance Exam & Language Test Guidance',
    items: [
      'IELTS / TOEFL / PTE guidance',
      'GRE / GMAT overview & planning',
      'Country-specific exam requirements',
      'Study material & preparation tips',
    ],
  },
  {
    number: '06',
    title: 'Scholarship & Financial Guidance',
    items: [
      'Scholarship identification & application support',
      'University-specific grants',
      'Education loan guidance',
      'Financial documentation assistance',
    ],
  },
  {
    number: '07',
    title: 'Visa Documentation & Filing Support',
    items: [
      'Country-specific visa checklist',
      'Financial & sponsor documentation',
      'Visa application filing',
      'Mock visa interview preparation',
    ],
  },
  {
    number: '08',
    title: 'Accommodation & Travel Assistance',
    items: [
      'University hostel support',
      'Off-campus accommodation guidance',
      'Travel & flight assistance',
      'Airport pickup coordination (where applicable)',
    ],
  },
  {
    number: '09',
    title: 'Pre-Departure Orientation',
    items: [
      'Country & university briefing',
      'Cultural & academic expectations',
      "Do's & Don'ts abroad",
      'Health insurance & travel guidance',
    ],
  },
  {
    number: '10',
    title: 'Post-Arrival & On-Ground Support',
    items: [
      'University registration assistance',
      'Local compliance & documentation guidance',
      'Student support & follow-ups',
      'Internship & part-time job guidance',
    ],
  },
  {
    number: '11',
    title: 'Specialized Support Services',
    items: [
      'MBBS admission guidance (NMC compliant)',
      'Engineering & STEM pathway counseling',
      'MBA & working professional admissions',
      'PR & post-study work visa guidance (select countries)',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent text-xs font-bold tracking-widest uppercase">Services Offered</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">End-to-End Study Abroad Support</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide complete hand-holding services to students and parents, ensuring a smooth, transparent, and successful overseas education journey — from first counseling to post-arrival support.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              key={service.number}
              className="relative group cursor-pointer"
            >
              <div className="h-full bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm rounded-2xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden relative">
                {/* Glowing Aura Effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/15" />

                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">{service.number}</span>
                    <h3 className="font-bold text-primary text-base lg:text-lg leading-tight">{service.title}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">{item}</span>
                      </div>
                    ))}
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
