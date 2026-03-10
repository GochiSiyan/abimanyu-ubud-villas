import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import HeroSlider from './HeroSlider';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
          <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Mythological Symbol */}
          <div className="inline-block animate-fade-in">
            <AppImage
              src="assets/images/logo.png"
              alt=""
              className='w-20 mx-auto'
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight tracking-wide">
            Live the Legend
          </h1>

          {/* Subheadline */}
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Where mythology meets luxury in the heart of Ubud
          </p>

          {/* Description */}
          <p className="font-accent text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Embark on a spiritual journey through five legendary villas, each named after the noble Pandawa brothers. Experience authentic Balinese culture wrapped in contemporary luxury.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-accent text-accent-foreground font-cta text-lg font-medium rounded-md shadow-temple hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">

              Explore Our Villas
            </button>
            <Link
              href="/villa-collection"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-cta text-lg font-medium rounded-md hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">

              View Collection
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-white/90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-body text-sm">5-Star Luxury</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-body text-sm">Cultural Authenticity</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-body text-sm">98% Guest Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>);

}