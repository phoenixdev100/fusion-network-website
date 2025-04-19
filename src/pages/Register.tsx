
import { useState } from "react";
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Pick, Sword, ShieldCheck, Gamepad2, Gem } from 'lucide-react';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully! Check your email for verification.");
      navigate('/login');
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <div className="max-w-md mx-auto">
          <Card className="minecraft-border animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold gradient-text minecraft-text">Join Fusion Network</CardTitle>
              <CardDescription>Create your account to join our Minecraft community</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Minecraft Username</Label>
                  <Input id="username" placeholder="Your in-game name" required className="minecraft-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required className="minecraft-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a secure password" required className="minecraft-border" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" required className="minecraft-border" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/rules" className="text-primary hover:underline">
                      server rules
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-primary hover:underline">
                      terms of service
                    </Link>
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-[#44A675] to-[#3B82F6] minecraft-border" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-muted-foreground">Account Benefits</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-2 rounded-md bg-black/20">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span className="text-xs">Premium Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md bg-black/20">
                    <Gem className="h-4 w-4 text-blue-400" />
                    <span className="text-xs">Daily Rewards</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md bg-black/20">
                    <Sword className="h-4 w-4 text-red-400" />
                    <span className="text-xs">Special Kits</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-md bg-black/20">
                    <Pick className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs">Land Claims</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-bold hover:underline">
                  Log in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
