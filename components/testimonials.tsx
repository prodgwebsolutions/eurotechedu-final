'use client';

import { ArrowRight, ThumbsUp, MessageSquare, Headphones } from 'lucide-react';

const featuredReviews = [
  {
    name: 'Sarah Jenkins',
    university: 'Oxford University, UK',
    avatar: 'SJ',
    avatarBg: 'bg-orange-100',
    avatarColor: 'text-orange-600',
    review:
      '"Eurotechedu Pro made my dream of studying in the UK a reality. Their guidance during the application and visa process was absolutely invaluable!"',
  },
  {
    name: 'Mark Thompson',
    university: 'TU Munich, Germany',
    avatar: 'MT',
    avatarBg: 'bg-blue-100',
    avatarColor: 'text-blue-600',
    review:
      '"The application process for Germany was complex, but the team here made it seamless. I couldn\'t have secured my spot without them."',
  },
  {
    name: 'Elena Rossi',
    university: 'Sorbonne University, France',
    avatar: 'ER',
    avatarBg: 'bg-purple-100',
    avatarColor: 'text-purple-600',
    review:
      '"Highly professional team. They helped me with every detail from visa interviews to finding student housing in Paris. Exceptional service!"',
  },
];

const communityReviews = [
  {
    name: 'Ahmed Khan',
    timeAgo: '2 months ago',
    rating: 5,
    review:
      'Excellent coaching for my entrance exams. The prep materials were very clear and tailored to European standards.',
    likes: 24,
    avatar: 'AK',
    avatarBg: 'bg-green-100',
    avatarColor: 'text-green-700',
  },
  {
    name: 'Sofia Lopez',
    timeAgo: '1 month ago',
    rating: 5,
    review:
      "The best consultancy for European education. My transition to Milan was perfect thanks to Eurotechedu Pro's regional experts.",
    likes: 18,
    avatar: 'SL',
    avatarBg: 'bg-pink-100',
    avatarColor: 'text-pink-700',
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-bold tracking-widest uppercase">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">What Our Students Say</h2>
          <div className="mx-auto w-16 h-1 bg-accent rounded-full mt-2" />
        </div>

        {/* Featured Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${r.avatarBg} ${r.avatarColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{r.name}</p>
                  <p className="text-accent text-xs font-medium">{r.university}</p>
                </div>
              </div>
              <StarRating />
              <p className="mt-4 text-sm text-foreground/70 italic leading-relaxed">{r.review}</p>
            </div>
          ))}
        </div>

        {/* Community Reviews (Google-style) */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {communityReviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-l-accent border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${r.avatarBg} ${r.avatarColor} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{r.name}</p>
                    <p className="text-foreground/50 text-xs">{r.timeAgo}</p>
                  </div>
                </div>
                <StarRating count={r.rating} />
              </div>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{r.review}</p>
              <div className="mt-4 flex items-center gap-4 text-foreground/40 text-xs">
                <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{r.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-white/70 text-base max-w-md mx-auto mb-8">
            The 2026-27 intake has started. Join 500+ successful students who have secured admissions in top universities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919004675133"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm"
            >
              <Headphones className="w-4 h-4" /> Contact Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
