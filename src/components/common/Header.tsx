'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface NavigationItem {
  name: string;
  href: string;
  description: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/homepage',
      description: 'Begin your mythological journey',
    },
    {
      name: 'Villa Collection',
      href: '/villa-collection',
      description: 'Discover the Pandawa villas',
    },
  ];

  const isActivePath = (href: string) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-temple">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            href="/homepage" 
            className="flex items-center space-x-3 group transition-all duration-300"
            onClick={closeMobileMenu}
          >
            <div className="relative">
              <AppImage
                src="assets/images/logo.png"
                alt=""
                className='w-12'
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-2xl font-semibold text-primary tracking-wide">
                Abimanyu
              </span>
              <span className="font-accent text-xs text-muted-foreground tracking-widest uppercase">
                Ubud Villas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-6 py-3 font-body text-base font-medium rounded-md
                  transition-all duration-300 ease-in-out
                  ${
                    isActivePath(item.href)
                      ? 'text-primary bg-muted' :'text-foreground hover:text-primary hover:bg-muted/50'
                  }
                  group
                `}
              >
                <span className="relative z-10">{item.name}</span>
                {isActivePath(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-accent rounded-full" />
                )}
                <span className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-accent/20 transition-all duration-300" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/villa-collection"
              className="ml-4 px-6 py-3 bg-primary text-primary-foreground font-cta text-base font-medium rounded-md shadow-gentle hover:shadow-temple transition-all duration-300 hover:scale-105"
            >
              Begin Your Journey
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={28} 
              variant="outline"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    block px-4 py-3 rounded-md font-body text-base font-medium
                    transition-all duration-300
                    ${
                      isActivePath(item.href)
                        ? 'text-primary bg-muted border-l-4 border-accent' :'text-foreground hover:text-primary hover:bg-muted/50 border-l-4 border-transparent'
                    }
                  `}
                >
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-muted-foreground mt-1 font-accent">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="/villa-collection"
                onClick={closeMobileMenu}
                className="block mt-4 px-4 py-3 bg-primary text-primary-foreground text-center font-cta text-base font-medium rounded-md shadow-gentle"
              >
                Begin Your Journey
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;