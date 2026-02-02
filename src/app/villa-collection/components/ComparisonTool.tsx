'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Villa {
  id: number;
  name: string;
  pandavaBrotherAlias: string;
  characteristic: string;
  image: string;
  alt: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  size: number;
  amenities: string[];
}

interface ComparisonToolProps {
  villas: Villa[];
  onClose: () => void;
  onBook: (villaId: number) => void;
}

const ComparisonTool = ({ villas, onClose, onBook }: ComparisonToolProps) => {
  if (villas.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-card rounded-lg shadow-temple overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/90 rounded-full hover:bg-muted transition-colors duration-300 backdrop-blur-sm"
          aria-label="Close comparison"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="font-headline text-3xl font-semibold text-foreground">
            Compare Villas
          </h2>
          <p className="font-body text-base text-muted-foreground mt-2">
            Side-by-side comparison of selected villas
          </p>
        </div>

        {/* Comparison Content */}
        <div className="overflow-x-auto max-h-[calc(90vh-120px)]">
          <div className="min-w-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {villas.map((villa) => (
                <div key={villa.id} className="bg-muted rounded-lg overflow-hidden">
                  {/* Villa Image */}
                  <div className="relative h-48">
                    <AppImage
                      src={villa.image}
                      alt={villa.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Villa Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-foreground mb-1">
                        {villa.name}
                      </h3>
                      <p className="font-accent text-sm text-accent uppercase tracking-widest">
                        {villa.pandavaBrotherAlias}
                      </p>
                    </div>

                    <div className="inline-block px-4 py-2 bg-card rounded-full">
                      <p className="font-body text-sm text-primary font-medium">
                        {villa.characteristic}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-border">
                      <p className="font-accent text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Price per Night
                      </p>
                      <p className="font-headline text-2xl font-semibold text-primary">
                        ${villa.price}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Bedrooms</span>
                        <span className="font-body text-sm font-medium text-foreground">{villa.bedrooms}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Bathrooms</span>
                        <span className="font-body text-sm font-medium text-foreground">{villa.bathrooms}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Max Guests</span>
                        <span className="font-body text-sm font-medium text-foreground">{villa.maxGuests}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-sm text-muted-foreground">Size</span>
                        <span className="font-body text-sm font-medium text-foreground">{villa.size} m²</span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-sm font-medium text-foreground mb-3">
                        Key Amenities
                      </p>
                      <div className="space-y-2">
                        {villa.amenities.slice(0, 5).map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0" />
                            <span className="font-body text-xs text-muted-foreground">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={() => onBook(villa.id)}
                      className="w-full mt-4 px-4 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Icon name="CalendarIcon" size={18} variant="solid" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;