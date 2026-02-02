'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VillaDetailModalProps {
  villa: {
    id: number;
    name: string;
    pandavaBrotherAlias: string;
    characteristic: string;
    description: string;
    fullDescription: string;
    image: string;
    alt: string;
    gallery: Array<{ url: string; alt: string }>;
    price: number;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
    size: number;
    symbol: string;
    color: string;
    amenities: string[];
    mythology: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (villaId: number) => void;
}

const VillaDetailModal = ({ villa, isOpen, onClose, onBook }: VillaDetailModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !villa) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg shadow-temple overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/90 rounded-full hover:bg-muted transition-colors duration-300 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-96">
            <AppImage
              src={villa.image}
              alt={villa.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Villa Symbol */}
            <div className="absolute top-6 left-6 w-20 h-20 bg-accent/95 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl">{villa.symbol}</span>
            </div>

            {/* Villa Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="font-headline text-4xl font-semibold text-white mb-2">
                {villa.name}
              </h2>
              <p className="font-accent text-lg text-accent uppercase tracking-widest">
                {villa.pandavaBrotherAlias}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Characteristic Badge */}
            <div className="inline-block mb-6 px-6 py-3 bg-muted rounded-full">
              <p className="font-body text-base text-primary font-medium">
                {villa.characteristic}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                About This Villa
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {villa.fullDescription}
              </p>
            </div>

            {/* Mythology Story */}
            <div className="mb-8 p-6 bg-muted rounded-lg border-l-4 border-accent">
              <h3 className="font-headline text-xl font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Icon name="BookOpenIcon" size={24} variant="outline" className="text-accent" />
                <span>Mythological Significance</span>
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {villa.mythology}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                Villa Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Icon name="HomeIcon" size={32} variant="outline" className="text-primary mb-2" />
                  <span className="font-body text-lg font-semibold text-foreground">{villa.bedrooms}</span>
                  <span className="font-body text-sm text-muted-foreground">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Icon name="SparklesIcon" size={32} variant="outline" className="text-primary mb-2" />
                  <span className="font-body text-lg font-semibold text-foreground">{villa.bathrooms}</span>
                  <span className="font-body text-sm text-muted-foreground">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Icon name="UserGroupIcon" size={32} variant="outline" className="text-primary mb-2" />
                  <span className="font-body text-lg font-semibold text-foreground">{villa.maxGuests}</span>
                  <span className="font-body text-sm text-muted-foreground">Max Guests</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Icon name="Square3Stack3DIcon" size={32} variant="outline" className="text-primary mb-2" />
                  <span className="font-body text-lg font-semibold text-foreground">{villa.size}</span>
                  <span className="font-body text-sm text-muted-foreground">Square Meters</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {villa.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-md">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                    <span className="font-body text-sm text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
                Villa Gallery
              </h3>
              <div className="grid grid-cols md:grid-cols-3 gap-4">
                {villa.gallery.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden group">
                    <AppImage
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Section */}
            <div className="flex items-center justify-between p-6 bg-muted rounded-lg">
              <div>
                <p className="font-accent text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  Starting From
                </p>
                <p className="font-headline text-3xl font-semibold text-primary">
                  Rp. {villa.price.toLocaleString('id-ID')}
                  <span className="font-body text-base text-muted-foreground ml-2">per night</span>
                </p>
              </div>
              <button
                onClick={() => onBook(villa.id)}
                className="px-8 py-4 bg-primary text-primary-foreground font-cta text-base font-medium rounded-md hover:shadow-temple transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Icon name="CalendarIcon" size={20} variant="solid" />
                <span>Book This Villa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetailModal;