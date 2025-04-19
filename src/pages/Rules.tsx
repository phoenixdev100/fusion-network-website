
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Rules = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Server Rules</h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle>1. General Behavior</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Be respectful to all players</li>
                <li>• No harassment or bullying</li>
                <li>• No spamming in chat</li>
                <li>• No advertising other servers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle>2. Gameplay Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• No hacking or using modified clients</li>
                <li>• No exploiting bugs</li>
                <li>• No griefing other players' builds</li>
                <li>• PvP is only allowed in designated areas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle>3. Building Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Respect other players' build space</li>
                <li>• No inappropriate or offensive builds</li>
                <li>• Keep a minimum distance of 100 blocks between bases</li>
                <li>• Clean up floating trees and temporary structures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle>4. Economy Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• No scamming other players</li>
                <li>• Fair trading practices only</li>
                <li>• Report any economy exploits to staff</li>
                <li>• No real-money trading</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p>Breaking these rules may result in temporary or permanent ban from the server.</p>
          <p>Rules are subject to change. Check back regularly for updates.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rules;
