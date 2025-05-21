import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

export function SolutionExplanationSection() {
  return (
    <section id="solution" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Target className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Elevate Engagement with GoalGuess
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          GoalGuess offers a cutting-edge 'Spot The Ball' contest solution, designed specifically for corporate clients like blockchain exchanges.
          We empower you to captivate football fanatics, boost brand visibility, and drive user interaction through thrilling, easy-to-integrate contests.
          Turn passion into participation with our secure and customizable platform.
        </p>
      </div>
    </section>
  );
}
