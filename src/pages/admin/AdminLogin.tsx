
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This is a mock admin login - in a real app, you'd make an API call here
      if (email === 'admin@fusion-network.xyz' && password === 'admin123') {
        localStorage.setItem('fusion_user', JSON.stringify({ role: 'admin', email }));
        toast.success('Admin login successful!');
        navigate('/admin');
      } else {
        toast.error('Invalid admin credentials');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
        <div className="w-full max-w-md">
          <Card className="minecraft-border bg-[#1A1F2C] text-white">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center gradient-text">Admin Login</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Enter your credentials to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="admin@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-[#2D3748] border-[#4A5568]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-[#2D3748] border-[#4A5568]"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-bg" disabled={isLoading}>
                    {isLoading ? 'Signing in...' : 'Sign in to Admin Panel'}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-center text-sm text-gray-400 w-full">
                This is the admin portal. For regular user login, please use the {' '}
                <a href="/login" className="text-blue-400 hover:underline">
                  user login page
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminLogin;
