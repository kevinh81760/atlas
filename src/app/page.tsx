import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Demo } from '@/components/landing/Demo';
import { Features } from '@/components/landing/Features';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
