import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export function GamePreviewSection() {
  return (
    <section id="game-preview" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience the Thrill
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See our 'Spot The Ball' game in action. A captivating experience for any football fan.
          </p>
        </div>
        <div className="relative aspect-[16/9] w-full max-w-screen-xl mx-auto rounded-lg overflow-hidden shadow-2xl group">
          <Image
            src="https://placehold.co/1200x675.png" 
            alt="Spot The Ball game preview"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="football stadium action"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Demo (Conceptual)
            </Button>
          </div>
        </div>
         <p className="mt-6 text-center text-sm text-muted-foreground">
            Imagine your brand here, engaging thousands of users.
          </p>
      </div>
    </section>
  );
}
