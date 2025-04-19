
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Users, 
  Clock, 
  HardDrive, 
  Cpu, 
  Activity,
  Calendar
} from 'lucide-react';

const ServerInfo = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Server Information</h1>

        <Tabs defaultValue="status" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 minecraft-border">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="plugins">Plugins</TabsTrigger>
            <TabsTrigger value="schedule">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="status">
            <Card className="minecraft-border mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Server Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Online</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-medium">Active</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Players Online</span>
                        <span className="text-sm font-medium">86/200</span>
                      </div>
                      <Progress value={43} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">CPU Usage</span>
                        <span className="text-sm font-medium">32%</span>
                      </div>
                      <Progress value={32} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Memory Usage</span>
                        <span className="text-sm font-medium">6.2 GB / 16 GB</span>
                      </div>
                      <Progress value={39} className="h-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Uptime</p>
                        <p className="font-medium">15 days, 7 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">TPS</p>
                        <p className="font-medium">19.8 (Excellent)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs">
            <Card className="minecraft-border mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Server Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Cpu className="h-4 w-4" />
                        Hardware
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-400">CPU</span>
                          <span>Intel Xeon E5-2690 v4</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Memory</span>
                          <span>16 GB DDR4</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Storage</span>
                          <span>512 GB NVMe SSD</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Network</span>
                          <span>1 Gbps</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Server className="h-4 w-4" />
                        Software
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Version</span>
                          <span>Paper 1.19.2</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Java</span>
                          <span>Java 17 OpenJDK</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">OS</span>
                          <span>Ubuntu 22.04 LTS</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Proxy</span>
                          <span>Velocity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg mt-4">
                    <h3 className="text-lg font-medium mb-2">Performance Optimizations</h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Optimized chunk loading and generation</li>
                      <li>Entity and redstone throttling when needed</li>
                      <li>Efficient world pre-generation</li>
                      <li>Optimized view distance</li>
                      <li>Regular restarts for memory management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plugins">
            <Card className="minecraft-border mt-6">
              <CardHeader>
                <CardTitle>Server Plugins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Protection & Management</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>WorldGuard - Region protection</li>
                        <li>CoreProtect - Block logging</li>
                        <li>LuckPerms - Permissions system</li>
                        <li>Essentials - Basic server commands</li>
                        <li>Vault - Economy API</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Gameplay Enhancements</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>McMMO - RPG-like skills</li>
                        <li>Jobs - Player professions</li>
                        <li>Lands - Land claiming system</li>
                        <li>ChestShop - Player shops</li>
                        <li>CustomItems - Special items</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">User Experience</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>TAB - Custom tab menus</li>
                        <li>ServerNPC - Interactive NPCs</li>
                        <li>BetterChat - Chat formatting</li>
                        <li>DeluxeMenus - Custom GUIs</li>
                        <li>ImageOnMap - Custom images on maps</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Anti-Cheat & Security</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>Matrix - Advanced anti-cheat</li>
                        <li>AuthMe - Authentication system</li>
                        <li>ServerSecurity - Anti-exploit</li>
                        <li>IPWhitelist - IP management</li>
                        <li>BanManager - Better ban control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="minecraft-border mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Scheduled Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">PvP Tournament</h3>
                      <span className="text-sm text-gray-400">Saturday, 8:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Join our weekly PvP tournament with amazing prizes! Sign up at spawn.</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Build Competition</h3>
                      <span className="text-sm text-gray-400">Sunday, 3:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Theme: Medieval Castles. Winners receive 5000 coins and special items.</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-purple-500">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Boss Raid Event</h3>
                      <span className="text-sm text-gray-400">Wednesday, 7:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Team up to defeat the Ender Dragon with custom abilities and mechanics.</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Server Maintenance</h3>
                      <span className="text-sm text-gray-400">Thursday, 4:00 AM</span>
                    </div>
                    <p className="text-sm mt-2">Scheduled restart for performance optimization. Expected downtime: 30 minutes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 max-w-4xl mx-auto">
          <Card className="minecraft-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                How to Connect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Server Address</h3>
                  <div className="flex items-center gap-2">
                    <code className="bg-black/30 px-3 py-2 rounded flex-grow">play.fusioncraft.net</code>
                    <Button variant="outline" onClick={() => {
                      navigator.clipboard.writeText('play.fusioncraft.net');
                      toast.success('Server address copied to clipboard!');
                    }}>
                      Copy
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Java Edition</h3>
                  <p>Version 1.19.2 (Supports 1.18 - 1.19.2)</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Bedrock Edition</h3>
                  <p>Use the same address with port 19132</p>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <p>Need help connecting? Join our Discord server for assistance from staff and community members.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServerInfo;
