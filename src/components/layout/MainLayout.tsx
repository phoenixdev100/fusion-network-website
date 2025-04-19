
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-fusion-primary to-fusion-secondary flex items-center justify-center">
                <span className="text-white font-bold">FN</span>
              </div>
              <span className="hidden sm:inline-block text-xl font-bold gradient-text">
                Fusion Network
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link to="/admin">
              <Button className="gradient-bg">Admin Portal</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full gradient-bg">Admin Portal</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-fusion-primary to-fusion-secondary flex items-center justify-center">
                  <span className="text-white font-bold">FN</span>
                </div>
                <span className="text-xl font-bold gradient-text">
                  Fusion Network
                </span>
              </Link>
              <p className="text-muted-foreground">
                Connecting people, ideas, and technology to create innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link to="/team" className="block text-sm text-muted-foreground hover:text-foreground">
                  Our Team
                </Link>
                <Link to="/careers" className="block text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <div className="space-y-2">
                <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link to="/documentation" className="block text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link to="/support" className="block text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>123 Technology Plaza</p>
                <p>San Francisco, CA 94107</p>
                <p>contact@fusion-network.xyz</p>
                <p>(123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fusion Network. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
