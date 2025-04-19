
import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronRight, Users, LayoutDashboard, Settings } from 'lucide-react';

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fusion-primary/20 via-background to-background"></div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                  Welcome to <span className="gradient-text">Fusion Network</span>
                </h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  Empowering businesses with cutting-edge technology solutions to thrive in the digital age.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg btn-glow">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-fusion-primary" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-fusion-primary" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-fusion-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="mx-auto md:mx-0 relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-fusion-primary to-fusion-secondary blur-lg opacity-50"></div>
              <div className="relative aspect-video w-full max-w-[600px] rounded-xl overflow-hidden bg-fusion-dark/80 p-6 shadow-xl">
                <div className="absolute top-2 left-2 flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-full w-full rounded-md bg-fusion-dark flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-float">
                      <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-r from-fusion-primary to-fusion-secondary flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">FN</span>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Experience the power of Fusion Network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of services to help businesses transform and grow in the digital landscape.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom business solutions tailored to your specific needs and objectives.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services/business">
                  <Button variant="link" className="p-0">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 mb-4">
                  <LayoutDashboard className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform your business with cutting-edge digital solutions and strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services/digital-transformation">
                  <Button variant="link" className="p-0">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Technical Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert technical solutions to solve complex challenges and improve efficiency.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/services/technical">
                  <Button variant="link" className="p-0">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've helped businesses across various industries achieve their goals. Here's what they have to say.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-muted rounded-xl p-6 relative">
                <div className="absolute top-6 right-6 text-4xl text-primary/10 font-serif">"</div>
                <p className="text-muted-foreground mb-4">{testimonial.comment}</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Join thousands of businesses that have transformed their operations with Fusion Network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-bg btn-glow">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Testimonial data
const testimonials = [
  {
    comment: "Fusion Network has transformed the way we operate. Their solutions have improved our efficiency by 40% and reduced costs significantly.",
    name: "Sarah Johnson",
    title: "CTO, TechCorp"
  },
  {
    comment: "We've been working with Fusion Network for over 2 years and they've consistently delivered exceptional results. Highly recommended!",
    name: "Michael Chen",
    title: "CEO, Innovate Inc."
  },
  {
    comment: "The team at Fusion Network understood our unique challenges and delivered a solution that perfectly met our needs. Outstanding service!",
    name: "Jessica Williams",
    title: "Operations Director, GlobalTech"
  }
];

export default Index;
