'use client';

import { ShieldCheck, HeartHandshake, Globe2, Award, Headset } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Transparent & Ethical Counseling',
    description: 'No hidden fees or false promises. We provide clear, honest guidance tailored to your academic profile and budget.',
    glowColor: 'bg-blue-400/20',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised Approach',
    description: 'Every student is unique. We customize university options and career pathways to match your specific goals.',
    glowColor: 'bg-rose-400/20',
  },
  {
    icon: Globe2,
    title: 'Global University Partnerships',
    description: 'Direct tie-ups with top-ranked, globally recognized institutions across the USA, UK, Europe, and beyond.',
    glowColor: 'bg-emerald-400/20',
  },
  {
    icon: Award,
    title: 'High Visa Success Ratio',
    description: 'Expert documentation and mock interview preparation ensuring one of the highest visa approval rates in the industry.',
    glowColor: 'bg-amber-400/20',
  },
  {
    icon: Headset,
    title: 'Dedicated Course Support',
    description: 'Our relationship doesn’t end at admission. We provide continued support until your course completion.',
    glowColor: 'bg-purple-400/20',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent text-xs font-bold tracking-widest uppercase">Why Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Why Choose Euro Tech EDU?</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Your trusted partner in achieving your global education dreams with proven expertise and dedicated support.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 justify-center"
        >
          {reasons.map((reason, index) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={reason.title}
              className={`relative group cursor-pointer ${index === 3 || index === 4 || index === 5 ? 'lg:col-span-1' : ''}`} // Centers the bottom row if less than 6 items
            >
              {/* Glassmorphism Card */}
              <div className="h-full bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm rounded-2xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden relative">
                
                {/* Glowing Aura Effect */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${reason.glowColor}`} />

                <div className="relative z-10 flex flex-col items-start gap-4 h-full">
                  <div className="text-accent text-2xl bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon size={32} className="flex-shrink-0" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3 mt-2 flex-grow">
                    <h3 className="font-bold text-primary text-lg lg:text-xl leading-snug">{reason.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{reason.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 pt-12 border-t border-slate-200 relative"
        >
          {/* subtle line glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {[
            { number: '500+', label: 'Students Placed' },
            { number: '10+', label: 'Years Experience' },
            { number: '50+', label: 'Partner Universities' },
            { number: '10+', label: 'Destinations' },
          ].map((badge) => (
            <div key={badge.label} className="text-center group">
              <p className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2 group-hover:scale-105 transition-transform duration-300">{badge.number}</p>
              <p className="text-slate-600 font-medium text-sm">{badge.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
