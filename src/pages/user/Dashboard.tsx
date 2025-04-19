
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { UserCircle, Trophy, ShoppingCart, Sword } from 'lucide-react';

const UserDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('fusion_user');
    if (!user) {
      toast.error('Please login to access your dashboard');
      navigate('/login');
      return;
    }
    setIsAuthenticated(true);
  }, [navigate]);

  if (!isAuthenticated) return null;

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Player Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="minecraft-border hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Profile Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Level: 15</p>
              <p>XP: 1500/2000</p>
              <p>Playtime: 24h</p>
            </CardContent>
          </Card>

          <Card className="minecraft-border hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Total: 25/50</p>
              <p>Recent: Diamond Finder</p>
            </CardContent>
          </Card>

          <Card className="minecraft-border hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Store
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Credits: 1000</p>
              <Button variant="outline" onClick={() => navigate('/store')}>
                Visit Store
              </Button>
            </CardContent>
          </Card>

          <Card className="minecraft-border hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sword className="h-5 w-5" />
                PvP Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Kills: 150</p>
              <p>Deaths: 45</p>
              <p>K/D: 3.33</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-6">
          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Won Survival Games Tournament</li>
                <li>Completed Diamond Challenge</li>
                <li>Reached Level 15</li>
                <li>Purchased VIP Package</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
