'use client';

import { useState, useEffect } from 'react';
import { Villa, VillaData } from '@/lib/global';
import VillaCard from './VillaCard';
import FilterPanel, { FilterState } from './FilterPanel';
import VillaDetailModal from './VillaDetailModal';
import PersonalityQuiz from './PersonalityQuiz';
import ComparisonTool from './ComparisonTool';
import Icon from '@/components/ui/AppIcon';

const VillaCollectionInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filteredVillas, setFilteredVillas] = useState<Villa[]>([]);
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [comparisonVillas, setComparisonVillas] = useState<Villa[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockVillas: Villa[] = VillaData;

  useEffect(() => {
    if (isHydrated) {
      setFilteredVillas(mockVillas);
    }
  }, [isHydrated]);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...mockVillas];

    if (filters.characteristic !== 'all') {
      filtered = filtered.filter((villa) =>
      villa.characteristic.toLowerCase().includes(filters.characteristic)
      );
    }

    filtered = filtered.filter(
      (villa) =>
      villa.price >= filters.priceRange[0] && villa.price <= filters.priceRange[1]
    );

    if (filters.bedrooms > 0) {
      filtered = filtered.filter((villa) => villa.bedrooms >= filters.bedrooms);
    }

    if (filters.guests > 0) {
      filtered = filtered.filter((villa) => villa.maxGuests >= filters.guests);
    }

    setFilteredVillas(filtered);
  };

  const handleResetFilters = () => {
    setFilteredVillas(mockVillas);
  };

  const handleViewDetails = (villaId: number) => {
    const villa = mockVillas.find((v) => v.id === villaId);
    if (villa) {
      setSelectedVilla(villa);
      setIsModalOpen(true);
    }
  };

  const handleBook = (villaId: number) => {
    alert(`Booking initiated for villa: ${villaId}\n\nIn a production environment, this would redirect to the booking page with the selected villa pre-filled.`);
  };

  const handleQuizComplete = (result: string) => {
    setIsQuizOpen(false);
    const characteristicMap: {[key: string]: string;} = {
      wisdom: 'wisdom',
      strength: 'strength',
      focus: 'focus',
      beauty: 'beauty',
      devotion: 'devotion'
    };
    let filtered = mockVillas.filter((villa) =>
    villa.characteristic.toLowerCase().includes(characteristicMap[result])
    );
    setFilteredVillas(filtered);
  };

  const handleAddToComparison = (villaId: number) => {
    const villa = mockVillas.find((v) => v.id === villaId);
    if (villa && comparisonVillas.length < 3 && !comparisonVillas.find((v) => v.id === villaId)) {
      setComparisonVillas([...comparisonVillas, villa]);
    }
  };

  const handleRemoveFromComparison = (villaId: number) => {
    setComparisonVillas(comparisonVillas.filter((v) => v.id !== villaId));
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredVillas];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'bedrooms':
        sorted.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'size':
        sorted.sort((a, b) => b.size - a.size);
        break;
      default:
        break;
    }

    setFilteredVillas(sorted);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-white mb-4">
            Villa Collection
          </h1>
          <p className="font-body text-xl text-white/90 max-w-2xl">
            Discover your perfect sanctuary among the five legendary Pandava villas, each embodying unique characteristics of wisdom, strength, focus, beauty, and devotion.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Action Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-6 py-3 bg-accent text-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 hover:scale-105 flex items-center space-x-2">

              <Icon name="SparklesIcon" size={20} variant="solid" />
              <span>Find Your Villa</span>
            </button>
            
            {comparisonVillas.length > 0 &&
            <button
              onClick={() => setIsComparisonOpen(true)}
              className="px-6 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300 flex items-center space-x-2">

                <Icon name="ScaleIcon" size={20} variant="outline" />
                <span>Compare ({comparisonVillas.length})</span>
              </button>
            }
          </div>

          <div className="flex items-center space-x-3">
            <label className="font-body text-sm text-muted-foreground">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">

              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="bedrooms">Most Bedrooms</option>
              <option value="size">Largest Size</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="font-body text-base text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredVillas.length}</span> of{' '}
            <span className="font-semibold text-foreground">{mockVillas.length}</span> villas
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel onFilterChange={handleFilterChange} onReset={handleResetFilters} />
          </div>

          {/* Villa Grid */}
          <div className="lg:col-span-3">
            {filteredVillas.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredVillas.map((villa) =>
              <VillaCard
                key={villa.id}
                villa={villa}
                onViewDetails={handleViewDetails}
                onBook={handleBook} />

              )}
              </div> :

            <div className="text-center py-16">
                <Icon name="HomeIcon" size={64} variant="outline" className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">
                  No Villas Found
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                onClick={handleResetFilters}
                className="px-6 py-3 bg-primary text-primary-foreground font-cta text-sm font-medium rounded-md hover:shadow-temple transition-all duration-300">

                  Reset Filters
                </button>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Modals */}
      <VillaDetailModal
        villa={selectedVilla}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBook={handleBook} />


      {isQuizOpen &&
      <PersonalityQuiz
        onComplete={handleQuizComplete}
        onClose={() => setIsQuizOpen(false)} />

      }

      {isComparisonOpen &&
      <ComparisonTool
        villas={comparisonVillas}
        onClose={() => setIsComparisonOpen(false)}
        onBook={handleBook} />

      }
    </div>);

};

export default VillaCollectionInteractive;