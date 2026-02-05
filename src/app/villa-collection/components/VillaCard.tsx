'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VillaCardProps {
  villa: {
    id: number;
    name: string;
    pandawaBrotherAlias: string;
    characteristic: string;
    description: string;
    image: string;
    alt: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
    size: number;
    symbol: string;
    color: string;
  };
  onViewDetails: (villaId: number) => void;
  onBook: (villaId: number) => void;
}

const VillaCard = ({ villa, onViewDetails, onBook }: VillaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-card rounded-lg overflow-hidden shadow-gentle hover:shadow-temple transition-all duration-500 border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Villa Image */}
      <div className="relative h-80 overflow-hidden">
        <AppImage
          src={villa.image}
          alt={villa.alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Villa Symbol Overlay */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-3xl">{villa.symbol}</span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-primary/95 text-primary-foreground px-4 py-2 rounded-md backdrop-blur-sm">
          <p className="text-sm font-accent uppercase tracking-wider">From</p>
          <p className="text-2xl font-headline font-semibold">Rp. {villa.price.toLocaleString('id-ID')}</p>
          <p className="text-xs font-accent opacity-90">per night</p>
        </div>
      </div>

      {/* Villa Content */}
      <div className="p-6">
        {/* Villa Name & Brother */}
        <div className="mb-4">
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-1">
            {villa.name}
          </h3>
          <p className="font-accent text-sm text-accent uppercase tracking-widest">
            {villa.pandawaBrotherAlias}
          </p>
        </div>

        {/* Characteristic Badge */}
        <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full">
          <p className="font-body text-sm text-primary font-medium">
            {villa.characteristic}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {villa.description}
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <Icon name="HomeIcon" size={20} variant="outline" className="text-primary" />
            <span className="font-body text-sm text-foreground">{villa.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="UserGroupIcon" size={20} variant="outline" className="text-primary" />
            <span className="font-body text-sm text-foreground">{villa.maxGuests} Guests</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="SparklesIcon" size={20} variant="outline" className="text-primary" />
            <span className="font-body text-sm text-foreground">{villa.bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Square3Stack3DIcon" size={20} variant="outline" className="text-primary" />
            <span className="font-body text-sm text-foreground">{villa.size} m²</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(villa.id)}
            className="flex-1 px-4 py-3 bg-muted text-foreground font-body text-sm font-medium rounded-md hover:bg-muted/80 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="EyeIcon" size={18} variant="outline" />
            <span>View Details</span>
          </button>
          <button
            onClick={() => onBook(villa.id)}
            className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Icon name="CalendarIcon" size={18} variant="solid" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;