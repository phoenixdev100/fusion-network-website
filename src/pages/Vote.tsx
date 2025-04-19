
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ExternalLink, Gift, Check, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const voteLinks = [
  {
    name: 'Minecraft-Server.net',
    image: '/img/vote/minecraft-server-net.png',
    url: 'https://minecraft-server.net/vote/fusion-network',
    rewards: 'Diamond Kit + 1 Vote Key',
    cooldown: 24, // hours
  },
  {
    name: 'MinecraftMP',
    image: '/img/vote/minecraftmp.png',
    url: 'https://minecraftmp.com/servers/fusion-network/vote',
    rewards: 'Iron Kit + 1 Vote Key',
    cooldown: 24,
  },
  {
    name: 'TopG',
    image: '/img/vote/topg.png',
    url: 'https://topg.org/minecraft-servers/server-fusion-network',
    rewards: 'Gold Kit + 2 Vote Keys',
    cooldown: 24,
  },
  {
    name: 'Planet Minecraft',
    image: '/img/vote/planet-minecraft.png',
    url: 'https://www.planetminecraft.com/server/fusion-network/vote/',
    rewards: 'Emerald Kit + 3 Vote Keys + Random Crate',
    cooldown: 24,
  },
];

const rewardsStreak = [
  {
    days: 3,
    reward: '5x Vote Keys',
    claimed: true,
  },
  {
    days: 7,
    reward: 'Special Weapon',
    claimed: false,
  },
  {
    days: 14,
    reward: 'Pet Companion',
    claimed: false,
  },
  {
    days: 30,
    reward: 'Custom Tag + 50,000 Coins',
    claimed: false,
  },
];

const Vote = () => {
  const [votedSites, setVotedSites] = useState<Record<string, boolean>>({});
  const [currentStreak, setCurrentStreak] = useState(5);

  const handleVote = (siteName: string, url: string) => {
    window.open(url, '_blank');
    
    // Simulate successful vote
    setTimeout(() => {
      setVotedSites(prev => ({...prev, [siteName]: true}));
      toast.success(`Thanks for voting on ${siteName}! Rewards sent to your account.`);
    }, 1000);
  };

  const claimStreakReward = (days: number, reward: string) => {
    toast.success(`Claimed ${days} day streak reward: ${reward}`);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center minecraft-text">Vote for Fusion Network</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="minecraft-border mb-8 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Your Voting Streak</CardTitle>
              <CardDescription>Vote daily to increase your streak and earn rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/20 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span>Current Streak: {currentStreak} days</span>
                  <span className="text-sm text-gray-400">Next milestone: 7 days</span>
                </div>
                <Progress value={(currentStreak / 7) * 100} className="h-3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {rewardsStreak.map((milestone) => (
                  <Card key={milestone.days} className={`bg-black/30 border ${milestone.claimed ? 'border-green-500/30' : currentStreak >= milestone.days ? 'border-yellow-500/50 animate-pulse' : 'border-gray-700'}`}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-bold">{milestone.days} Day Streak</p>
                        <p className="text-sm text-gray-400">{milestone.reward}</p>
                      </div>
                      {milestone.claimed ? (
                        <div className="bg-green-500/20 p-1 rounded-full">
                          <Check size={18} className="text-green-500" />
                        </div>
                      ) : currentStreak >= milestone.days ? (
                        <Button size="sm" variant="outline" className="border-yellow-500 text-yellow-500" 
                          onClick={() => claimStreakReward(milestone.days, milestone.reward)}>
                          Claim
                        </Button>
                      ) : (
                        <div className="bg-gray-800/50 text-gray-500 text-xs px-2 py-1 rounded-full">
                          Locked
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {voteLinks.map((site) => (
              <Card key={site.name} className={`minecraft-border hover:-translate-y-1 transition-transform duration-300 ${votedSites[site.name] ? 'bg-gradient-to-br from-green-900/20 to-green-700/10 border-green-600/30' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{site.name}</CardTitle>
                    {votedSites[site.name] && (
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check size={18} className="text-green-500" />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Gift size={16} className="text-fusion-accent" />
                      <span className="text-sm">{site.rewards}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-sm">Vote every {site.cooldown} hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleVote(site.name, site.url)} 
                    className={`w-full ${votedSites[site.name] ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-[#44A675] to-[#3B82F6] minecraft-border'}`}
                    disabled={votedSites[site.name]}
                  >
                    {votedSites[site.name] ? 'Voted' : 'Vote Now'}
                    {!votedSites[site.name] && <ExternalLink size={16} className="ml-2" />}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="minecraft-border mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Vote Rewards</CardTitle>
              <CardDescription>Exclusive items and perks for voting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-fusion-accent">Vote Keys</h3>
                  <p className="text-sm text-gray-400">Use keys at spawn to open vote crates with rare items and cosmetics.</p>
                </div>
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-fusion-accent">In-game Currency</h3>
                  <p className="text-sm text-gray-400">Receive coins to spend in the server shop for items and upgrades.</p>
                </div>
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2 text-fusion-accent">Monthly Rewards</h3>
                  <p className="text-sm text-gray-400">Top voters each month receive special perks and exclusive items.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Vote;
