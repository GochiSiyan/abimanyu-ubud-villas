'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import VillaCard from './VillaCard';
import MythologySection from './MythologySection';
import UbudExperienceSection from './UbudExperienceSection';
import TestimonialSection from './TestimonialSection';
import LocationSection from './LocationSection';
import CTASection from './CTASection';
import Footer from './Footer';

interface Villa {
  id: number;
  name: string;
  pandavaBrother: string;
  trait: string;
  description: string;
  image: string;
  alt: string;
  price: number;
  available: boolean;
}

interface MythologyItem {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface Experience {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  villa: string;
  rating: number;
  comment: string;
  image: string;
  alt: string;
  date: string;
}

export default function HomepageInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const villas: Villa[] = [
  {
    id: 1,
    name: "Villa Yudistira",
    pandavaBrother: "Yudistira",
    trait: "Wisdom",
    description: "The eldest brother's villa embodies dharma and righteous wisdom. Featuring a meditation pavilion overlooking rice terraces, this sanctuary offers the perfect space for contemplation and spiritual growth.",
    image: "https://images.unsplash.com/photo-1672128558353-eee6ffe7b3e9",
    alt: "Luxurious Balinese villa with traditional thatched roof, infinity pool overlooking emerald rice terraces, and meditation pavilion surrounded by tropical gardens",
    price: 850,
    available: true
  },
  {
    id: 2,
    name: "Villa Bima",
    pandavaBrother: "Bima",
    trait: "Strength",
    description: "Inspired by the mighty warrior's courage, this villa features bold architecture and powerful design elements. The private gym and outdoor training area reflect Bima's legendary physical prowess.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_119bb1cdb-1765061397260.png",
    alt: "Modern luxury villa with bold angular architecture, private fitness pavilion, and dramatic infinity pool with mountain views in Ubud",
    price: 920,
    available: true
  },
  {
    id: 3,
    name: "Villa Arjuna",
    pandavaBrother: "Arjuna",
    trait: "Focus",
    description: "The master archer's precision and concentration inspire this villa's design. Clean lines, minimalist aesthetics, and a dedicated workspace create an environment of perfect focus and clarity.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c314116-1767893349903.png",
    alt: "Minimalist luxury villa with clean architectural lines, zen garden, dedicated meditation and work space, surrounded by bamboo forest in Ubud",
    price: 880,
    available: false
  },
  {
    id: 4,
    name: "Villa Nakula",
    pandavaBrother: "Nakula",
    trait: "Beauty",
    description: "Celebrating the handsome twin's appreciation for aesthetics, this villa showcases exquisite Balinese artistry. Every detail reflects refined taste and cultural beauty.",
    image: "https://images.unsplash.com/photo-1640664652266-374d9d493c6b",
    alt: "Elegant Balinese villa featuring intricate traditional wood carvings, lotus pond, art gallery space, and lush tropical garden with traditional stone sculptures",
    price: 900,
    available: true
  },
  {
    id: 5,
    name: "Villa Sadewa",
    pandavaBrother: "Sadewa",
    trait: "Devotion",
    description: "The youngest brother's spiritual devotion manifests in this villa's sacred spaces. A private temple, healing garden, and ceremonial areas honor Balinese spiritual traditions.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10efa58fb-1765517565758.png",
    alt: "Spiritual luxury villa with private temple shrine, healing herb garden, ceremonial courtyard, and traditional Balinese water features surrounded by frangipani trees",
    price: 870,
    available: true
  }];


  const mythologyItems: MythologyItem[] = [
  {
    id: 1,
    title: "Yudistira - The Wise King",
    description: "The eldest Pandava, known for his unwavering commitment to dharma and truth. His wisdom guides all decisions with righteousness and moral clarity.",
    image: "https://images.unsplash.com/photo-1699587090112-0025b205a3f1",
    alt: "Serene meditation space with traditional Balinese offerings, incense, and golden Buddha statue representing wisdom and dharma"
  },
  {
    id: 2,
    title: "Bima - The Mighty Warrior",
    description: "The strongest of the brothers, Bima's courage and physical prowess are legendary. His straightforward nature and protective spirit inspire strength.",
    image: "https://images.unsplash.com/photo-1555465237-bec250e737ec",
    alt: "Traditional Balinese warrior statue with muscular build, ceremonial weapons, and fierce protective expression carved in volcanic stone"
  },
  {
    id: 3,
    title: "Arjuna - The Focused Archer",
    description: "The greatest archer in the Mahabharata, Arjuna's concentration and skill are unmatched. His devotion to Krishna represents spiritual focus.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be3e386a-1765883180828.png",
    alt: "Minimalist zen space with single orchid, smooth river stones, and focused lighting representing concentration and clarity"
  },
  {
    id: 4,
    title: "Nakula - The Beautiful Twin",
    description: "Known for his exceptional beauty and knowledge of horses, Nakula represents aesthetic refinement and appreciation for life's elegance.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a2659e7c-1769668176401.png",
    alt: "Elegant Balinese art gallery displaying traditional paintings, intricate wood carvings, and beautiful batik textiles in warm lighting"
  },
  {
    id: 5,
    title: "Sadewa - The Devoted Brother",
    description: "The youngest Pandava, Sadewa's spiritual knowledge and devotion to family represent deep commitment and sacred wisdom.",
    image: "https://images.unsplash.com/photo-1540961845746-c5c2964bb9d4",
    alt: "Sacred Balinese temple altar with fresh flower offerings, burning incense, holy water vessels, and traditional ceremonial items"
  }];


  const experiences: Experience[] = [
  {
    id: 1,
    title: "Sacred Temple Ceremonies",
    description: "Participate in authentic Balinese purification rituals at ancient water temples. Experience spiritual cleansing guided by local priests in sacred springs.",
    icon: "SparklesIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bb0c28b-1764825281993.png",
    alt: "Traditional Balinese water temple ceremony with devotees in white sarongs performing purification ritual in sacred spring pool"
  },
  {
    id: 2,
    title: "Traditional Cooking Classes",
    description: "Learn authentic Balinese cuisine from local chefs. Visit morning markets, select fresh ingredients, and master traditional cooking techniques.",
    icon: "FireIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d99482d-1769269605779.png",
    alt: "Balinese cooking class with fresh tropical ingredients, traditional spices, and chef demonstrating authentic cooking techniques in outdoor kitchen"
  },
  {
    id: 3,
    title: "Artisan Workshops",
    description: "Create your own masterpiece with Ubud's master craftsmen. Learn traditional wood carving, silver smithing, or batik painting techniques.",
    icon: "PaintBrushIcon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191ca5ff7-1767979826752.png",
    alt: "Balinese artisan workshop with master craftsman teaching traditional wood carving techniques, surrounded by intricate sculptures and tools"
  },
  {
    id: 4,
    title: "Sunrise Yoga & Meditation",
    description: "Begin your day with guided yoga sessions overlooking rice terraces. Connect with nature through meditation practices rooted in Balinese spirituality.",
    icon: "SunIcon",
    image: "https://images.unsplash.com/photo-1694152341020-00449316a794",
    alt: "Peaceful sunrise yoga session on open-air pavilion overlooking terraced rice fields with morning mist and tropical mountains"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    villa: "Villa Yudistira",
    rating: 5,
    comment: "Staying at Villa Yudistira was transformative. The meditation pavilion became my daily sanctuary. I left feeling spiritually renewed and culturally enriched.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17a8ca712-1763299129202.png",
    alt: "Professional headshot of blonde woman in her thirties with warm smile wearing casual white linen shirt",
    date: "January 2026"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    villa: "Villa Arjuna",
    rating: 5,
    comment: "The perfect blend of luxury and authenticity. Villa Arjuna's minimalist design helped me focus on what truly matters. The cultural experiences were deeply meaningful.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1411747e3-1763295401643.png",
    alt: "Professional headshot of Asian man in his forties with confident smile wearing navy blue blazer",
    date: "December 2025"
  },
  {
    id: 3,
    name: "Isabella Romano",
    location: "Milan, Italy",
    villa: "Villa Nakula",
    rating: 5,
    comment: "As an art curator, I was mesmerized by the exquisite Balinese craftsmanship throughout Villa Nakula. Every corner tells a story. Absolutely breathtaking.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_109aa3ccb-1763293645787.png",
    alt: "Professional headshot of elegant woman with dark hair in her thirties wearing sophisticated black turtleneck",
    date: "November 2025"
  }];


  const handleExploreClick = () => {
    if (!isHydrated) return;
    const villasSection = document.getElementById('villas-section');
    if (villasSection) {
      villasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (villaId: number) => {
    if (!isHydrated) return;
    console.log(`Learning more about villa ${villaId}`);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-center space-y-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto" />
            <p className="font-body text-muted-foreground">Loading your legendary journey...</p>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onExploreClick={handleExploreClick} />

      {/* Villas Section */}
      <section id="villas-section" className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Five Legendary Villas
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each villa embodies the unique spirit of a Pandava brother, offering distinct experiences rooted in ancient mythology and modern luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa) =>
            <VillaCard key={villa.id} villa={villa} onLearnMore={handleLearnMore} />
            )}
          </div>
        </div>
      </section>

      <MythologySection items={mythologyItems} />
      <UbudExperienceSection experiences={experiences} />
      <TestimonialSection testimonials={testimonials} />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>);

}