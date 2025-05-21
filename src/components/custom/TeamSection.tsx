import { TeamMemberCard } from './TeamMemberCard';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Lead Architect & Blockchain Specialist',
    description: 'Alex brings over a decade of experience in software architecture and blockchain technology, ensuring our platform is secure, scalable, and cutting-edge. He is passionate about decentralized solutions.',
    imageUrl: 'https://placehold.co/200x200.png',
    linkedinUrl: 'https://linkedin.com/in/alexchen-dev',
    imageHint: 'professional portrait asian male'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Head of Product & UX/UI Design',
    description: 'Maria is a visionary product leader with a keen eye for user experience. She translates complex technical capabilities into intuitive and engaging interfaces for football fans and corporate clients alike.',
    imageUrl: 'https://placehold.co/200x200.png',
    linkedinUrl: 'https://linkedin.com/in/mariarodriguez-ux',
    imageHint: 'professional portrait latina female'
  },
  {
    name: 'Sam Adebayo',
    role: 'Senior Full-Stack Engineer',
    description: 'Sam is a versatile full-stack engineer with expertise in building robust web applications. His problem-solving skills and dedication to quality drive the core functionality of GoalGuess.',
    imageUrl: 'https://placehold.co/200x200.png',
    linkedinUrl: 'https://linkedin.com/in/samadebayo-eng',
    imageHint: 'professional portrait black male'
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="flex justify-center mb-6">
            <Users className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The driving force behind GoalGuess. Dedicated to delivering excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
              linkedinUrl={member.linkedinUrl}
              imageHint={member.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
