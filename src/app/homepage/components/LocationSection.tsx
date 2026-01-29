export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-foreground">
              Your Sanctuary in Ubud's Heart
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nestled among emerald rice terraces and sacred temples, Abimanyu Ubud Villas offers the perfect balance of cultural immersion and serene privacy. Just minutes from Ubud's vibrant art markets and spiritual centers, yet worlds away in tranquility.
            </p>
            
            {/* Location Highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    5 minutes to Ubud Palace
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Experience traditional Balinese dance performances and royal heritage
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    10 minutes to Tegallalang Rice Terraces
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Witness UNESCO-recognized subak irrigation system and stunning landscapes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    15 minutes to Sacred Monkey Forest
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Connect with nature and ancient temple sanctuaries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-temple">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Abimanyu Ubud Villas Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-8.5069,115.2625&z=14&output=embed"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}