import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Experience {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

interface UbudExperienceSectionProps {
  experiences: Experience[];
}

export default function UbudExperienceSection({ experiences }: UbudExperienceSectionProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Immerse in Ubud
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond luxury accommodation, discover authentic Balinese culture through curated experiences that connect you with the spiritual heart of Ubud.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-gentle hover:shadow-temple transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <AppImage
                    src={experience.image}
                    alt={experience.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={experience.icon as any} size={24} variant="outline" className="text-accent" />
                  </div>
                  <h3 className="font-headline text-2xl font-semibold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {experience.description}
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