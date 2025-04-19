
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  HeadphonesIcon, 
  HelpCircleIcon, 
  BookIcon, 
  MessageSquareIcon, 
  ShieldIcon,
  AlertCircleIcon,
  UserIcon,
  ServerIcon,
  ShoppingBagIcon,
  HeartIcon
} from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const Support = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your support ticket has been submitted!', {
      description: 'We will get back to you within 24 hours.'
    });
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text minecraft-text">Support Center</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get help with any issues you encounter on Fusion Network. Our support team is here to help!
          </p>
        </div>

        {/* Support Options */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="minecraft-border bg-black/40 hover:shadow-[0_0_15px_rgba(68,166,117,0.4)] transition-all duration-300">
              <CardHeader className="text-center">
                <HeadphonesIcon className="w-12 h-12 mx-auto text-[#44A675] mb-4" />
                <CardTitle>Live Support</CardTitle>
                <CardDescription>Talk to our support team directly</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-6">Available 10AM - 10PM EST every day</p>
                <Button className="w-full bg-gradient-to-r from-[#44A675] to-[#3B82F6]">
                  Join Discord Support
                </Button>
              </CardContent>
            </Card>

            <Card className="minecraft-border bg-black/40 hover:shadow-[0_0_15px_rgba(68,166,117,0.4)] transition-all duration-300">
              <CardHeader className="text-center">
                <HelpCircleIcon className="w-12 h-12 mx-auto text-[#44A675] mb-4" />
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>Find answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-6">Browse our extensive FAQ and guides</p>
                <Button variant="outline" className="w-full border-[#44A675] text-[#44A675]">
                  Browse Articles
                </Button>
              </CardContent>
            </Card>

            <Card className="minecraft-border bg-black/40 hover:shadow-[0_0_15px_rgba(68,166,117,0.4)] transition-all duration-300">
              <CardHeader className="text-center">
                <BookIcon className="w-12 h-12 mx-auto text-[#44A675] mb-4" />
                <CardTitle>Submit a Ticket</CardTitle>
                <CardDescription>Get personalized support</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-6">Response within 24 hours guaranteed</p>
                <Button variant="outline" className="w-full border-[#3B82F6] text-[#3B82F6]">
                  Create Ticket
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-2">Find quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(0, 5).map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="hover:text-[#44A675] text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(5, 10).map((item, index) => (
                  <AccordionItem key={index + 5} value={`item-${index + 5}`} className="border-b border-gray-700">
                    <AccordionTrigger className="hover:text-[#44A675] text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#44A675] text-[#44A675]">
              View All FAQs
            </Button>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold gradient-text">Support Categories</h2>
            <p className="text-gray-400 mt-2">Browse support by category</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="outline" className="flex flex-col h-32 border-gray-700 hover:border-[#44A675] hover:text-[#44A675]">
              <UserIcon className="w-8 h-8 mb-2" />
              <span>Account Issues</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-32 border-gray-700 hover:border-[#44A675] hover:text-[#44A675]">
              <ServerIcon className="w-8 h-8 mb-2" />
              <span>Connection Problems</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-32 border-gray-700 hover:border-[#44A675] hover:text-[#44A675]">
              <ShoppingBagIcon className="w-8 h-8 mb-2" />
              <span>Store & Purchases</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-32 border-gray-700 hover:border-[#44A675] hover:text-[#44A675]">
              <ShieldIcon className="w-8 h-8 mb-2" />
              <span>Report a Player</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-32 border-gray-700 hover:border-[#44A675] hover:text-[#44A675]">
              <HeartIcon className="w-8 h-8 mb-2" />
              <span>Donation Support</span>
            </Button>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <Card className="minecraft-border bg-black/40 border-[#3B82F6]">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquareIcon className="w-6 h-6 text-[#3B82F6]" />
                <CardTitle>Get in Touch</CardTitle>
              </div>
              <CardDescription>
                Can't find what you need? Send us a message and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="youremail@example.com" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="bg-[#1A1F2C] border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is your issue about?" 
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      required
                      className="bg-[#1A1F2C] border-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    className="w-full min-h-[150px] rounded-md p-3 bg-[#1A1F2C] border border-gray-700 focus:border-[#3B82F6] focus:ring-[#3B82F6] focus:outline-none"
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-gradient-to-r from-[#44A675] to-[#3B82F6]">
                    Submit Ticket
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
};

const faqItems = [
  {
    question: "How do I join the Fusion Network server?",
    answer: "To join our server, launch Minecraft and add 'play.fusionnetwork.com' as a server address. Our server supports Minecraft versions 1.8 to 1.19."
  },
  {
    question: "I can't connect to the server. What should I do?",
    answer: "First, make sure you're using a supported Minecraft version. Then check your internet connection and firewall settings. If problems persist, join our Discord for live support."
  },
  {
    question: "How do I claim land on the survival server?",
    answer: "To claim land, use the /claim command while standing in the area you want to protect. You can expand your claim using /claim expand <amount> while facing the direction you want to expand."
  },
  {
    question: "How do I report a player breaking the rules?",
    answer: "Use the /report <playername> <reason> command in-game, or submit a ticket through our website with evidence such as screenshots or recordings."
  },
  {
    question: "I purchased a rank but it's not showing up. What do I do?",
    answer: "First, try reconnecting to the server. If your rank still doesn't appear, create a support ticket with your purchase receipt and we'll resolve it quickly."
  },
  {
    question: "How do I transfer my items between game modes?",
    answer: "Items cannot be transferred between different game modes to maintain fair gameplay. Each game mode has a separate inventory and economy."
  },
  {
    question: "How often does the server reset?",
    answer: "Our survival world resets every 3 months, while mini-game maps rotate regularly. The main spawn and creative plots never reset."
  },
  {
    question: "Are there any donor perks?",
    answer: "Yes, donors receive cosmetic perks, additional plot space, and special commands. All perks maintain game balance and don't provide unfair advantages."
  },
  {
    question: "How do I join a town or faction?",
    answer: "You can create your own town using /town create <name> or join an existing one with /town join <name> if you've been invited or the town is open to the public."
  },
  {
    question: "How do I earn in-game currency?",
    answer: "You can earn money by voting for our server daily, participating in events, selling items to other players, and completing quests throughout the game world."
  }
];

export default Support;
