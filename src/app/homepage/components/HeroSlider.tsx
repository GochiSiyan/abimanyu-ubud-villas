"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const slides = [
  { id: 1, src: 'https://images.unsplash.com/photo-1613031708406-216926a100bf' },
  { id: 2, src: '/assets/images/abimanyu/lobby.webp' },
  { id: 2, src: '/assets/images/abimanyu/lobby2.webp' },
  { id: 2, src: '/assets/images/abimanyu/lobby3.webp' },
  { id: 2, src: '/assets/images/abimanyu/lobby4.webp' },
  { id: 2, src: '/assets/images/abimanyu/court.webp' },
  { id: 2, src: '/assets/images/abimanyu/court2.webp' },
  { id: 3, src: '/assets/images/abimanyu/mancur.webp' },
  { id: 4, src: '/assets/images/abimanyu/mancur2.webp' },
  { id: 4, src: '/assets/images/abimanyu/mancur3.webp' },
  { id: 4, src: '/assets/images/abimanyu/mancur4.webp' },
  { id: 5, src: '/assets/images/abimanyu/pool.webp' },
  { id: 6, src: '/assets/images/abimanyu/pool2.webp' },
  { id: 6, src: '/assets/images/abimanyu/pool3.webp' },
  { id: 6, src: '/assets/images/abimanyu/pool4.webp' },
  { id: 7, src: '/assets/images/abimanyu/shower.webp' },
  { id: 8, src: '/assets/images/abimanyu/temple.webp' },
];

export default function HeroSlider() {
  // 1. Initialize Embla with Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-[100vh]">
            <Image 
              src={slide.src} 
              alt="" 
              fill 
              priority // Important: Loads the hero image immediately
              className="object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}