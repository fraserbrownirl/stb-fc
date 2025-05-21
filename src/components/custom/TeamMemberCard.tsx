import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  linkedinUrl: string;
  imageHint: string;
}

export function TeamMemberCard({ name, role, description, imageUrl, linkedinUrl, imageHint }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <CardHeader className="items-center text-center">
        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
          <AvatarImage src={imageUrl} alt={name} data-ai-hint={imageHint} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{name}</CardTitle>
        <p className="text-sm text-primary">{role}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline" size="sm" asChild>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${name}`}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
