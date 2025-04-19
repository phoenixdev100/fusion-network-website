
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { User, Shield, Award, Settings, Clock } from 'lucide-react';

const UserProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('fusion_user');
    if (!user) {
      toast.error('Please login to access your profile');
      navigate('/login');
      return;
    }
    
    // For demo purposes, we'll just set some placeholder data
    setUsername('MinecraftPlayer123');
    setEmail('player@example.com');
    setIsAuthenticated(true);
  }, [navigate]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  if (!isAuthenticated) return null;

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Your Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="md:col-span-2">
            <Card className="minecraft-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Player Information
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                    <Button type="submit" className="gradient-bg">Save Changes</Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="https://api.dicebear.com/7.x/minecraft/svg?seed=MinecraftPlayer123" alt="Avatar" />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{username}</h3>
                        <p className="text-gray-400">{email}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="text-sm">VIP Member</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="font-medium mb-2">Account Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Member Since</p>
                          <p>June 15, 2023</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Last Login</p>
                          <p>Today at 14:30</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Rank</p>
                          <p>VIP</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Balance</p>
                          <p>1,250 Coins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Stats Card */}
          <div>
            <Card className="minecraft-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Player Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Level</span>
                    <span className="font-bold">25</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">XP</span>
                    <span className="font-bold">15,430 / 20,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Playtime</span>
                    <span className="font-bold">156 hours</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Kills</span>
                    <span className="font-bold">523</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Deaths</span>
                    <span className="font-bold">217</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">K/D Ratio</span>
                    <span className="font-bold">2.41</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="minecraft-border mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="text-sm">Completed Diamond Mining Challenge</li>
                  <li className="text-sm">Won Survival Games Tournament</li>
                  <li className="text-sm">Unlocked New Achievement: Master Builder</li>
                  <li className="text-sm">Purchased VIP Rank Upgrade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfile;
