
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, AlertTriangle, HelpCircle, X, Download } from 'lucide-react';

const versions = [
  {
    version: "1.20.1",
    status: "recommended",
    features: "Full",
    notes: "Optimized for the best experience on our server with all features available.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.19.4",
    status: "supported",
    features: "Full",
    notes: "All features are supported, but 1.20.1 is recommended for the best experience.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.19.2",
    status: "supported",
    features: "Partial",
    notes: "Most features work, but some new items and blocks will appear differently.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.18.2",
    status: "legacy",
    features: "Basic",
    notes: "Basic gameplay works but many custom features are limited or unavailable.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.17.1",
    status: "deprecated",
    features: "Limited",
    notes: "Connection support only, many features will not work correctly.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.16.5",
    status: "deprecated",
    features: "Limited",
    notes: "Connection support only, many features will not work correctly.",
    clientDownloadUrl: "https://www.minecraft.net/en-us/download",
  },
  {
    version: "1.12.2 and older",
    status: "unsupported",
    features: "None",
    notes: "These versions cannot connect to our server.",
    clientDownloadUrl: null,
  },
];

const SupportedVersions = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center minecraft-text">Supported Minecraft Versions</h1>
        
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-6 border-fusion-accent bg-fusion-accent/10 animate-fade-in">
            <AlertTitle className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Recommended Version
            </AlertTitle>
            <AlertDescription>
              We recommend using Minecraft 1.20.1 for the best gameplay experience on Fusion Network.
            </AlertDescription>
          </Alert>
          
          <Card className="minecraft-border mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Version Compatibility Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Fusion Network uses modern Minecraft features to enhance your gameplay experience. We support multiple Minecraft versions through our custom server implementation, but functionality may vary depending on which version you use to connect.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-black/20 p-4 rounded-md">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Badge className="bg-green-600">Recommended</Badge>
                    </h3>
                    <p className="text-sm text-gray-400">Full feature support with all custom content working as designed.</p>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-md">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Badge className="bg-blue-600">Supported</Badge>
                    </h3>
                    <p className="text-sm text-gray-400">Most features work correctly, but some newer elements may have fallbacks.</p>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-md">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Badge className="bg-amber-600">Legacy</Badge>
                    </h3>
                    <p className="text-sm text-gray-400">Basic functionality works, but many custom features are limited or unavailable.</p>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-md">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Badge className="bg-gray-600">Deprecated</Badge>
                    </h3>
                    <p className="text-sm text-gray-400">Can connect to server but with very limited functionality. Not recommended.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-4">
            {versions.map((version) => (
              <Card 
                key={version.version}
                className={`minecraft-border ${
                  version.status === 'recommended' ? 'border-green-600/30 bg-gradient-to-br from-green-900/10 to-green-800/5' : 
                  version.status === 'unsupported' ? 'border-red-600/30 bg-gradient-to-br from-red-900/10 to-red-800/5' : 
                  ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">Minecraft {version.version}</h3>
                        {version.status === 'recommended' && (
                          <Badge className="bg-green-600">Recommended</Badge>
                        )}
                        {version.status === 'supported' && (
                          <Badge className="bg-blue-600">Supported</Badge>
                        )}
                        {version.status === 'legacy' && (
                          <Badge className="bg-amber-600">Legacy</Badge>
                        )}
                        {version.status === 'deprecated' && (
                          <Badge className="bg-gray-600">Deprecated</Badge>
                        )}
                        {version.status === 'unsupported' && (
                          <Badge className="bg-red-600">Unsupported</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Feature Support:</span>
                      <Badge variant="outline" className={
                        version.features === "Full" ? "border-green-500 text-green-500" :
                        version.features === "Partial" ? "border-blue-500 text-blue-500" :
                        version.features === "Basic" ? "border-amber-500 text-amber-500" :
                        version.features === "Limited" ? "border-gray-500 text-gray-400" :
                        "border-red-500 text-red-500"
                      }>
                        {version.features}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-2">{version.notes}</p>
                  
                  <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      {version.status === 'recommended' || version.status === 'supported' ? (
                        <span className="flex items-center gap-1 text-green-500">
                          <Check size={16} /> Fully compatible
                        </span>
                      ) : version.status === 'legacy' ? (
                        <span className="flex items-center gap-1 text-amber-500">
                          <Clock size={16} /> Limited compatibility
                        </span>
                      ) : version.status === 'deprecated' ? (
                        <span className="flex items-center gap-1 text-gray-500">
                          <AlertTriangle size={16} /> Minimal compatibility
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-500">
                          <X size={16} /> Not compatible
                        </span>
                      )}
                    </div>
                    
                    {version.clientDownloadUrl && (
                      <a 
                        href={version.clientDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-fusion-primary hover:underline"
                      >
                        <Download size={14} />
                        Download client
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="minecraft-border mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Bedrock Edition Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Fusion Network supports Bedrock Edition players using version 1.20.0 and newer through our GeyserMC integration.</p>
                
                <div className="bg-black/20 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Bedrock Connection Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Server Address</p>
                      <code className="bg-black/30 px-2 py-1 rounded text-sm">be.fusion-network.xyz</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Port</p>
                      <code className="bg-black/30 px-2 py-1 rounded text-sm">19132</code>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-md">
                  <p className="flex items-center gap-2 text-sm">
                    <AlertTriangle size={16} className="text-yellow-500" />
                    <span>Some Java Edition features may have limited functionality when connecting with Bedrock Edition.</span>
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

export default SupportedVersions;
