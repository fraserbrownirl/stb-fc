
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactUsSection() {
  return (
    <section id="contact-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-3 h-6 w-6 text-primary" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For general inquiries, support, or partnership opportunities, please email us at:
              </p>
              <a
                href="mailto:contact@goalguess.com"
                className="text-primary hover:underline font-medium text-lg mt-2 block"
              >
                contact@goalguess.com
              </a>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-3 h-6 w-6 text-primary" />
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Speak to a member of our team directly. Our lines are open Monday to Friday, 9 AM - 5 PM.
              </p>
              <a
                href="tel:+1234567890"
                className="text-primary hover:underline font-medium text-lg mt-2 block"
              >
                +1 (234) 567-890
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                        <MapPin className="mr-3 h-6 w-6 text-primary" />
                        Our Office
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        GoalGuess Headquarters
                        <br />
                        123 Football Lane, Soccer City, World
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
