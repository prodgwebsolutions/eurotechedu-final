'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import Destinations from '@/components/destinations';
import Programs from '@/components/programs';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import FAQ from '@/components/faq';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 bg-fixed">
      <Header />
      <Hero />
      <Destinations />
      <Programs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
