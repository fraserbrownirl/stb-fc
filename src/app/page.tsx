
import { Header } from '@/components/custom/Header';
import { SolutionExplanationSection } from '@/components/custom/SolutionExplanationSection';
import { GamePreviewSection } from '@/components/custom/GamePreviewSection';
import { TeamSection } from '@/components/custom/TeamSection';
import { ContactUsSection } from '@/components/custom/ContactUsSection';
import { Footer } from '@/components/custom/Footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 text-center bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="absolute inset-0 opacity-5 overflow-hidden">
            {/* Add a subtle background pattern or image if desired */}
            {/* <Image src="/path/to/stadium-pattern.svg" layout="fill" objectFit="cover" alt="background pattern" /> */}
          </div>
          <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="block">The Ultimate</span>
              <span className="block text-primary">Spot The Ball Solution</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8">
              Engage your audience, amplify your brand, and score big with GoalGuess – the premier contest platform for football fanatics and forward-thinking businesses.
            </p>
            <div className="mt-8 md:mt-10 flex justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="#solution">Learn More <ArrowDown className="ml-2 h-5 w-5"/></a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="#contact-us">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>

        <SolutionExplanationSection />
        <GamePreviewSection />
        <TeamSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
