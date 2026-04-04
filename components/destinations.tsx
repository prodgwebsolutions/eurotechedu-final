'use client';

import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const destinations = [
  {
    name: 'USA',
    icon: '🇺🇸',
    description: 'Top-ranked universities with world-class education and unparalleled graduate opportunities.',
    highlights: ['World-Class Infrastructure', 'OPT Work Opportunity', 'Best in STEM', 'Global Recognition'],
    glowColor: 'bg-blue-400/30',
  },
  {
    name: 'United Kingdom',
    icon: '🇬🇧',
    description: 'Historic institutions with globally recognised credentials and fast-track degrees.',
    highlights: ['2-Year Post-Study Work', 'Shorter Master\'s (1yr)', 'Top Medical/MBA', 'Multicultural Campus'],
    glowColor: 'bg-red-400/30',
  },
  {
    name: 'Germany',
    icon: '🇩🇪',
    description: 'Affordable, high-quality public education with a strong emphasis on engineering and research.',
    highlights: ['Free/Low Tuition Fees', 'Engineering Hub', '18-Month Job Search', 'Strong Economy'],
    glowColor: 'bg-amber-400/30',
  },
  {
    name: 'Australia',
    icon: '🇦🇺',
    description: 'Modern campuses, relaxed lifestyle, and highly-rated programs in medicine and business.',
    highlights: ['Post-Study Work Visa', 'High Living Standards', 'Top MBBS & MBA', 'PR Opportunities'],
    glowColor: 'bg-emerald-400/30',
  },
  {
    name: 'Canada',
    icon: '🇨🇦',
    description: 'Welcoming environment known for excellent education, diversity, and immigration pathways.',
    highlights: ['Co-op Programs', 'Up to 3-Yr PGWP', 'High Employability', 'Direct PR Pathways'],
    glowColor: 'bg-red-500/30',
  },
  {
    name: 'Spain',
    icon: '🇪🇸',
    description: 'Vibrant culture with excellent business schools, medical programs, and affordable living.',
    highlights: ['Top Business Schools', 'Affordable Living', 'European Lifestyle', 'Learn Spanish'],
    glowColor: 'bg-yellow-400/30',
  },
  {
    name: 'France',
    icon: '🇫🇷',
    description: 'A global leader in innovation and management studies with affordable public institutions.',
    highlights: ['Grandes Écoles', 'Management & Tech', 'Rich Heritage', 'Subsidised Living'],
    glowColor: 'bg-blue-600/30',
  },
  {
    name: 'Georgia',
    icon: '🇬🇪',
    description: 'An increasingly popular destination offering affordable, WHO-recognized English MBBS programs.',
    highlights: ['NMC/WHO Approved', 'Affordable MBBS', 'English Taught', 'European Standards'],
    glowColor: 'bg-rose-400/30',
  },
  {
    name: 'Singapore',
    icon: '🇸🇬',
    description: 'Asia\'s premier educational hub offering world-class technology, business, and MBA degrees.',
    highlights: ['Global Financial Hub', 'Safe Environment', 'Top Asian Ranking', 'Proximity to India'],
    glowColor: 'bg-red-600/30',
  },
  {
    name: 'Sweden',
    icon: '🇸🇪',
    description: 'Home to the Nobel Prize, offering innovative, student-centric higher education.',
    highlights: ['Innovation Focus', 'Sustainable Dev.', 'High Quality of Life', 'Post-Study Work'],
    glowColor: 'bg-blue-500/30',
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32 bg-transparent text-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent text-xs font-bold tracking-widest uppercase">Destinations</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Study Destinations</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            World-leading universities across premier global destinations designed for your academic and professional success.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={destination.name}
              className="relative group cursor-pointer"
            >
              {/* Card Container - Light Glassmorphism */}
              <div className="h-full bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-md">
                
                {/* Glowing Aura Effect */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${destination.glowColor}`} />

                <div className="relative z-10 space-y-4">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">{destination.icon}</div>
                  <h3 className="text-2xl font-bold text-primary tracking-wide">{destination.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed min-h-[60px]">{destination.description}</p>

                  <div className="space-y-3 pt-6 mt-6 border-t border-slate-100">
                    {destination.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-slate-700 group-hover:text-primary transition-colors">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link inside card */}
                  <div className="pt-4 flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Destination <ArrowRight className="w-4 h-4 ml-1" />
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
