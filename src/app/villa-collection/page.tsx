import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import VillaCollectionInteractive from './components/VillaCollectionInteractive';

export const metadata: Metadata = {
  title: 'Villa Collection - Abimanyu Ubud Villas',
  description: 'Explore our collection of five legendary Pandava villas in Ubud, each embodying unique characteristics of wisdom, strength, focus, beauty, and devotion. Find your perfect sanctuary for a transformative Balinese experience.',
};

export default function VillaCollectionPage() {
  return (
    <>
      <Header />
      <main>
        <VillaCollectionInteractive />
      </main>
    </>
  );
}