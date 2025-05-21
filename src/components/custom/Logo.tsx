import { Goal, Focus } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="GoalGuess Home">
      <div className="p-2 bg-primary rounded-full group-hover:bg-primary/90 transition-colors">
        <Goal className="h-6 w-6 text-primary-foreground" />
      </div>
      {/* <Focus className="h-8 w-8 text-primary group-hover:text-primary/90 transition-colors" /> */}
      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        GoalGuess
      </span>
    </Link>
  );
}
