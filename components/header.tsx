'use client';

import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-accent/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary leading-tight">
              Euro Tech EDU
              <span className="block text-[10px] sm:text-xs font-medium text-accent tracking-wider uppercase">Your Study Abroad Partner</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#destinations" className="text-sm font-medium text-foreground hover:text-primary transition">
              Destinations
            </a>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-1 py-2">
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-slate-200 rounded-xl shadow-lg p-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/programs/mbbs" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-rose-500 rounded-lg transition">
                  MBBS Abroad
                </Link>
                <Link href="/programs/engineering" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-500 rounded-lg transition">
                  Engineering Abroad
                </Link>
                <Link href="/programs/mba" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-500 rounded-lg transition">
                  MBA / Post-Graduation
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <a href="/#programs" className="block px-4 py-2 text-sm text-slate-500 hover:bg-slate-50 rounded-lg transition">
                  View All Programs
                </a>
              </div>
            </div>
            <a href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition">
              Services
            </a>
            <a href="/#faq" className="text-sm font-medium text-foreground hover:text-primary transition">
              FAQ
            </a>
            <a href="/#contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919004675133"
              className="text-sm font-bold text-primary hover:text-accent transition"
            >
              +91 9004675133
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-md px-6 py-2.5">
              Consult Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-accent/10 pt-4">
            <a href="/#destinations" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Destinations
            </a>
            <div className="py-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Programs</p>
              <div className="space-y-2 pl-2">
                <Link href="/programs/mbbs" className="block text-sm text-foreground hover:text-rose-500 py-1">MBBS Abroad</Link>
                <Link href="/programs/engineering" className="block text-sm text-foreground hover:text-blue-500 py-1">Engineering Abroad</Link>
                <Link href="/programs/mba" className="block text-sm text-foreground hover:text-emerald-500 py-1">MBA / Post-Graduation</Link>
              </div>
            </div>
            <a href="/#services" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Services
            </a>
            <a href="/#faq" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              FAQ
            </a>
            <a href="/#contact" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+919004675133" className="text-sm font-bold text-primary">
                +91 9004675133
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold">Get Free Consultation</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
