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
                    14 mins to Tirta Empul Temple
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    15 mins to Suwat Waterfall
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    15 mins to Alas Harum Bali
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    20 mins to Ubud Center
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    20 mins Campuhan Ridge Walk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    20 mins Monkey Forest Ubud
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    25 mins to Bali Zoo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    30 mins to Denpasar Downtown
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    45 mins to Airport
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-headline text-base font-semibold text-foreground">
                    5 mins to International School
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1997496797126!2d115.29520271174665!3d-8.479948991525848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd219dc3568862f%3A0xf02299c899a4af5b!2sAbimanyu%20Ubud%20Villas!5e0!3m2!1sen!2sid!4v1770103345776!5m2!1sen!2sid"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}