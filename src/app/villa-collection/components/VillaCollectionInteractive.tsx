'use client';

import { useState, useEffect } from 'react';
import VillaCard from './VillaCard';
import FilterPanel, { FilterState } from './FilterPanel';
import VillaDetailModal from './VillaDetailModal';
import PersonalityQuiz from './PersonalityQuiz';
import ComparisonTool from './ComparisonTool';
import Icon from '@/components/ui/AppIcon';

interface Villa {
  id: string;
  name: string;
  pandavaBrother: string;
  characteristic: string;
  description: string;
  fullDescription: string;
  image: string;
  alt: string;
  gallery: Array<{url: string;alt: string;}>;
  price: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number;
  symbol: string;
  color: string;
  amenities: string[];
  mythology: string;
}

const VillaCollectionInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filteredVillas, setFilteredVillas] = useState<Villa[]>([]);
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [comparisonVillas, setComparisonVillas] = useState<Villa[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockVillas: Villa[] = [
  {
    id: '1',
    name: 'Villa Yudistira',
    pandavaBrother: 'The Eldest Pandava',
    characteristic: 'Wisdom & Righteousness',
    description: 'Experience the tranquility of wisdom in this serene sanctuary designed for contemplation and learning. Perfect for those seeking intellectual and spiritual growth.',
    fullDescription: 'Villa Yudistira embodies the essence of wisdom and righteousness, offering a peaceful retreat for those who seek knowledge and enlightenment. The villa features a private library, meditation spaces, and traditional Balinese architecture that encourages deep reflection and spiritual growth. Every corner of this villa is designed to inspire contemplation and foster a connection with ancient wisdom.',
    image: "https://images.unsplash.com/photo-1699012675640-2671d9498544",
    alt: 'Luxurious Balinese villa with traditional architecture, wooden pillars, thatched roof, infinity pool overlooking lush green rice terraces at sunset',
    gallery: [
    { url: "https://images.unsplash.com/photo-1721216596273-586bfde422e7", alt: 'Spacious master bedroom with four-poster bed, white linens, wooden furniture, and large windows overlooking tropical garden' },
    { url: "https://images.unsplash.com/photo-1699168521703-39489bdd760b", alt: 'Open-air living room with comfortable seating, traditional Balinese decor, and views of rice paddies' },
    { url: "https://images.unsplash.com/photo-1687783615479-514a89b3fbaa", alt: 'Private infinity pool with stone deck, lounge chairs, and panoramic views of Ubud valley' },
    { url: "https://images.unsplash.com/photo-1732322507473-2357b6d0472c", alt: 'Traditional Balinese outdoor bathroom with stone bathtub, tropical plants, and natural lighting' },
    { url: "https://img.rocket.new/generatedImages/rocket_gen_img_13d2e721b-1768512873933.png", alt: 'Meditation pavilion with cushions, incense, and serene garden views' },
    { url: "https://images.unsplash.com/photo-1721523257374-5f1f7005a011", alt: 'Fully equipped modern kitchen with island, wooden cabinets, and traditional Balinese accents' }],

    price: 850,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    size: 350,
    symbol: '🕉️',
    color: '#8B4513',
    amenities: [
    'Private Library with Ancient Texts',
    'Meditation Garden & Pavilion',
    'Traditional Balinese Architecture',
    'Infinity Pool with Valley Views',
    'Personal Butler Service',
    'Daily Yoga Sessions',
    'Organic Breakfast Included',
    'High-Speed WiFi',
    'Air Conditioning',
    'Private Chef Available',
    'Spa Treatment Room',
    'Cultural Workshop Space'],

    mythology: 'Yudistira, the eldest of the Pandava brothers, was renowned for his unwavering commitment to truth and dharma. Known as Dharmaraja (King of Righteousness), he never spoke a lie and always chose the path of virtue, even in the face of great adversity. His wisdom guided his brothers through countless challenges, and his devotion to justice made him a beacon of moral integrity. This villa channels his spirit of wisdom, offering guests a space for deep contemplation and spiritual growth.'
  },
  {
    id: '2',
    name: 'Villa Bima',
    pandavaBrother: 'The Mighty Warrior',
    characteristic: 'Strength & Courage',
    description: 'Embrace the power of strength in this bold and dynamic villa. Ideal for adventurers and those who seek physical and mental fortitude.',
    fullDescription: 'Villa Bima captures the indomitable spirit of the mighty warrior, offering a powerful retreat for those who embrace strength and courage. With expansive outdoor spaces, a state-of-the-art fitness pavilion, and adventure-ready amenities, this villa is perfect for active travelers seeking both physical challenges and luxurious comfort. The bold architecture and dynamic design reflect Bima\'s fearless nature.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6b09e54-1766169068321.png",
    alt: 'Modern luxury villa with bold architecture, large glass windows, outdoor fitness area, and dramatic mountain backdrop',
    gallery: [
    { url: "https://images.unsplash.com/photo-1722649945122-ced6af15336f", alt: 'Contemporary master suite with king bed, minimalist design, floor-to-ceiling windows, and mountain views' },
    { url: "https://images.unsplash.com/photo-1652602434749-b2e388f50228", alt: 'Outdoor fitness pavilion with yoga mats, weights, and panoramic jungle views' },
    { url: "https://images.unsplash.com/photo-1639931943697-fbbef099f151", alt: 'Large infinity pool with waterfall feature, sun loungers, and tropical landscaping' },
    { url: "https://images.unsplash.com/photo-1707189855419-721b788aec6e", alt: 'Open-plan living area with high ceilings, modern furniture, and natural stone accents' },
    { url: "https://images.unsplash.com/photo-1718040962694-80f1a84e4aef", alt: 'Outdoor dining terrace with long wooden table, ambient lighting, and forest backdrop' },
    { url: "https://images.unsplash.com/flagged/photo-1573168710646-2666a770f962", alt: 'Luxurious spa bathroom with rain shower, soaking tub, and natural stone walls' }],

    price: 950,
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    size: 450,
    symbol: '⚡',
    color: '#CD5C5C',
    amenities: [
    'Private Fitness Pavilion',
    'Adventure Activity Coordination',
    'Outdoor Training Area',
    'Infinity Pool with Waterfall',
    'Mountain Biking Equipment',
    'Rock Climbing Wall',
    'Personal Trainer Available',
    'Protein-Rich Meal Plans',
    'Massage Therapy Room',
    'Steam Room & Sauna',
    'Sports Equipment Storage',
    'Helicopter Landing Pad Access'],

    mythology: 'Bima, the second Pandava brother, was celebrated for his extraordinary physical strength and unwavering courage. Known as Vrikodara (Wolf-Bellied), he possessed the strength of ten thousand elephants and wielded the mighty mace Gada. His fearless nature and protective instinct made him the guardian of his family. Despite his formidable power, Bima was deeply devoted to his brothers and fought with honor. This villa embodies his warrior spirit, offering guests a space to cultivate their own strength and courage.'
  },
  {
    id: '3',
    name: 'Villa Arjuna',
    pandavaBrother: 'The Focused Archer',
    characteristic: 'Focus & Precision',
    description: 'Find your center in this minimalist sanctuary designed for concentration and mindfulness. Perfect for those seeking clarity and purpose.',
    fullDescription: 'Villa Arjuna reflects the legendary archer\'s unwavering focus and precision, offering a minimalist retreat designed for concentration and mindfulness. With dedicated meditation spaces, a tranquil zen garden, and architecture that eliminates distractions, this villa provides the perfect environment for those seeking clarity, purpose, and deep inner work. Every element is carefully curated to support focused practice and mental discipline.',
    image: "https://images.unsplash.com/photo-1691430754086-1ac0df06bf5b",
    alt: 'Minimalist zen villa with clean lines, white walls, meditation garden with raked gravel, bamboo accents, and serene water features',
    gallery: [
    { url: "https://images.unsplash.com/photo-1723258340132-70d00a850524", alt: 'Minimalist bedroom with low platform bed, white linens, single artwork, and sliding doors to zen garden' },
    { url: "https://images.unsplash.com/photo-1619166855707-bba87a7772a2", alt: 'Meditation room with tatami mats, cushions, incense altar, and natural light from skylight' },
    { url: "https://images.unsplash.com/photo-1694448831938-6ace69f10169", alt: 'Zen garden with raked gravel patterns, stone lanterns, bamboo fence, and koi pond' },
    { url: "https://images.unsplash.com/photo-1655181750366-6fcacc9770f8", alt: 'Open living space with minimal furniture, natural materials, and seamless indoor-outdoor flow' },
    { url: "https://images.unsplash.com/photo-1495340320195-d03aa2190ee6", alt: 'Reflection pool with stepping stones, surrounded by bamboo and tropical plants' },
    { url: "https://images.unsplash.com/photo-1610375233775-6e0166927193", alt: 'Tea ceremony room with low table, floor cushions, and traditional Japanese aesthetic' }],

    price: 900,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    size: 280,
    symbol: '🎯',
    color: '#2F4F2F',
    amenities: [
    'Private Meditation Pavilion',
    'Zen Garden with Koi Pond',
    'Minimalist Architecture',
    'Soundproof Practice Rooms',
    'Daily Mindfulness Sessions',
    'Tea Ceremony Space',
    'Archery Range',
    'Digital Detox Program',
    'Organic Vegetarian Cuisine',
    'Silent Retreat Options',
    'Yoga & Tai Chi Classes',
    'Personal Mindfulness Coach'],

    mythology: 'Arjuna, the third Pandava brother, was the greatest archer of his time and a master of focus and discipline. His ability to concentrate on a single target while blocking out all distractions was legendary. As Krishna\'s closest friend and disciple, Arjuna received the sacred teachings of the Bhagavad Gita on the battlefield of Kurukshetra. His dedication to perfection and unwavering focus made him invincible in battle. This villa channels his spirit of precision, offering guests a space for deep concentration and mindful practice.'
  },
  {
    id: '4',
    name: 'Villa Nakula',
    pandavaBrother: 'The Beautiful Twin',
    characteristic: 'Beauty & Harmony',
    description: 'Immerse yourself in aesthetic perfection and artistic inspiration. This villa celebrates beauty in all its forms, ideal for creative souls.',
    fullDescription: 'Villa Nakula embodies the essence of beauty and harmony, offering an aesthetically perfect retreat for those who appreciate art, design, and natural elegance. With curated art collections, a private gallery space, and architecture that celebrates Balinese artistic traditions, this villa provides inspiration and tranquility. Every detail is crafted to delight the senses and nurture creative expression.',
    image: "https://images.unsplash.com/photo-1640664652266-374d9d493c6b",
    alt: 'Elegant villa with artistic design, traditional Balinese sculptures, lush tropical gardens, lotus pond, and ornate carved wooden details',
    gallery: [
    { url: "https://img.rocket.new/generatedImages/rocket_gen_img_1661f124c-1768914263523.png", alt: 'Luxurious bedroom with carved wooden headboard, silk fabrics, traditional artwork, and garden views' },
    { url: "https://img.rocket.new/generatedImages/rocket_gen_img_176457753-1769668176385.png", alt: 'Art gallery room with curated Balinese paintings, sculptures, and ambient lighting' },
    { url: "https://images.unsplash.com/photo-1640664652266-374d9d493c6b", alt: 'Lotus pond with stone pathway, tropical flowers, and traditional Balinese statues' },
    { url: "https://images.unsplash.com/photo-1571631465552-06c0e476b1e7", alt: 'Open-air living pavilion with ornate carvings, comfortable seating, and artistic decor' },
    { url: "https://images.unsplash.com/photo-1691505429513-a30e45267462", alt: 'Infinity pool surrounded by frangipani trees, stone sculptures, and manicured gardens' },
    { url: "https://images.unsplash.com/photo-1630893173621-33f717488924", alt: 'Spa bathroom with flower petal bath, candles, and traditional Balinese design elements' }],

    price: 1100,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    size: 380,
    symbol: '🌸',
    color: '#DAA520',
    amenities: [
    'Private Art Gallery',
    'Curated Balinese Art Collection',
    'Artist Studio Space',
    'Lotus Pond & Gardens',
    'Traditional Dance Performances',
    'Batik & Painting Workshops',
    'Luxury Spa Treatments',
    'Gourmet Dining Experience',
    'Photography Sessions',
    'Flower Arrangement Classes',
    'Cultural Immersion Programs',
    'Personal Stylist Service'],

    mythology: 'Nakula, the fourth Pandava brother and elder of the twins, was renowned for his extraordinary beauty and grace. Skilled in horse training and Ayurvedic medicine, he possessed both physical perfection and healing knowledge. His gentle nature and artistic sensibility made him beloved by all. Nakula\'s devotion to his family and his appreciation for beauty in all forms reflected his harmonious spirit. This villa embodies his aesthetic excellence, offering guests a space where beauty and tranquility converge.'
  },
  {
    id: '5',
    name: 'Villa Sadewa',
    pandavaBrother: 'The Devoted Twin',
    characteristic: 'Devotion & Spirituality',
    description: 'Connect with the divine in this sacred sanctuary. Perfect for spiritual seekers and those on a journey of inner transformation.',
    fullDescription: 'Villa Sadewa channels the profound devotion and spiritual wisdom of the youngest Pandava, offering a sacred retreat for those seeking deep spiritual connection. With a private temple, ceremonial spaces, and daily spiritual practices, this villa provides an authentic pathway to inner transformation. The architecture honors traditional Balinese spiritual design while offering modern comfort for contemplative living.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16510743c-1765118921368.png",
    alt: 'Sacred villa with traditional Balinese temple architecture, stone carvings, ceremonial gates, incense offerings, and spiritual garden',
    gallery: [
    { url: "https://img.rocket.new/generatedImages/rocket_gen_img_13a67b06f-1769668174480.png", alt: 'Bedroom with traditional Balinese spiritual decor, prayer altar, carved wooden furniture, and peaceful ambiance' },
    { url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4a689cc-1769668175399.png", alt: 'Private temple pavilion with offerings, incense, traditional statues, and meditation cushions' },
    { url: "https://images.unsplash.com/photo-1704436272841-2d40ed319006", alt: 'Spiritual garden with stone pathways, sacred trees, prayer flags, and ceremonial spaces' },
    { url: "https://images.unsplash.com/photo-1616557400660-8d2b30086158", alt: 'Ceremonial bathing pool with traditional stone carvings and tropical plant surroundings' },
    { url: "https://images.unsplash.com/photo-1616317050896-e13201fae23c", alt: 'Yoga and meditation hall with high ceilings, natural ventilation, and serene atmosphere' },
    { url: "https://images.unsplash.com/photo-1672128558353-eee6ffe7b3e9", alt: 'Open-air dining pavilion with traditional Balinese architecture and valley views' }],

    price: 1000,
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 6,
    size: 360,
    symbol: '🙏',
    color: '#8B4513',
    amenities: [
    'Private Temple & Shrine',
    'Daily Spiritual Ceremonies',
    'Balinese Priest Consultations',
    'Sacred Water Purification',
    'Mantra Chanting Sessions',
    'Spiritual Healing Treatments',
    'Traditional Offerings Included',
    'Meditation & Prayer Spaces',
    'Astrology Readings',
    'Energy Cleansing Rituals',
    'Spiritual Library',
    'Pilgrimage Coordination'],

    mythology: 'Sadewa, the youngest of the Pandava brothers and Nakula\'s twin, was blessed with profound spiritual wisdom and knowledge of the scriptures. Skilled in astrology and spiritual sciences, he could foresee events and understand the deeper meanings of existence. His devotion to dharma and his spiritual insights guided his family through difficult times. Sadewa\'s gentle nature and deep faith made him a spiritual anchor for the Pandavas. This villa honors his devotional spirit, offering guests a sacred space for spiritual growth and divine connection.'
  }];


  useEffect(() => {
    if (isHydrated) {
      setFilteredVillas(mockVillas);
    }
  }, [isHydrated]);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...mockVillas];

    if (filters.characteristic !== 'all') {
      filtered = filtered.filter((villa) =>
      villa.characteristic.toLowerCase().includes(filters.characteristic)
      );
    }

    filtered = filtered.filter(
      (villa) =>
      villa.price >= filters.priceRange[0] && villa.price <= filters.priceRange[1]
    );

    if (filters.bedrooms > 0) {
      filtered = filtered.filter((villa) => villa.bedrooms >= filters.bedrooms);
    }

    if (filters.guests > 0) {
      filtered = filtered.filter((villa) => villa.maxGuests >= filters.guests);
    }

    setFilteredVillas(filtered);
  };

  const handleResetFilters = () => {
    setFilteredVillas(mockVillas);
  };

  const handleViewDetails = (villaId: string) => {
    const villa = mockVillas.find((v) => v.id === villaId);
    if (villa) {
      setSelectedVilla(villa);
      setIsModalOpen(true);
    }
  };

  const handleBook = (villaId: string) => {
    alert(`Booking initiated for villa: ${villaId}\n\nIn a production environment, this would redirect to the booking page with the selected villa pre-filled.`);
  };

  const handleQuizComplete = (result: string) => {
    setIsQuizOpen(false);
    const characteristicMap: {[key: string]: string;} = {
      wisdom: 'wisdom',
      strength: 'strength',
      focus: 'focus',
      beauty: 'beauty',
      devotion: 'devotion'
    };
    let filtered = mockVillas.filter((villa) =>
    villa.characteristic.toLowerCase().includes(characteristicMap[result])
    );
    setFilteredVillas(filtered);
  };

  const handleAddToComparison = (villaId: string) => {
    const villa = mockVillas.find((v) => v.id === villaId);
    if (villa && comparisonVillas.length < 3 && !comparisonVillas.find((v) => v.id === villaId)) {
      setComparisonVillas([...comparisonVillas, villa]);
    }
  };

  const handleRemoveFromComparison = (villaId: string) => {
    setComparisonVillas(comparisonVillas.filter((v) => v.id !== villaId));
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredVillas];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'bedrooms':
        sorted.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'size':
        sorted.sort((a, b) => b.size - a.size);
        break;
      default:
        break;
    }

    setFilteredVillas(sorted);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white mb-4">
            Villa Collection
          </h1>
          <p className="font-body text-xl text-white/90 max-w-2xl">
            Discover your perfect sanctuary among the five legendary Pandava villas, each embodying unique characteristics of wisdom, strength, focus, beauty, and devotion.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Action Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-6 py-3 bg-accent text-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 hover:scale-105 flex items-center space-x-2">

              <Icon name="SparklesIcon" size={20} variant="solid" />
              <span>Find Your Villa</span>
            </button>
            
            {comparisonVillas.length > 0 &&
            <button
              onClick={() => setIsComparisonOpen(true)}
              className="px-6 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 flex items-center space-x-2">

                <Icon name="ScaleIcon" size={20} variant="outline" />
                <span>Compare ({comparisonVillas.length})</span>
              </button>
            }
          </div>

          <div className="flex items-center space-x-3">
            <label className="font-body text-sm text-muted-foreground">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">

              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bedrooms">Most Bedrooms</option>
              <option value="size">Largest Size</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-body text-base text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredVillas.length}</span> of{' '}
            <span className="font-semibold text-foreground">{mockVillas.length}</span> villas
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel onFilterChange={handleFilterChange} onReset={handleResetFilters} />
          </div>

          {/* Villa Grid */}
          <div className="lg:col-span-3">
            {filteredVillas.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredVillas.map((villa) =>
              <VillaCard
                key={villa.id}
                villa={villa}
                onViewDetails={handleViewDetails}
                onBook={handleBook} />

              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="HomeIcon" size={64} variant="outline" className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">
                  No Villas Found
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                onClick={handleResetFilters}
                className="px-6 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300">

                  Reset Filters
                </button>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Modals */}
      <VillaDetailModal
        villa={selectedVilla}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook} />


      {isQuizOpen &&
      <PersonalityQuiz
        onComplete={handleQuizComplete}
        onClose={() => setIsQuizOpen(false)} />

      }

      {isComparisonOpen &&
      <ComparisonTool
        villas={comparisonVillas}
        onClose={() => setIsComparisonOpen(false)}
        onBook={handleBook} />

      }
    </div>);

};

export default VillaCollectionInteractive;