'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AppImage
                src="assets/images/logo.png"
                alt=""
                className='w-12'
              />
              <div>
                <p className="font-headline text-xl font-semibold">Abimanyu</p>
                <p className="font-accent text-xs uppercase tracking-widest">Ubud Villas</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              Where mythology meets luxury in the heart of Ubud. Experience authentic Balinese culture wrapped in contemporary comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/homepage" className="font-body text-sm text-white/80 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/villa-collection" className="font-body text-sm text-white/80 hover:text-accent transition-colors duration-300">
                  Villa Collection
                </Link>
              </li>
              <li>
                <Link href="/villa-collection" className="font-body text-sm text-white/80 hover:text-accent transition-colors duration-300">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/villa-collection" className="font-body text-sm text-white/80 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={18} variant="outline" className="text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/80">
                  Jalan Raya Ubud, Gianyar, Bali 80571, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={18} variant="outline" className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-white/80">+62 361 975 XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={18} variant="outline" className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-white/80">stay@abimanyuubud.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex items-center gap-3 mb-6">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Icon name="GlobeAltIcon" size={20} variant="outline" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Icon name="CameraIcon" size={20} variant="outline" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Icon name="ChatBubbleLeftIcon" size={20} variant="outline" />
              </button>
            </div>
            <p className="font-body text-sm text-white/80 mb-3">
              Subscribe to our cultural newsletter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors duration-300">
                <Icon name="PaperAirplaneIcon" size={18} variant="outline" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/60">
              &copy; {currentYear} Abimanyu Ubud Villas. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/villa-collection" className="font-body text-sm text-white/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/villa-collection" className="font-body text-sm text-white/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/villa-collection" className="font-body text-sm text-white/60 hover:text-accent transition-colors duration-300">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}