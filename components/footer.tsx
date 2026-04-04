'use client';

import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight">
              Euro Tech EDU
            </h3>
            <p className="text-accent text-sm font-medium tracking-wide uppercase">Your Study Abroad Partner</p>
            <p className="text-sm text-white/70 leading-relaxed pt-2">
              Your trusted partner in international education. Guiding students to their dream universities with transparency and dedication.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base text-white/90">Programs</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/programs/mbbs" className="hover:text-accent transition">MBBS Abroad</Link></li>
              <li><Link href="/programs/engineering" className="hover:text-accent transition">Engineering Abroad</Link></li>
              <li><Link href="/programs/mba" className="hover:text-accent transition">MBA / Post-Graduation</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base text-white/90">Top Destinations</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/70">
               <a href="#destinations" className="hover:text-accent transition">USA</a>
               <a href="#destinations" className="hover:text-accent transition">UK</a>
               <a href="#destinations" className="hover:text-accent transition">Germany</a>
               <a href="#destinations" className="hover:text-accent transition">Australia</a>
               <a href="#destinations" className="hover:text-accent transition">Canada</a>
               <a href="#destinations" className="hover:text-accent transition">Georgia</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base text-white/90">Contact Us</h4>
            <div className="space-y-3.5 text-sm text-white/70">
              <div className="flex items-start gap-3">
                 <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <a href="tel:+919004675133" className="block hover:text-accent transition font-medium">
                    +91 9004675133
                  </a>
              </div>
              <div className="flex items-start gap-3">
                 <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                 <a href="mailto:info@eurotechedu.in" className="block hover:text-accent transition font-medium">
                   info@eurotechedu.in
                  </a>
              </div>
              <div className="flex items-start gap-3">
                 <ExternalLink className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                 <a href="https://www.eurotechedu.in" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition font-medium">
                   www.eurotechedu.in
                  </a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                 <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                 <p className="text-xs leading-relaxed">
                   Dombivli, India 421201
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>© 2026 Euro Tech EDU – Study Abroad. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
