
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Info, Package, Check, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const requiredMods = [
  {
    name: 'Forge API',
    version: '47.1.0',
    description: 'The core modding API that provides functionality for other mods to work properly.',
    downloadUrl: 'https://files.minecraftforge.net/net/minecraftforge/forge/',
    required: true,
    type: 'core',
    size: '5.2 MB',
  },
  {
    name: 'FusionCore',
    version: '2.4.3',
    description: 'Custom server-side mod required to connect to Fusion Network. Enhances gameplay with server-specific features.',
    downloadUrl: '#',
    required: true,
    type: 'core',
    size: '3.7 MB',
  },
  {
    name: 'OptiFine',
    version: 'HD U H8',
    description: 'Optimization mod that increases performance and allows for better graphics settings.',
    downloadUrl: 'https://optifine.net/downloads',
    required: false,
    type: 'optimization',
    size: '7.8 MB',
  },
  {
    name: 'JEI (Just Enough Items)',
    version: '11.5.0.297',
    description: 'View recipes for items and blocks in-game with an enhanced inventory interface.',
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/jei',
    required: false,
    type: 'utility',
    size: '4.2 MB',
  },
  {
    name: 'Xaero\'s Minimap',
    version: '23.4.4',
    description: 'Adds an in-game minimap to help navigate the server world.',
    downloadUrl: 'https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap',
    required: false,
    type: 'utility',
    size: '2.8 MB',
  },
  {
    name: 'FusionTextures',
    version: '1.5.0',
    description: 'Custom resource pack for enhanced server textures and effects.',
    downloadUrl: '#',
    required: false,
    type: 'cosmetic',
    size: '18.3 MB',
  },
];

const RequiredMods = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center minecraft-text">Required Mods</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="minecraft-border mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Installation Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2">1. Install Forge</h3>
                  <p className="text-sm text-gray-400">Download and install Forge 47.1.0 for Minecraft 1.20.1 from the official Forge website.</p>
                </div>
                
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2">2. Download Required Mods</h3>
                  <p className="text-sm text-gray-400">Download all required mods (marked with Required badge) and place them in your mods folder.</p>
                </div>
                
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2">3. Download Optional Mods</h3>
                  <p className="text-sm text-gray-400">We recommend installing the optional mods for the best experience on our server.</p>
                </div>
                
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2">4. Launch Minecraft with Forge</h3>
                  <p className="text-sm text-gray-400">Start your Minecraft launcher, select the Forge profile, and connect to fusion-network.xyz.</p>
                </div>
                
                <div className="bg-fusion-primary/20 border border-fusion-primary/30 p-4 rounded-md">
                  <p className="flex items-center gap-2">
                    <Check size={16} className="text-fusion-primary" />
                    <span>Need help? Join our Discord server for installation assistance.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 minecraft-border">
              <TabsTrigger value="all">All Mods</TabsTrigger>
              <TabsTrigger value="required">Required</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="utility">Utility</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid gap-4">
                {requiredMods.map((mod) => (
                  <ModCard key={mod.name} mod={mod} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="required">
              <div className="grid gap-4">
                {requiredMods.filter(mod => mod.required).map((mod) => (
                  <ModCard key={mod.name} mod={mod} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="optimization">
              <div className="grid gap-4">
                {requiredMods.filter(mod => mod.type === 'optimization').map((mod) => (
                  <ModCard key={mod.name} mod={mod} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="utility">
              <div className="grid gap-4">
                {requiredMods.filter(mod => mod.type === 'utility').map((mod) => (
                  <ModCard key={mod.name} mod={mod} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Card className="minecraft-border animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Mod Compatibility Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">Our server is compatible with most client-side mods, but some mods may cause issues with server functionality. Here are some important notes:</p>
                
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Anti-cheat mods that modify player movement or interactions may trigger our server's protection systems.</li>
                  <li>Performance mods like Sodium and Lithium are compatible and encouraged for better gameplay experience.</li>
                  <li>Map mods that reveal ores or hidden players are not allowed on our server.</li>
                  <li>Always ensure you're using the correct version of each mod for Minecraft 1.20.1.</li>
                  <li>If you experience crashes, try removing recently added mods one by one to identify conflicts.</li>
                </ul>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-md text-sm">
                  <p className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-yellow-500" />
                    <span>Fusion Network reserves the right to update required mods at any time. Check back regularly for updates.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

const ModCard = ({ mod }: { mod: any }) => {
  return (
    <Card className="minecraft-border hover:border-fusion-accent/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold">{mod.name}</h3>
              {mod.required ? (
                <Badge className="bg-fusion-primary text-white">Required</Badge>
              ) : (
                <Badge variant="outline" className="text-gray-400">Optional</Badge>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-1">{mod.description}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={mod.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Download size={14} />
              Download
            </a>
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Package size={14} />
            <span>v{mod.version}</span>
          </div>
          <div>Size: {mod.size}</div>
          <div className="capitalize">{mod.type}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequiredMods;
