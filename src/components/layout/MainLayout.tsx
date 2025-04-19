
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  MenuIcon,
  X,
  Gamepad2,
  Sun,
  Moon,
  UserPlus,
  LogIn,
  User,
  Shield,
  Globe,
  HelpCircle,
  ServerCrash,
  Trophy,
  MessageSquare,
  BookOpen,
  ShoppingCart
} from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white bg-[url('/img/minecraft_bg_dark.jpg')] bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      
      <header className="sticky top-0 z-50 w-full border-b border-[#2D3748] bg-[#1A1F2C]/80 backdrop-blur supports-[backdrop-filter]:bg-[#1A1F2C]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-3 font-semibold group">
              <div className="relative h-10 w-10 minecraft-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#44A675] to-[#3B82F6] animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#44A675] to-[#3B82F6] minecraft-text">
                  FUSION
                </span>
                <span className="text-2xl font-bold text-gray-300 minecraft-text">NETWORK</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/" isActive={isActive('/')}>
              <Globe className="h-4 w-4" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/server-info" isActive={isActive('/server-info')}>
              <ServerCrash className="h-4 w-4" />
              <span>Server</span>
            </NavLink>
            <NavLink to="/store" isActive={isActive('/store')}>
              <ShoppingCart className="h-4 w-4" />
              <span>Store</span>
            </NavLink>
            <NavLink to="/vote" isActive={isActive('/vote')}>
              <Shield className="h-4 w-4" />
              <span>Vote</span>
            </NavLink>
            <NavLink to="/leaderboard" isActive={isActive('/leaderboard')}>
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/rules" isActive={isActive('/rules')}>
              <BookOpen className="h-4 w-4" />
              <span>Rules</span>
            </NavLink>
            <NavLink to="/community" isActive={isActive('/community')}>
              <MessageSquare className="h-4 w-4" />
              <span>Community</span>
            </NavLink>
            <NavLink to="/support" isActive={isActive('/support')}>
              <HelpCircle className="h-4 w-4" />
              <span>Support</span>
            </NavLink>
          </nav>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="bg-transparent border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10">
                  <LogIn className="h-4 w-4 mr-1" />
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-[#44A675] to-[#3B82F6] hover:opacity-90 minecraft-border text-white">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Sign up
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X size={24} className="text-white" /> : 
                <MenuIcon size={24} className="text-white" />
              }
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#2D3748] p-4 bg-[#1A1F2C]/95 backdrop-blur animate-fade-in">
            <nav className="flex flex-col gap-2">
              <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                <Globe className="h-4 w-4" />
                <span>Home</span>
              </MobileNavLink>
              <MobileNavLink to="/server-info" isActive={isActive('/server-info')} onClick={() => setIsMenuOpen(false)}>
                <ServerCrash className="h-4 w-4" />
                <span>Server</span>
              </MobileNavLink>
              <MobileNavLink to="/store" isActive={isActive('/store')} onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="h-4 w-4" />
                <span>Store</span>
              </MobileNavLink>
              <MobileNavLink to="/vote" isActive={isActive('/vote')} onClick={() => setIsMenuOpen(false)}>
                <Shield className="h-4 w-4" />
                <span>Vote</span>
              </MobileNavLink>
              <MobileNavLink to="/leaderboard" isActive={isActive('/leaderboard')} onClick={() => setIsMenuOpen(false)}>
                <Trophy className="h-4 w-4" />
                <span>Leaderboard</span>
              </MobileNavLink>
              <MobileNavLink to="/rules" isActive={isActive('/rules')} onClick={() => setIsMenuOpen(false)}>
                <BookOpen className="h-4 w-4" />
                <span>Rules</span>
              </MobileNavLink>
              <MobileNavLink to="/community" isActive={isActive('/community')} onClick={() => setIsMenuOpen(false)}>
                <MessageSquare className="h-4 w-4" />
                <span>Community</span>
              </MobileNavLink>
              <MobileNavLink to="/support" isActive={isActive('/support')} onClick={() => setIsMenuOpen(false)}>
                <HelpCircle className="h-4 w-4" />
                <span>Support</span>
              </MobileNavLink>
              <hr className="border-[#2D3748] my-2" />
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent border-[#3B82F6] text-[#3B82F6]">
                    <LogIn className="h-4 w-4 mr-1" />
                    Log in
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#44A675] to-[#3B82F6]">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      <main className={cn("flex-1 relative z-10", className)}>
        {children}
      </main>
      
      <footer className="border-t border-[#2D3748] bg-[#1A1F2C]/90 backdrop-blur relative z-10">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <div className="h-10 w-10 minecraft-border overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#44A675] to-[#3B82F6]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#44A675] to-[#3B82F6] minecraft-text">
                    FUSION
                  </span>
                  <span className="text-xl font-bold text-gray-300 minecraft-text">NETWORK</span>
                </div>
              </Link>
              <p className="text-gray-400">
                Join our thriving Minecraft community with unique game modes, events, and friendly players.
              </p>
              <div className="flex gap-2">
                <SocialButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </SocialButton>
                <SocialButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </SocialButton>
                <SocialButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </SocialButton>
                <SocialButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </SocialButton>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 minecraft-text">Play Now</h3>
              <div className="space-y-2">
                <FooterLink to="/server-info">
                  Server IP: fusion-network.xyz
                </FooterLink>
                <FooterLink to="/versions">
                  Supported Versions
                </FooterLink>
                <FooterLink to="/required-mods">
                  Required Mods
                </FooterLink>
                <FooterLink to="/vote">
                  Vote for Rewards
                </FooterLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 minecraft-text">Community</h3>
              <div className="space-y-2">
                <FooterLink to="/rules">
                  Server Rules
                </FooterLink>
                <FooterLink to="/community">
                  Discord
                </FooterLink>
                <FooterLink to="/store">
                  Store
                </FooterLink>
                <FooterLink to="/leaderboard">
                  Leaderboards
                </FooterLink>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 minecraft-text">Support</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Have questions or need help?</p>
                <p>Email: support@fusion-network.xyz</p>
                <p>Discord: discord.gg/fusionnetwork</p>
                <p>Online: 10AM-10PM EST</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2D3748] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Fusion Network. All rights reserved.
            </p>
            <div className="flex gap-4">
              <FooterLink to="#">Terms</FooterLink>
              <FooterLink to="#">Privacy</FooterLink>
              <FooterLink to="#">EULA</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const NavLink = ({ children, to, isActive }: { children: React.ReactNode, to: string, isActive: boolean }) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#44A675] relative px-3 py-2",
      isActive 
        ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#44A675] after:to-[#3B82F6] text-white" 
        : "text-gray-400"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, to, isActive, onClick }: { 
  children: React.ReactNode, 
  to: string, 
  isActive: boolean,
  onClick: () => void
}) => (
  <Link 
    to={to}
    className={cn(
      "flex items-center gap-2 text-sm font-medium transition-colors p-2 rounded-md",
      isActive 
        ? "bg-[#44A675]/10 text-[#44A675]" 
        : "text-gray-400 hover:bg-gray-800/30"
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);

const SocialButton = ({ children }: { children: React.ReactNode }) => (
  <Button variant="outline" size="icon" className="rounded-full w-8 h-8 p-0 bg-transparent border-gray-700 hover:bg-gray-800 hover:border-gray-600">
    {children}
  </Button>
);

const FooterLink = ({ children, to }: { children: React.ReactNode, to: string }) => (
  <Link to={to} className="block text-sm text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>
);
