
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuIcon, X, Gamepad2 } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#2D3748] bg-[#1A1F2C]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1A1F2C]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#44A675] to-[#3B82F6] flex items-center justify-center">
                <Gamepad2 className="h-5 w-5 text-white" />
              </div>
              <span className="hidden sm:inline-block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#44A675] to-[#3B82F6]">
                CraftRealm MC
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Home
            </Link>
            <Link to="/server-info" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Server Info
            </Link>
            <Link to="/store" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Store
            </Link>
            <Link to="/leaderboards" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Leaderboards
            </Link>
            <Link to="/community" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Community
            </Link>
            <Link to="/support" className="text-sm font-medium transition-colors hover:text-[#44A675]">
              Support
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">Log in</Button>
            </Link>
            <Link to="/admin">
              <Button className="bg-gradient-to-r from-[#44A675] to-[#3B82F6] text-white">Admin Portal</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <MenuIcon size={24} className="text-white" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#2D3748] p-4 bg-[#1A1F2C]">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/server-info"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Server Info
              </Link>
              <Link 
                to="/store"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
              <Link 
                to="/leaderboards"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboards
              </Link>
              <Link 
                to="/community"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/support"
                className="text-sm font-medium transition-colors hover:text-[#44A675]"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-[#3B82F6] text-[#3B82F6]">Log in</Button>
                </Link>
                <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#44A675] to-[#3B82F6]">Admin Portal</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      
      <footer className="border-t border-[#2D3748] bg-[#1A1F2C]">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#44A675] to-[#3B82F6] flex items-center justify-center">
                  <Gamepad2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#44A675] to-[#3B82F6]">
                  CraftRealm MC
                </span>
              </Link>
              <p className="text-gray-400">
                Join our thriving Minecraft community with unique game modes, events, and friendly players.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Play Now</h3>
              <div className="space-y-2">
                <Link to="/server-info" className="block text-sm text-gray-400 hover:text-white">
                  Server IP: mc.craftrealm.com
                </Link>
                <Link to="/versions" className="block text-sm text-gray-400 hover:text-white">
                  Supported Versions
                </Link>
                <Link to="/mods" className="block text-sm text-gray-400 hover:text-white">
                  Required Mods
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Community</h3>
              <div className="space-y-2">
                <Link to="/rules" className="block text-sm text-gray-400 hover:text-white">
                  Server Rules
                </Link>
                <Link to="/discord" className="block text-sm text-gray-400 hover:text-white">
                  Discord
                </Link>
                <Link to="/vote" className="block text-sm text-gray-400 hover:text-white">
                  Vote for Rewards
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Have questions or need help?</p>
                <p>Email: support@craftrealm.com</p>
                <p>Discord: discord.gg/craftrealm</p>
                <p>Online: 10AM-10PM EST</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2D3748] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CraftRealm MC. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                EULA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
