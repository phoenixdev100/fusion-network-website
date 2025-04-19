
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileText, 
  LogOut, 
  Menu, 
  X,
  Home,
  Server,
  Gamepad2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('fusion_user');
    if (!user) {
      toast.error('Please login to access the admin portal');
      navigate('/login');
      return;
    }
    
    try {
      const userData = JSON.parse(user);
      if (userData.role !== 'admin') {
        toast.error('You do not have permission to access this page');
        navigate('/');
        return;
      }
      
      setIsAuthenticated(true);
    } catch (error) {
      toast.error('Authentication error');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('fusion_user');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null; // Don't render anything until authentication check is complete
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar for desktop */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#1A1F2C] text-white border-r border-[#2D3748] shadow-sm transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b border-[#2D3748] px-6">
          <Link to="/admin" className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#44A675] to-[#3B82F6] flex items-center justify-center">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MC Control</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <NavItem 
            to="/admin" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            label="Dashboard" 
            isActive={location.pathname === '/admin'}
          />
          <NavItem 
            to="/admin/users" 
            icon={<Users className="h-5 w-5" />} 
            label="Players" 
            isActive={location.pathname === '/admin/users'}
          />
          <NavItem 
            to="/admin/content" 
            icon={<FileText className="h-5 w-5" />} 
            label="Content" 
            isActive={location.pathname === '/admin/content'}
          />
          <NavItem 
            to="/admin/settings" 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            isActive={location.pathname === '/admin/settings'}
          />
          <NavItem 
            to="/admin/server" 
            icon={<Server className="h-5 w-5" />} 
            label="Server Controls" 
            isActive={location.pathname === '/admin/server'}
          />
        </nav>
        <div className="border-t border-[#2D3748] p-4">
          <Link to="/">
            <Button variant="outline" className="w-full justify-start mb-2 gap-2 bg-[#2D3748] border-[#4A5568] hover:bg-[#4A5568] text-white">
              <Home className="h-4 w-4" />
              Back to Website
            </Button>
          </Link>
          <Button 
            variant="destructive" 
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <div className="flex-1 text-lg font-semibold">Minecraft Server Admin</div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-[#44A675] text-white"
          : "text-gray-300 hover:bg-[#2D3748] hover:text-white"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
