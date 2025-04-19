
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Star } from 'lucide-react';

const LeaderBoard = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold gradient-text minecraft-text">Leaderboards</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Check out the top players on Fusion Network. Will you make it to the top?
          </p>
        </div>

        <Tabs defaultValue="pvp" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 minecraft-border bg-black/40">
            <TabsTrigger value="pvp" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#44A675]/20 data-[state=active]:to-[#3B82F6]/20">
              PvP
            </TabsTrigger>
            <TabsTrigger value="survival" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#44A675]/20 data-[state=active]:to-[#3B82F6]/20">
              Survival
            </TabsTrigger>
            <TabsTrigger value="economy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#44A675]/20 data-[state=active]:to-[#3B82F6]/20">
              Economy
            </TabsTrigger>
            <TabsTrigger value="playtime" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#44A675]/20 data-[state=active]:to-[#3B82F6]/20">
              Playtime
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pvp" className="animate-fade-in">
            <LeaderboardCard 
              title="PvP Rankings"
              description="The most fearsome warriors on the server"
              players={[
                { rank: 1, name: "xWarrior", avatar: "https://mc-heads.net/avatar/xWarrior", score: "K/D: 5.2", extra: "Kills: 520" },
                { rank: 2, name: "Huntress99", avatar: "https://mc-heads.net/avatar/Huntress99", score: "K/D: 4.8", extra: "Kills: 480" },
                { rank: 3, name: "BladeMaster", avatar: "https://mc-heads.net/avatar/BladeMaster", score: "K/D: 4.5", extra: "Kills: 450" },
                { rank: 4, name: "ShadowNinja", avatar: "https://mc-heads.net/avatar/ShadowNinja", score: "K/D: 4.2", extra: "Kills: 420" },
                { rank: 5, name: "EliteArcher", avatar: "https://mc-heads.net/avatar/EliteArcher", score: "K/D: 4.0", extra: "Kills: 400" },
                { rank: 6, name: "PvPGod", avatar: "https://mc-heads.net/avatar/PvPGod", score: "K/D: 3.9", extra: "Kills: 390" },
                { rank: 7, name: "SwordMaster", avatar: "https://mc-heads.net/avatar/SwordMaster", score: "K/D: 3.8", extra: "Kills: 380" },
                { rank: 8, name: "CombatKing", avatar: "https://mc-heads.net/avatar/CombatKing", score: "K/D: 3.7", extra: "Kills: 370" },
                { rank: 9, name: "BattleQueen", avatar: "https://mc-heads.net/avatar/BattleQueen", score: "K/D: 3.6", extra: "Kills: 360" },
                { rank: 10, name: "FightingPro", avatar: "https://mc-heads.net/avatar/FightingPro", score: "K/D: 3.5", extra: "Kills: 350" },
              ]}
            />
          </TabsContent>

          <TabsContent value="survival" className="animate-fade-in">
            <LeaderboardCard 
              title="Survival Rankings"
              description="The most skilled survivors in the harshest environments"
              players={[
                { rank: 1, name: "CraftMaster", avatar: "https://mc-heads.net/avatar/CraftMaster", score: "Level 100", extra: "Days: 120" },
                { rank: 2, name: "Explorer_Pro", avatar: "https://mc-heads.net/avatar/Explorer_Pro", score: "Level 95", extra: "Days: 110" },
                { rank: 3, name: "DiamondKing", avatar: "https://mc-heads.net/avatar/DiamondKing", score: "Level 90", extra: "Days: 100" },
                { rank: 4, name: "MineQueen", avatar: "https://mc-heads.net/avatar/MineQueen", score: "Level 85", extra: "Days: 95" },
                { rank: 5, name: "RedstoneWiz", avatar: "https://mc-heads.net/avatar/RedstoneWiz", score: "Level 80", extra: "Days: 90" },
                { rank: 6, name: "BuilderPro", avatar: "https://mc-heads.net/avatar/BuilderPro", score: "Level 75", extra: "Days: 85" },
                { rank: 7, name: "CaveExplorer", avatar: "https://mc-heads.net/avatar/CaveExplorer", score: "Level 70", extra: "Days: 80" },
                { rank: 8, name: "EndermanKiller", avatar: "https://mc-heads.net/avatar/EndermanKiller", score: "Level 65", extra: "Days: 75" },
                { rank: 9, name: "DragonSlayer", avatar: "https://mc-heads.net/avatar/DragonSlayer", score: "Level 60", extra: "Days: 70" },
                { rank: 10, name: "NetherRunner", avatar: "https://mc-heads.net/avatar/NetherRunner", score: "Level 55", extra: "Days: 65" },
              ]}
            />
          </TabsContent>

          <TabsContent value="economy" className="animate-fade-in">
            <LeaderboardCard 
              title="Richest Players"
              description="The wealthiest entrepreneurs on the server"
              players={[
                { rank: 1, name: "TradeKing", avatar: "https://mc-heads.net/avatar/TradeKing", score: "$1,000,000", extra: "Items: 5000" },
                { rank: 2, name: "MerchantPro", avatar: "https://mc-heads.net/avatar/MerchantPro", score: "$800,000", extra: "Items: 4000" },
                { rank: 3, name: "ShopMaster", avatar: "https://mc-heads.net/avatar/ShopMaster", score: "$600,000", extra: "Items: 3000" },
                { rank: 4, name: "Economist", avatar: "https://mc-heads.net/avatar/Economist", score: "$400,000", extra: "Items: 2000" },
                { rank: 5, name: "RichCrafter", avatar: "https://mc-heads.net/avatar/RichCrafter", score: "$200,000", extra: "Items: 1000" },
                { rank: 6, name: "EmeraldCollector", avatar: "https://mc-heads.net/avatar/EmeraldCollector", score: "$180,000", extra: "Items: 900" },
                { rank: 7, name: "DiamondDealer", avatar: "https://mc-heads.net/avatar/DiamondDealer", score: "$160,000", extra: "Items: 800" },
                { rank: 8, name: "GoldHoarder", avatar: "https://mc-heads.net/avatar/GoldHoarder", score: "$140,000", extra: "Items: 700" },
                { rank: 9, name: "IronBaron", avatar: "https://mc-heads.net/avatar/IronBaron", score: "$120,000", extra: "Items: 600" },
                { rank: 10, name: "CoalMagnate", avatar: "https://mc-heads.net/avatar/CoalMagnate", score: "$100,000", extra: "Items: 500" },
              ]}
            />
          </TabsContent>

          <TabsContent value="playtime" className="animate-fade-in">
            <LeaderboardCard 
              title="Most Active Players"
              description="The most dedicated players who live and breathe Minecraft"
              players={[
                { rank: 1, name: "24/7Player", avatar: "https://mc-heads.net/avatar/247Player", score: "1000h", extra: "Since: 2023" },
                { rank: 2, name: "Dedicated", avatar: "https://mc-heads.net/avatar/Dedicated", score: "900h", extra: "Since: 2023" },
                { rank: 3, name: "NoLife", avatar: "https://mc-heads.net/avatar/NoLife", score: "800h", extra: "Since: 2023" },
                { rank: 4, name: "AlwaysOn", avatar: "https://mc-heads.net/avatar/AlwaysOn", score: "700h", extra: "Since: 2023" },
                { rank: 5, name: "ActiveGamer", avatar: "https://mc-heads.net/avatar/ActiveGamer", score: "600h", extra: "Since: 2023" },
                { rank: 6, name: "OnlineKing", avatar: "https://mc-heads.net/avatar/OnlineKing", score: "500h", extra: "Since: 2023" },
                { rank: 7, name: "GameAddict", avatar: "https://mc-heads.net/avatar/GameAddict", score: "400h", extra: "Since: 2023" },
                { rank: 8, name: "MinecraftLover", avatar: "https://mc-heads.net/avatar/MinecraftLover", score: "300h", extra: "Since: 2023" },
                { rank: 9, name: "BlockFan", avatar: "https://mc-heads.net/avatar/BlockFan", score: "200h", extra: "Since: 2023" },
                { rank: 10, name: "CubeEnthusiast", avatar: "https://mc-heads.net/avatar/CubeEnthusiast", score: "100h", extra: "Since: 2023" },
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
  avatar: string;
  score: string;
  extra: string;
}

interface LeaderboardCardProps {
  title: string;
  description?: string;
  players: Player[];
}

const LeaderboardCard = ({ title, description, players }: LeaderboardCardProps) => {
  return (
    <Card className="minecraft-border mt-6 bg-black/40 border-[#3B82F6]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            {description && <p className="text-gray-400 mt-1">{description}</p>}
          </div>
          <Badge variant="outline" className="bg-[#1A1F2C]">Updated Daily</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.rank}
              className="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  {player.rank === 1 && (
                    <div className="absolute -top-3 -left-3 text-yellow-500">
                      <Trophy className="h-6 w-6" />
                    </div>
                  )}
                  {player.rank === 2 && (
                    <div className="absolute -top-3 -left-3 text-gray-300">
                      <Medal className="h-6 w-6" />
                    </div>
                  )}
                  {player.rank === 3 && (
                    <div className="absolute -top-3 -left-3 text-amber-700">
                      <Medal className="h-6 w-6" />
                    </div>
                  )}
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-[#44A675] to-[#3B82F6] text-white font-bold">
                    {player.rank}
                  </div>
                </div>
                <Avatar className="h-10 w-10 border-2 border-[#3B82F6]/30">
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-bold">{player.name}</span>
                  {player.rank <= 3 && (
                    <div className="flex items-center mt-1">
                      {[...Array(4 - player.rank)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-[#44A675] font-bold">{player.score}</span>
                  <div className="text-gray-400 text-sm">{player.extra}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
