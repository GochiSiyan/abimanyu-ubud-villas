import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Abimanyu Ubud Villas - Where Mythology Meets Luxury',
  description: 'Experience mythical serenity at Abimanyu Ubud Villas. Five legendary villas inspired by the Pandava brothers, offering authentic Balinese culture wrapped in contemporary luxury in the heart of Ubud.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HomepageInteractive />
      </main>
    </>
  );
}