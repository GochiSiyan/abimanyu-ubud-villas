export interface Villa {
  id: number;
  name: string;
  pandavaBrother: string;
  pandavaBrotherAlias: string;
  characteristic: string;
  trait: string;
  description: string;
  description2: string;
  fullDescription: string;
  image: string;
  alt: string;
  gallery: Array<{url: string;alt: string;}>;
  price: number;
  available: boolean;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number;
  symbol: string;
  color: string;
  amenities: string[];
  mythology: string;
}

export const VillaData: Villa[] = [
  {
    id: 1,
    name: 'Villa Yudistira',
    pandavaBrotherAlias: 'The Eldest Pandava',
    pandavaBrother: "Yudistira",
    trait: "Wisdom",
    characteristic: 'Wisdom & Righteousness',
    description: 'Experience the tranquility of wisdom in this serene sanctuary designed for contemplation and learning. Perfect for those seeking intellectual and spiritual growth.',
    description2: "The eldest brother's villa embodies dharma and righteous wisdom. Featuring a meditation pavilion overlooking rice terraces, this sanctuary offers the perfect space for contemplation and spiritual growth.",
    fullDescription: 'Villa Yudistira embodies the essence of wisdom and righteousness, offering a peaceful retreat for those who seek knowledge and enlightenment. The villa features a private library, meditation spaces, and traditional Balinese architecture that encourages deep reflection and spiritual growth. Every corner of this villa is designed to inspire contemplation and foster a connection with ancient wisdom.',
    image: '/assets/images/villa/yudistira/cover.webp',
    alt: 'Luxurious Balinese villa with traditional architecture, wooden pillars, thatched roof, infinity pool overlooking lush green rice terraces at sunset',
    gallery: [
    { url: '/assets/images/villa/yudistira/cover.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/bed.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/outside.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/interior.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/front.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/front2.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/bath.webp', alt: '' },
    { url: '/assets/images/villa/yudistira/plang.webp', alt: '' }],

    price: 2000000,
    available: true,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    size: 144,
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
      'Cultural Workshop Space'
  ],

    mythology: 'Yudistira, the eldest of the Pandava brothers, was renowned for his unwavering commitment to truth and dharma. Known as Dharmaraja (King of Righteousness), he never spoke a lie and always chose the path of virtue, even in the face of great adversity. His wisdom guided his brothers through countless challenges, and his devotion to justice made him a beacon of moral integrity. This villa channels his spirit of wisdom, offering guests a space for deep contemplation and spiritual growth.'
  },
  {
    id: 2,
    name: 'Villa Bima',
    pandavaBrotherAlias: 'The Mighty Warrior',
    pandavaBrother: "Bima",
    trait: "Strength",
    characteristic: 'Strength & Courage',
    description: 'Embrace the power of strength in this bold and dynamic villa. Ideal for adventurers and those who seek physical and mental fortitude.',
    description2: "Inspired by the mighty warrior's courage, this villa features bold architecture and powerful design elements. The private gym and outdoor training area reflect Bima's legendary physical prowess.",
    fullDescription: 'Villa Bima captures the indomitable spirit of the mighty warrior, offering a powerful retreat for those who embrace strength and courage. With expansive outdoor spaces, a state-of-the-art fitness pavilion, and adventure-ready amenities, this villa is perfect for active travelers seeking both physical challenges and luxurious comfort. The bold architecture and dynamic design reflect Bima\'s fearless nature.',
    image: '/assets/images/villa/bima/cover.webp',
    alt: 'Modern luxury villa with bold architecture, large glass windows, outdoor fitness area, and dramatic mountain backdrop',
    gallery: [
    { url: '/assets/images/villa/bima/cover.webp', alt: 'Contemporary master suite with king bed, minimalist design, floor-to-ceiling windows, and mountain views' },
    { url: '/assets/images/villa/bima/bed.webp', alt: 'Outdoor fitness pavilion with yoga mats, weights, and panoramic jungle views' },
    { url: '/assets/images/villa/bima/outside.webp', alt: 'Large infinity pool with waterfall feature, sun loungers, and tropical landscaping' },
    { url: '/assets/images/villa/bima/interior.webp', alt: 'Open-plan living area with high ceilings, modern furniture, and natural stone accents' },
    { url: '/assets/images/villa/bima/bath.webp', alt: 'Outdoor dining terrace with long wooden table, ambient lighting, and forest backdrop' },
    { url: '/assets/images/villa/bima/front.webp', alt: '' },
    { url: '/assets/images/villa/bima/front2.webp', alt: '' },
    { url: '/assets/images/villa/bima/interior2.webp', alt: '' },
    { url: '/assets/images/villa/bima/bath2.webp', alt: '' },
    { url: '/assets/images/villa/bima/plang.webp', alt: 'Luxurious spa bathroom with rain shower, soaking tub, and natural stone walls' }],

    price: 1250000,
    available: true,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    size: 100,
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
    id: 3,
    name: 'Villa Arjuna',
    pandavaBrotherAlias: 'The Focused Archer',
    pandavaBrother: "Arjuna",
    trait: "Focus",
    characteristic: 'Focus & Precision',
    description: 'Find your center in this minimalist sanctuary designed for concentration and mindfulness. Perfect for those seeking clarity and purpose.',
    description2: "The master archer's precision and concentration inspire this villa's design. Clean lines, minimalist aesthetics, and a dedicated workspace create an environment of perfect focus and clarity.",
    fullDescription: 'Villa Arjuna reflects the legendary archer\'s unwavering focus and precision, offering a minimalist retreat designed for concentration and mindfulness. With dedicated meditation spaces, a tranquil zen garden, and architecture that eliminates distractions, this villa provides the perfect environment for those seeking clarity, purpose, and deep inner work. Every element is carefully curated to support focused practice and mental discipline.',
    image: '/assets/images/villa/arjuna/cover.webp',
    alt: 'Minimalist zen villa with clean lines, white walls, meditation garden with raked gravel, bamboo accents, and serene water features',
    gallery: [
    { url: '/assets/images/villa/arjuna/cover.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/bed.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/outside.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/outside2.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/outside3.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/kura.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/interior.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/interior2.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/bath.webp', alt: '' },
    { url: '/assets/images/villa/arjuna/plang.webp', alt: '' }],

    price: 1250000,
    available: true,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    size: 100,
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
    id: 4,
    name: 'Villa Nakula',
    pandavaBrotherAlias: 'The Beautiful Twin',
    pandavaBrother: "Nakula",
    trait: "Beauty",
    characteristic: 'Beauty & Harmony',
    description: 'Immerse yourself in aesthetic perfection and artistic inspiration. This villa celebrates beauty in all its forms, ideal for creative souls.',
    description2: "Celebrating the handsome twin's appreciation for aesthetics, this villa showcases exquisite Balinese artistry. Every detail reflects refined taste and cultural beauty.",
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

    price: 1000000,
    available: true,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    size: 84,
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
    id: 5,
    name: 'Villa Sadewa',
    pandavaBrotherAlias: 'The Devoted Twin',
    pandavaBrother: "Sadewa",
    trait: "Devotion",
    characteristic: 'Devotion & Spirituality',
    description: 'Connect with the divine in this sacred sanctuary. Perfect for spiritual seekers and those on a journey of inner transformation.',
    description2: "The youngest brother's spiritual devotion manifests in this villa's sacred spaces. A private temple, healing garden, and ceremonial areas honor Balinese spiritual traditions.",
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

    price: 1000000,
    available: true,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    size: 84,
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
  }
];