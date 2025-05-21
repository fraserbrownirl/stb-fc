import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        {/* Future navigation links can go here */}
        {/* <nav className="flex items-center gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Contact</Button>
        </nav> */}
      </div>
    </header>
  );
}
