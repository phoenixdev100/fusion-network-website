
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { MessageCircle, Users, Award, Calendar, ExternalLink, Heart } from 'lucide-react';

const Community = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text minecraft-text">Community</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of players in our growing Minecraft community. Connect, share, and build together!
          </p>
        </div>

        {/* Discord Section */}
        <section className="mb-16">
          <Card className="overflow-hidden minecraft-border border-[#44A675] bg-black/40">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">JOIN OUR DISCORD</Badge>
                <CardTitle className="text-3xl mb-6 gradient-text">Connect with 10,000+ Players</CardTitle>
                <CardDescription className="text-lg mb-8 text-gray-300">
                  Our Discord server is the hub for all Fusion Network activities. Get support, join events, find teammates, and stay updated on the latest server news.
                </CardDescription>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-[#44A675]" />
                    <span>10,000+ members and growing daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-[#44A675]" />
                    <span>Active chat channels for every game mode</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-[#44A675]" />
                    <span>Weekly events and giveaways</span>
                  </div>
                </div>
                <Button className="mt-8 w-fit bg-[#7289DA] hover:bg-[#5e73bc]">
                  Join Our Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#7289DA]/30 to-[#5e73bc]/30 p-6 hidden md:flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY29yZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Discord Community" 
                  className="rounded-lg max-h-[400px] object-cover shadow-xl minecraft-border" 
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Forums Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Community Forums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} className="minecraft-border hover:border-[#3B82F6] transition-all duration-300 bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="outline" className="bg-[#1A1F2C]">{category.posts} posts</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {category.recentPosters.map((poster, i) => (
                        <Avatar key={i} className="border-2 border-background w-7 h-7">
                          <AvatarImage src={poster.avatar} />
                          <AvatarFallback>{poster.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#3B82F6]">
                      View Forum
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Community Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityBuilds.map((build, index) => (
              <Card key={index} className="overflow-hidden minecraft-border hover:shadow-[0_0_15px_rgba(68,166,117,0.4)] transition-all duration-300 bg-black/40">
                <img 
                  src={build.image} 
                  alt={build.title} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{build.title}</CardTitle>
                    <div className="flex items-center gap-1 text-pink-500">
                      <Heart size={16} />
                      <span className="text-sm">{build.likes}</span>
                    </div>
                  </div>
                  <CardDescription>by {build.creator}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-4">{build.description}</p>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#44A675] text-[#44A675]">
              View All Community Builds
            </Button>
          </div>
        </section>

        {/* Community Events */}
        <section>
          <h2 className="text-3xl font-bold mb-6 gradient-text">Upcoming Community Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden minecraft-border bg-black/40">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#1A1F2C] p-4 md:p-6 flex flex-col justify-center items-center md:w-1/5">
                    <span className="text-3xl font-bold text-[#3B82F6]">{event.date}</span>
                    <span className="text-xl text-gray-400">{event.month}</span>
                  </div>
                  <div className="p-4 md:p-6 md:w-4/5">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <Badge className="w-fit mt-2 md:mt-0 bg-[#44A675] hover:bg-[#44A675]/80">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-400">{event.participants} participants</span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-[#44A675] to-[#3B82F6] hover:opacity-90">
                        Join Event
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const forumCategories = [
  {
    title: "Survival Strategies",
    description: "Share your best survival tips, base designs, and farming techniques.",
    posts: 1254,
    recentPosters: [
      { name: "MineKing", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "DiamondDigger", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "CaveExplorer", avatar: "https://i.pravatar.cc/150?img=3" },
    ]
  },
  {
    title: "Redstone Creations",
    description: "Showcase your redstone builds, circuits, and automation systems.",
    posts: 876,
    recentPosters: [
      { name: "RedstoneWiz", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "CircuitMaster", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "AutoBuilder", avatar: "https://i.pravatar.cc/150?img=6" },
    ]
  },
  {
    title: "Creative Builds",
    description: "Show off your creative mode masterpieces and architectural designs.",
    posts: 2103,
    recentPosters: [
      { name: "MasterBuilder", avatar: "https://i.pravatar.cc/150?img=7" },
      { name: "ArchitectPro", avatar: "https://i.pravatar.cc/150?img=8" },
      { name: "WorldCrafter", avatar: "https://i.pravatar.cc/150?img=9" },
    ]
  },
  {
    title: "PVP Arena",
    description: "Discuss strategies, gear loadouts, and organize PVP tournaments.",
    posts: 945,
    recentPosters: [
      { name: "BattleMaster", avatar: "https://i.pravatar.cc/150?img=10" },
      { name: "PvPLegend", avatar: "https://i.pravatar.cc/150?img=11" },
      { name: "ArenaChamp", avatar: "https://i.pravatar.cc/150?img=12" },
    ]
  },
  {
    title: "Plugin Discussion",
    description: "Talk about server plugins, suggest new features, and report bugs.",
    posts: 723,
    recentPosters: [
      { name: "PluginDev", avatar: "https://i.pravatar.cc/150?img=13" },
      { name: "ServerAdmin", avatar: "https://i.pravatar.cc/150?img=14" },
      { name: "BugFinder", avatar: "https://i.pravatar.cc/150?img=15" },
    ]
  },
  {
    title: "Off-Topic",
    description: "Discuss anything not related to Minecraft in a friendly environment.",
    posts: 1587,
    recentPosters: [
      { name: "ChatMaster", avatar: "https://i.pravatar.cc/150?img=16" },
      { name: "FunnyGuy", avatar: "https://i.pravatar.cc/150?img=17" },
      { name: "CoolPlayer", avatar: "https://i.pravatar.cc/150?img=18" },
    ]
  },
];

const communityBuilds = [
  {
    title: "Floating Island Castle",
    creator: "MasterBuilder",
    description: "A magnificent castle built on a floating island with waterfalls cascading down the sides.",
    image: "https://images.unsplash.com/photo-1598010083192-c9f1b22e3b66?auto=format&fit=crop&w=800&q=60",
    likes: 342
  },
  {
    title: "Medieval Town",
    creator: "ArchitectPro",
    description: "A fully functional medieval town complete with marketplace, castle, and farmland.",
    image: "https://images.unsplash.com/photo-1587573089738-fdc833f22a01?auto=format&fit=crop&w=800&q=60",
    likes: 287
  },
  {
    title: "Redstone Computer",
    creator: "RedstoneWiz",
    description: "A working 8-bit computer built entirely with redstone components.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=60",
    likes: 156
  },
  {
    title: "Underwater Base",
    creator: "OceanExplorer",
    description: "A massive underwater base with glass domes and elaborate sea-themed decorations.",
    image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=60",
    likes: 203
  },
  {
    title: "Nether Fortress Redesign",
    creator: "NetherKnight",
    description: "A complete redesign of the nether fortress with additional structures and details.",
    image: "https://images.unsplash.com/photo-1511525499366-d27452310ddb?auto=format&fit=crop&w=800&q=60",
    likes: 178
  },
  {
    title: "Sky City",
    creator: "CloudBuilder",
    description: "An elaborate city built in the clouds with airships and floating islands.",
    image: "https://images.unsplash.com/photo-1568116307357-ec1dc8860bbd?auto=format&fit=crop&w=800&q=60",
    likes: 231
  }
];

const events = [
  {
    title: "Summer Build Contest",
    date: "15",
    month: "Jun",
    type: "Building Competition",
    description: "Showcase your building skills in our summer-themed building contest. The theme is 'Tropical Paradise'.",
    participants: 87
  },
  {
    title: "Survival Games Tournament",
    date: "22",
    month: "Jun",
    type: "PVP Tournament",
    description: "Battle against other players in our hunger games style tournament. Last player standing wins a special prize!",
    participants: 128
  },
  {
    title: "Redstone Workshop",
    date: "29",
    month: "Jun",
    type: "Workshop",
    description: "Learn advanced redstone techniques from our expert builders and engineers.",
    participants: 45
  },
  {
    title: "Server Anniversary Celebration",
    date: "05",
    month: "Jul",
    type: "Special Event",
    description: "Join us for our server's 3rd anniversary with special events, giveaways, and surprises all day long!",
    participants: 215
  }
];

export default Community;
