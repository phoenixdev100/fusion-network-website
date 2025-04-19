
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { 
  Server, 
  Users, 
  Clock, 
  HardDrive, 
  Cpu, 
  Activity,
  Calendar,
  Globe,
  Shield,
  Puzzle,
  Gem,
  MessageSquare,
  Gamepad2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ServerInfo = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text text-center minecraft-text">Server Information</h1>
        <p className="text-center text-gray-400 mb-8">Everything you need to know about the Fusion Network server</p>

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
                <div className="grid gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden minecraft-border">
                        <div className="absolute inset-0 bg-gradient-to-br from-fusion-primary to-fusion-secondary animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Gamepad2 className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Fusion Network</h3>
                        <div className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span className="text-green-500 text-sm font-medium">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:text-center">
                      <div className="bg-black/20 p-3 rounded-md">
                        <div className="text-sm text-gray-400">Players</div>
                        <div className="font-bold text-lg">86/200</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded-md">
                        <div className="text-sm text-gray-400">TPS</div>
                        <div className="font-bold text-lg">19.8</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded-md">
                        <div className="text-sm text-gray-400">Uptime</div>
                        <div className="font-bold text-lg">15d 7h</div>
                      </div>
                    </div>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-black/20 p-4 rounded-md border-l-4 border-green-500">
                      <h3 className="font-medium text-lg mb-2">Game Modes</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline" className="justify-center">Survival</Badge>
                        <Badge variant="outline" className="justify-center">Skyblock</Badge>
                        <Badge variant="outline" className="justify-center">Creative</Badge>
                        <Badge variant="outline" className="justify-center">Minigames</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-black/20 p-4 rounded-md border-l-4 border-blue-500">
                      <h3 className="font-medium text-lg mb-2">Next Events</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>PvP Tournament</span>
                          <span className="text-gray-400">In 3 hours</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Build Competition</span>
                          <span className="text-gray-400">Tomorrow</span>
                        </div>
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
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
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
                    
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Server className="h-4 w-4" />
                        Software
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Version</span>
                          <span>Paper 1.20.1</span>
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Anti-Cheat
                      </h3>
                      <p className="text-sm text-gray-400">Advanced anti-cheat system with machine learning detection for a fair gameplay experience.</p>
                      <div className="mt-2">
                        <Badge className="bg-green-600">Matrix</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Cross-Platform
                      </h3>
                      <p className="text-sm text-gray-400">Support for both Java and Bedrock Edition players with seamless integration.</p>
                      <div className="mt-2">
                        <Badge className="bg-blue-600">GeyserMC</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Performance
                      </h3>
                      <p className="text-sm text-gray-400">Optimized for high performance with minimal lag and server-side resource management.</p>
                      <div className="mt-2">
                        <Badge className="bg-purple-600">19.8 TPS</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg mt-4 minecraft-border">
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
                <CardTitle className="flex items-center gap-2">
                  <Puzzle className="h-5 w-5" />
                  Server Plugins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2">Protection & Management</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>WorldGuard - Region protection</li>
                        <li>CoreProtect - Block logging</li>
                        <li>LuckPerms - Permissions system</li>
                        <li>Essentials - Basic server commands</li>
                        <li>Vault - Economy API</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
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
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
                      <h3 className="text-lg font-medium mb-2">User Experience</h3>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>TAB - Custom tab menus</li>
                        <li>ServerNPC - Interactive NPCs</li>
                        <li>BetterChat - Chat formatting</li>
                        <li>DeluxeMenus - Custom GUIs</li>
                        <li>ImageOnMap - Custom images on maps</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg minecraft-border">
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
                  
                  <div className="bg-gradient-to-r from-fusion-primary/20 to-fusion-secondary/20 p-4 rounded-lg mt-4 minecraft-border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Custom Plugins</h3>
                      <Badge className="bg-fusion-accent">Exclusive</Badge>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      We've developed several custom plugins exclusively for Fusion Network to enhance your gameplay experience.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionEconomy</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionQuests</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionRanks</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionEvents</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionCrates</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <span className="text-sm">FusionPets</span>
                      </div>
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
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-blue-500 minecraft-border">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">PvP Tournament</h3>
                      <span className="text-sm text-gray-400">Saturday, 8:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Join our weekly PvP tournament with amazing prizes! Sign up at spawn.</p>
                    <div className="mt-3">
                      <Badge className="bg-blue-600">Weekly</Badge>
                      <Badge variant="outline" className="ml-2">50,000 Coins Prize</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-green-500 minecraft-border">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Build Competition</h3>
                      <span className="text-sm text-gray-400">Sunday, 3:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Theme: Medieval Castles. Winners receive 5000 coins and special items.</p>
                    <div className="mt-3">
                      <Badge className="bg-green-600">Monthly</Badge>
                      <Badge variant="outline" className="ml-2">Creative Mode</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-purple-500 minecraft-border">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Boss Raid Event</h3>
                      <span className="text-sm text-gray-400">Wednesday, 7:00 PM</span>
                    </div>
                    <p className="text-sm mt-2">Team up to defeat the Ender Dragon with custom abilities and mechanics.</p>
                    <div className="mt-3">
                      <Badge className="bg-purple-600">Weekly</Badge>
                      <Badge variant="outline" className="ml-2">Rare Drops</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border-l-4 border-yellow-500 minecraft-border">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">Server Maintenance</h3>
                      <span className="text-sm text-gray-400">Thursday, 4:00 AM</span>
                    </div>
                    <p className="text-sm mt-2">Scheduled restart for performance optimization. Expected downtime: 30 minutes.</p>
                    <div className="mt-3">
                      <Badge className="bg-yellow-500">Maintenance</Badge>
                    </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Java Edition</h3>
                    <div className="p-4 bg-black/30 rounded-md minecraft-border">
                      <p className="text-sm mb-2">Primary Address:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-black/30 px-3 py-2 rounded flex-grow minecraft-text">fusion-network.xyz</code>
                        <Button variant="outline" onClick={() => {
                          navigator.clipboard.writeText('fusion-network.xyz');
                          toast.success('Server address copied to clipboard!');
                        }}>
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm mt-4 mb-2">Alternative Address:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-black/30 px-3 py-2 rounded flex-grow minecraft-text">as.fusion-network.xyz</code>
                        <Button variant="outline" onClick={() => {
                          navigator.clipboard.writeText('as.fusion-network.xyz');
                          toast.success('Server address copied to clipboard!');
                        }}>
                          Copy
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Supported versions: 1.18 - 1.20.1 (1.20.1 recommended)</p>
                    <Link to="/versions" className="text-fusion-primary text-sm hover:underline">View all supported versions</Link>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg">
                    <h3 className="font-medium mb-2">Required Mods</h3>
                    <p className="text-sm">Some mods are required to join our server and enhance your gameplay experience.</p>
                    <div className="mt-3">
                      <Link to="/required-mods">
                        <Button size="sm" className="bg-gradient-to-r from-[#44A675] to-[#3B82F6] minecraft-border">
                          View Required Mods
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Bedrock Edition</h3>
                    <div className="p-4 bg-black/30 rounded-md minecraft-border">
                      <p className="text-sm mb-2">Server Address:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-black/30 px-3 py-2 rounded flex-grow minecraft-text">be.fusion-network.xyz</code>
                        <Button variant="outline" onClick={() => {
                          navigator.clipboard.writeText('be.fusion-network.xyz');
                          toast.success('Server address copied to clipboard!');
                        }}>
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm mt-4 mb-2">Port:</p>
                      <div className="flex items-center gap-2">
                        <code className="bg-black/30 px-3 py-2 rounded flex-grow minecraft-text">19132</code>
                        <Button variant="outline" onClick={() => {
                          navigator.clipboard.writeText('19132');
                          toast.success('Port number copied to clipboard!');
                        }}>
                          Copy
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Supported versions: 1.20.0 and newer</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg">
                    <h3 className="font-medium mb-2">Connection Issues?</h3>
                    <p className="text-sm">If you're having trouble connecting to our server, check our troubleshooting guide or contact support.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link to="/support">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Get Support
                        </Button>
                      </Link>
                      <Link to="/community">
                        <Button size="sm" variant="outline">
                          <Users className="h-4 w-4 mr-1" />
                          Join Discord
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700 grid gap-4 md:grid-cols-3">
                <Link to="/vote">
                  <Card className="bg-gradient-to-br from-[#44A675]/20 to-[#3B82F6]/20 hover:from-[#44A675]/30 hover:to-[#3B82F6]/30 transition-all cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <Gem className="h-8 w-8 mb-2 text-yellow-500" />
                      <h3 className="font-medium">Vote for Rewards</h3>
                      <p className="text-xs text-gray-400 mt-1">Vote daily for special in-game rewards</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/store">
                  <Card className="bg-gradient-to-br from-[#44A675]/20 to-[#3B82F6]/20 hover:from-[#44A675]/30 hover:to-[#3B82F6]/30 transition-all cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <Gem className="h-8 w-8 mb-2 text-green-500" />
                      <h3 className="font-medium">Store</h3>
                      <p className="text-xs text-gray-400 mt-1">Support the server and get exclusive perks</p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/leaderboard">
                  <Card className="bg-gradient-to-br from-[#44A675]/20 to-[#3B82F6]/20 hover:from-[#44A675]/30 hover:to-[#3B82F6]/30 transition-all cursor-pointer h-full">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <Gem className="h-8 w-8 mb-2 text-blue-500" />
                      <h3 className="font-medium">Leaderboard</h3>
                      <p className="text-xs text-gray-400 mt-1">See the top players on the server</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServerInfo;
