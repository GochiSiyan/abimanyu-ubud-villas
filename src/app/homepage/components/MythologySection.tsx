import AppImage from '@/components/ui/AppImage';

interface MythologyItem {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface MythologySectionProps {
  items: MythologyItem[];
}

export default function MythologySection({ items }: MythologySectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle cx="30" cy="30" r="28" stroke="var(--color-accent)" strokeWidth="2" fill="none" />
              <path d="M30 10L35 25L50 30L35 35L30 50L25 35L10 30L25 25L30 10Z" fill="var(--color-primary)" />
            </svg>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            The Pandava Legacy
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five legendary brothers, five extraordinary villas. Each villa embodies the unique virtues and spirit of the noble Pandava warriors from the ancient Mahabharata epic.
          </p>
        </div>

        {/* Mythology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-gentle hover:shadow-temple transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="font-headline text-lg font-semibold text-accent-foreground">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-headline text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}