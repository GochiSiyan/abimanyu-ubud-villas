import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VillaCardProps {
  villa: {
    id: number;
    name: string;
    pandavaBrother: string;
    trait: string;
    description2: string;
    image: string;
    alt: string;
    price: number;
    available: boolean;
  };
  onLearnMore: (villaId: number) => void;
}

export default function VillaCard({ villa, onLearnMore }: VillaCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-gentle hover:shadow-temple transition-all duration-500 transform hover:-translate-y-2">
      {/* Villa Image */}
      <div className="relative h-80 overflow-hidden">
        <AppImage
          src={villa.image}
          alt={villa.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          {villa.available ? (
            <span className="px-3 py-1 bg-success text-success-foreground text-xs font-medium rounded-full">
              Available
            </span>
          ) : (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              Fully Booked
            </span>
          )}
        </div>

        {/* Mythological Symbol */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
          <span className="font-headline text-xl font-semibold text-accent-foreground">
            {villa.pandavaBrother.charAt(0)}
          </span>
        </div>
      </div>

      {/* Villa Details */}
      <div className="p-6 space-y-4">
        {/* Villa Name & Brother */}
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-1">
            {villa.name}
          </h3>
          <p className="font-accent text-sm text-primary uppercase tracking-widest">
            {villa.pandavaBrother} • {villa.trait}
          </p>
        </div>

        {/* Description */}
        <p className="font-body text-base text-muted-foreground leading-relaxed line-clamp-3">
          {villa.description2}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="font-accent text-xs text-muted-foreground uppercase tracking-wide">
              From
            </p>
            <p className="font-headline text-2xl font-semibold text-primary">
              ${villa.price.toLocaleString()}
              <span className="font-body text-sm text-muted-foreground font-normal">/night</span>
            </p>
          </div>
          <button
            onClick={() => onLearnMore(villa.id)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            Learn More
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </button>
        </div>
      </div>
    </div>
  );
}