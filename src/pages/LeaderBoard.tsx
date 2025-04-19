
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LeaderBoard = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Leaderboards</h1>

        <Tabs defaultValue="pvp" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 minecraft-border">
            <TabsTrigger value="pvp">PvP</TabsTrigger>
            <TabsTrigger value="survival">Survival</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="playtime">Playtime</TabsTrigger>
          </TabsList>

          <TabsContent value="pvp">
            <LeaderboardCard 
              title="PvP Rankings"
              players={[
                { rank: 1, name: "xWarrior", score: "K/D: 5.2", extra: "Kills: 520" },
                { rank: 2, name: "Huntress99", score: "K/D: 4.8", extra: "Kills: 480" },
                { rank: 3, name: "BladeMaster", score: "K/D: 4.5", extra: "Kills: 450" },
                { rank: 4, name: "ShadowNinja", score: "K/D: 4.2", extra: "Kills: 420" },
                { rank: 5, name: "EliteArcher", score: "K/D: 4.0", extra: "Kills: 400" },
              ]}
            />
          </TabsContent>

          <TabsContent value="survival">
            <LeaderboardCard 
              title="Survival Rankings"
              players={[
                { rank: 1, name: "CraftMaster", score: "Level 100", extra: "Days: 120" },
                { rank: 2, name: "Explorer_Pro", score: "Level 95", extra: "Days: 110" },
                { rank: 3, name: "DiamondKing", score: "Level 90", extra: "Days: 100" },
                { rank: 4, name: "MineQueen", score: "Level 85", extra: "Days: 95" },
                { rank: 5, name: "RedstoneWiz", score: "Level 80", extra: "Days: 90" },
              ]}
            />
          </TabsContent>

          <TabsContent value="economy">
            <LeaderboardCard 
              title="Richest Players"
              players={[
                { rank: 1, name: "TradeKing", score: "$1,000,000", extra: "Items: 5000" },
                { rank: 2, name: "MerchantPro", score: "$800,000", extra: "Items: 4000" },
                { rank: 3, name: "ShopMaster", score: "$600,000", extra: "Items: 3000" },
                { rank: 4, name: "Economist", score: "$400,000", extra: "Items: 2000" },
                { rank: 5, name: "RichCrafter", score: "$200,000", extra: "Items: 1000" },
              ]}
            />
          </TabsContent>

          <TabsContent value="playtime">
            <LeaderboardCard 
              title="Most Active Players"
              players={[
                { rank: 1, name: "24/7Player", score: "1000h", extra: "Since: 2023" },
                { rank: 2, name: "Dedicated", score: "900h", extra: "Since: 2023" },
                { rank: 3, name: "NoLife", score: "800h", extra: "Since: 2023" },
                { rank: 4, name: "AlwaysOn", score: "700h", extra: "Since: 2023" },
                { rank: 5, name: "ActiveGamer", score: "600h", extra: "Since: 2023" },
              ]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

interface Player {
  rank: number;
  name: string;
  score: string;
  extra: string;
}

interface LeaderboardCardProps {
  title: string;
  players: Player[];
}

const LeaderboardCard = ({ title, players }: LeaderboardCardProps) => {
  return (
    <Card className="minecraft-border mt-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.rank}
              className="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold gradient-text">#{player.rank}</span>
                <span className="font-bold">{player.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-300">{player.score}</span>
                <span className="text-gray-400 text-sm">{player.extra}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
