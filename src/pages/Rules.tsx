
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldIcon, AlertCircle, MessageSquare, Home, Store, Heart, Users } from 'lucide-react';

const Rules = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold gradient-text minecraft-text">Server Rules</h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Please follow these rules to ensure a fun and fair experience for all players on Fusion Network.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="minecraft-border border-[#44A675] overflow-hidden bg-black/40">
            <div className="flex h-full">
              <div className="bg-[#44A675]/20 flex items-center justify-center px-6">
                <Users className="h-10 w-10 text-[#44A675]" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">1. General Behavior</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">Essential</Badge>
                  </div>
                  <CardDescription>How to interact with other players</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Be respectful to all players. Harassment, discrimination, bullying, or offensive language will not be tolerated.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>No spamming in chat. This includes excessive caps, repeated messages, or flooding chat with symbols.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>No advertising other servers or unrelated websites in any form (chat, signs, books, etc).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Follow staff instructions. If a staff member asks you to stop doing something, comply immediately.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="minecraft-border border-[#3B82F6] overflow-hidden bg-black/40">
            <div className="flex h-full">
              <div className="bg-[#3B82F6]/20 flex items-center justify-center px-6">
                <ShieldIcon className="h-10 w-10 text-[#3B82F6]" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">2. Gameplay Rules</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">Critical</Badge>
                  </div>
                  <CardDescription>Fair play guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>No hacking, cheating, or using modified clients that provide unfair advantages (X-ray, fly, speed, etc).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>No exploiting bugs or glitches. If you find a bug, report it to staff immediately.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>No griefing other players' builds or stealing their items, even if their area is not protected.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>PvP is only allowed in designated areas or if both parties consent to fighting.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="minecraft-border border-[#44A675] overflow-hidden bg-black/40">
            <div className="flex h-full">
              <div className="bg-[#44A675]/20 flex items-center justify-center px-6">
                <Home className="h-10 w-10 text-[#44A675]" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">3. Building Guidelines</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">Important</Badge>
                  </div>
                  <CardDescription>Construction and territory rules</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Respect other players' build space and maintain a minimum distance of 100 blocks between bases.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>No inappropriate or offensive builds. This includes symbols, words, or designs that could be considered offensive.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Clean up floating trees and temporary structures when you're done building in an area.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Do not build massive redstone contraptions that cause lag without staff approval.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="minecraft-border border-[#3B82F6] overflow-hidden bg-black/40">
            <div className="flex h-full">
              <div className="bg-[#3B82F6]/20 flex items-center justify-center px-6">
                <Store className="h-10 w-10 text-[#3B82F6]" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">4. Economy Rules</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">Important</Badge>
                  </div>
                  <CardDescription>Trading and economy guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>No scamming other players. All trades should be fair and as described.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>Report any economy exploits to staff immediately. Using these exploits is considered cheating.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>No real-money trading. All in-game items and currency must be earned through gameplay.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2 text-lg">•</span>
                      <span>Do not attempt to manipulate the server economy by hoarding or price fixing essential resources.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
          
          <Card className="minecraft-border border-[#44A675] overflow-hidden bg-black/40">
            <div className="flex h-full">
              <div className="bg-[#44A675]/20 flex items-center justify-center px-6">
                <MessageSquare className="h-10 w-10 text-[#44A675]" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">5. Communication</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">Essential</Badge>
                  </div>
                  <CardDescription>Chat rules and communication</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>English is the primary language in global chat. Other languages are allowed in private messages.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>No excessive swearing, hate speech, or discussing inappropriate topics.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>No impersonating staff members or other players.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#44A675] mr-2 text-lg">•</span>
                      <span>Do not share personal information in public chats, for your safety and others'.</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 bg-black/40 p-6 rounded-lg border border-red-500/30 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold text-red-500">Rule Enforcement</h3>
          </div>
          <p className="text-gray-400 mb-4">Breaking these rules may result in:</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Verbal warning for first minor offense</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Temporary mute or kick for repeated offenses</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Temporary ban (1-7 days) for serious or continued violations</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Permanent ban for extreme cases or repeated serious violations</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <Heart className="h-5 w-5 text-[#44A675]" />
            <p className="text-gray-400">Rules are subject to change. Check back regularly for updates.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rules;
