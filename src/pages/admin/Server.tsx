import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Play, Pause, RotateCcw, Save, Shield, Zap, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Server = () => {
  const [serverStatus, setServerStatus] = useState('online');
  const [playerLimit, setPlayerLimit] = useState('100');
  const [difficulty, setDifficulty] = useState('normal');
  const [gameMode, setGameMode] = useState('survival');
  const [pvpEnabled, setPvpEnabled] = useState(true);
  const [commandBlocks, setCommandBlocks] = useState(false);
  
  const handleRestart = () => {
    toast.info('Server restart initiated');
    // In a real app, this would trigger a server restart
    setTimeout(() => {
      toast.success('Server restarted successfully');
    }, 2000);
  };
  
  const handleSaveConfig = () => {
    toast.success('Server configuration saved');
    // In a real app, this would save the configuration to the server
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Server Controls</h1>
        <p className="text-muted-foreground">
          Manage your Minecraft server settings and performance.
        </p>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                Server Status
              </CardTitle>
              <CardDescription>
                Current state: <span className="font-medium text-green-500">Online</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">Players</div>
                    <div className="text-2xl font-bold">42/100</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Uptime</div>
                    <div className="text-2xl font-bold">3d 12h</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">CPU</div>
                    <div className="text-2xl font-bold">32%</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">RAM</div>
                    <div className="text-2xl font-bold">4.2/8GB</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1 bg-green-500 hover:bg-green-600">
                <Play className="w-4 h-4 mr-2" /> Start
              </Button>
              <Button variant="outline" className="flex-1">
                <Pause className="w-4 h-4 mr-2" /> Stop
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleRestart}>
                <RotateCcw className="w-4 h-4 mr-2" /> Restart
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common server management tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <div className="flex flex-col items-start">
                    <span className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" /> Backup World
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Last backup: 6 hours ago
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <div className="flex flex-col items-start">
                    <span className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" /> Clear Lag
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Remove entities to improve performance
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <div className="flex flex-col items-start">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" /> Schedule Restart
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Next scheduled: 12 hours from now
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 justify-start text-left">
                  <div className="flex flex-col items-start">
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-2" /> Switch World
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Currently: main_world
                    </span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="worlds">Worlds</TabsTrigger>
            <TabsTrigger value="backups">Backups</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Game Settings</CardTitle>
                <CardDescription>
                  Configure basic game parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="player-limit">Player Limit</Label>
                    <Input 
                      id="player-limit" 
                      value={playerLimit}
                      onChange={(e) => setPlayerLimit(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="peaceful">Peaceful</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gamemode">Default Game Mode</Label>
                    <Select value={gameMode} onValueChange={setGameMode}>
                      <SelectTrigger id="gamemode">
                        <SelectValue placeholder="Select game mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="survival">Survival</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="adventure">Adventure</SelectItem>
                        <SelectItem value="spectator">Spectator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="server-motd">Server MOTD</Label>
                    <Input id="server-motd" defaultValue="Welcome to CraftRealm - The Best Minecraft Experience!" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">PvP Enabled</h4>
                      <p className="text-sm text-muted-foreground">Allow players to fight each other</p>
                    </div>
                    <Switch checked={pvpEnabled} onCheckedChange={setPvpEnabled} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Command Blocks</h4>
                      <p className="text-sm text-muted-foreground">Enable command block functionality</p>
                    </div>
                    <Switch checked={commandBlocks} onCheckedChange={setCommandBlocks} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveConfig} className="ml-auto">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Settings</CardTitle>
                <CardDescription>
                  Optimize server performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>View Distance</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">8</span>
                      <Input type="range" min={4} max={16} defaultValue={10} className="flex-1" />
                      <span className="text-sm">16</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Simulation Distance</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">4</span>
                      <Input type="range" min={4} max={12} defaultValue={8} className="flex-1" />
                      <span className="text-sm">12</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Max Memory Allocation (GB)</Label>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">2</span>
                      <Input type="range" min={2} max={16} defaultValue={8} className="flex-1" />
                      <span className="text-sm">16</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Entity Culling</h4>
                      <p className="text-sm text-muted-foreground">Hide entities that are not visible to players</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">No-Tick View Distance</h4>
                      <p className="text-sm text-muted-foreground">Extends visible chunks without simulation</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveConfig} className="ml-auto">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Other tabs would be implemented here */}
          <TabsContent value="worlds" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>World Management</CardTitle>
                <CardDescription>
                  Manage your server's worlds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>World management features will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Backup Management</CardTitle>
                <CardDescription>
                  Configure and restore server backups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Backup management features will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Server;
