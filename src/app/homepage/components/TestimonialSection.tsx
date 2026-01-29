import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Guest Transformations
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from travelers who discovered their own legend at Abimanyu Ubud Villas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg p-6 shadow-gentle hover:shadow-temple transition-all duration-300 space-y-4"
            >
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name="StarIcon"
                    size={20}
                    variant={index < testimonial.rating ? 'solid' : 'outline'}
                    className={index < testimonial.rating ? 'text-accent' : 'text-muted-foreground'}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="font-body text-base text-foreground leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Guest Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <AppImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-headline text-base font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-accent text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.villa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}