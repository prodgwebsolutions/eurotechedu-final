'use client';

import { useState } from 'react';
import { ChevronDown, Headphones, CalendarDays } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What programs does Euro Tech EDU offer?',
    answer: 'We offer specialized guidance for MBBS, Engineering, and MBA/Post-Graduation programs. Whether you\'re looking for a globally recognized medical degree or an industry-focused engineering path, we cover top destinations like the UK, USA, Germany, Australia, Canada, and more.',
  },
  {
    question: 'Do you charge for the initial consultation?',
    answer: 'No, our initial profile evaluation and career counseling session is completely free. We assess your academic background, budget, and career goals to recommend the best possible pathways for your international education.',
  },
  {
    question: 'How does the MBBS abroad process work?',
    answer: 'We provide end-to-end NMC-compliant MBBS admission guidance. This includes selecting affordable, WHO-recognized medical universities (in countries like Georgia, UK, Germany), handling the application without donation fees, and providing support until you are enrolled.',
  },
  {
    question: 'When should I apply for the 2026-27 intake?',
    answer: 'The 2026-27 intake has already started. We highly recommend beginning the process 6-12 months in advance. This gives ample time for university shortlisting, preparing SOPs/LORs, clearing language tests, and processing visas without stress.',
  },
  {
    question: 'Do you provide assistance with SOPs and Resumes?',
    answer: 'Yes! Drafting a strong Statement of Purpose (SOP) and academic resume is crucial. Our team provides dedicated assistance in writing, editing, and structuring your SOPs, LORs, and Resumes to maximize your chances of acceptance.',
  },
  {
    question: 'Will you help me find scholarships and education loans?',
    answer: 'Absolutely. We actively identify university-specific grants, merit-based scholarships, and financial aid opportunities. We also guide you through the financial documentation required for education loans and visas.',
  },
  {
    question: 'What kind of support do you offer after I get my visa?',
    answer: 'Our services don\'t end at visa approval. We offer full Pre-Departure Orientation and Post-Arrival Support, including university registration assistance, finding off-campus accommodation, travel guidance, and even internship & part-time job guidance.',
  },
  {
    question: 'How do I start the process?',
    answer: 'Simply fill out the consultation form on this website, email us at info@eurotechedu.in, or call/WhatsApp us at 9004675133. Our expert counselors will get in touch with you to schedule your personalized profile evaluation.',
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
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-accent text-xs font-bold tracking-widest uppercase">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Everything you need to know about the study abroad process, our services, and how we help.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`bg-white/70 backdrop-blur-xl border shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:bg-white/80 ${openIndex === index ? 'border-accent/40 bg-white/90' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <h3 className="text-base sm:text-lg font-bold text-primary pr-4">{item.question}</h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-accent/10 text-accent' : 'bg-slate-100 text-slate-400'}`}>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180 text-accent' : ''
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-1 border-t border-slate-100/80 bg-transparent">
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
