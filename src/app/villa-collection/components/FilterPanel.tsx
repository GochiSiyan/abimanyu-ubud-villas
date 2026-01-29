'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterPanelProps {
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
}

export interface FilterState {
  characteristic: string;
  priceRange: [number, number];
  bedrooms: number;
  guests: number;
}

const FilterPanel = ({ onFilterChange, onReset }: FilterPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    characteristic: 'all',
    priceRange: [0, 2000],
    bedrooms: 0,
    guests: 0,
  });

  const characteristics = [
    { value: 'all', label: 'All Villas' },
    { value: 'wisdom', label: 'Wisdom' },
    { value: 'strength', label: 'Strength' },
    { value: 'focus', label: 'Focus' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'devotion', label: 'Devotion' },
  ];

  const handleCharacteristicChange = (value: string) => {
    const newFilters = { ...filters, characteristic: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number, index: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange] as [number, number];
    newPriceRange[index] = value;
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBedroomsChange = (value: number) => {
    const newFilters = { ...filters, bedrooms: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleGuestsChange = (value: number) => {
    const newFilters = { ...filters, guests: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      characteristic: 'all',
      priceRange: [0, 2000],
      bedrooms: 0,
      guests: 0,
    };
    setFilters(resetFilters);
    onReset();
  };

  return (
    <div className="bg-card rounded-lg shadow-gentle border border-border overflow-hidden">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="AdjustmentsHorizontalIcon" size={24} variant="outline" className="text-primary" />
          <h3 className="font-headline text-xl font-semibold text-foreground">
            Filter Villas
          </h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
          aria-label="Toggle filters"
        >
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            variant="outline"
            className="text-foreground"
          />
        </button>
      </div>

      {/* Filter Content */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Characteristic Filter */}
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Villa Characteristic
            </label>
            <div className="grid grid-cols-2 gap-2">
              {characteristics.map((char) => (
                <button
                  key={char.value}
                  onClick={() => handleCharacteristicChange(char.value)}
                  className={`px-4 py-2 rounded-md font-body text-sm font-medium transition-all duration-300 ${
                    filters.characteristic === char.value
                      ? 'bg-primary text-primary-foreground shadow-gentle'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {char.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Price Range (per night)
            </label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">
                  ${filters.priceRange[0]}
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  ${filters.priceRange[1]}
                </span>
              </div>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
                  className="w-full accent-primary"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
                  className="w-full accent-primary"
                />
              </div>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Minimum Bedrooms
            </label>
            <div className="flex space-x-2">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => handleBedroomsChange(num)}
                  className={`flex-1 px-3 py-2 rounded-md font-body text-sm font-medium transition-all duration-300 ${
                    filters.bedrooms === num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {num === 0 ? 'Any' : num}
                </button>
              ))}
            </div>
          </div>

          {/* Guests Filter */}
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-3">
              Number of Guests
            </label>
            <div className="flex space-x-2">
              {[0, 2, 4, 6, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => handleGuestsChange(num)}
                  className={`flex-1 px-3 py-2 rounded-md font-body text-sm font-medium transition-all duration-300 ${
                    filters.guests === num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {num === 0 ? 'Any' : `${num}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="w-full px-4 py-3 bg-muted text-foreground font-body text-sm font-medium rounded-md hover:bg-muted/80 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Icon name="ArrowPathIcon" size={18} variant="outline" />
            <span>Reset Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;