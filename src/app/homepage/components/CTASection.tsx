import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="temple-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10L60 30H40L50 10Z" fill="currentColor" />
              <rect x="45" y="30" width="10" height="20" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#temple-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Icon */}
        <div className="inline-block">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <circle cx="40" cy="40" r="38" stroke="var(--color-accent)" strokeWidth="3" fill="none" opacity="0.5" />
            <path
              d="M40 15L50 35L70 40L50 45L40 65L30 45L10 40L30 35L40 15Z"
              fill="var(--color-accent)"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
          Begin Your Legendary Journey
        </h2>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Discover which Pandava villa resonates with your spirit. Book your transformative stay and experience the perfect fusion of mythology, luxury, and authentic Balinese culture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/villa-collection"
            className="px-8 py-4 bg-accent text-accent-foreground font-cta text-lg font-medium rounded-md shadow-temple hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Explore Villa Collection
          </Link>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-cta text-lg font-medium rounded-md hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
            Take Personality Quiz
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
          <div className="text-center">
            <p className="font-headline text-3xl font-semibold text-white">500+</p>
            <p className="font-accent text-sm text-white/80 uppercase tracking-wide">Happy Guests</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-3xl font-semibold text-white">4.9/5</p>
            <p className="font-accent text-sm text-white/80 uppercase tracking-wide">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-headline text-3xl font-semibold text-white">5</p>
            <p className="font-accent text-sm text-white/80 uppercase tracking-wide">Legendary Villas</p>
          </div>
        </div>
      </div>
    </section>
  );
}