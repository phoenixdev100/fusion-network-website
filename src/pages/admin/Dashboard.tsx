
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Eye, ArrowUp, ArrowDown, Settings, Server, Zap, Clock } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const playerData = [
    { name: 'Mon', value: 48 },
    { name: 'Tue', value: 62 },
    { name: 'Wed', value: 51 },
    { name: 'Thu', value: 88 },
    { name: 'Fri', value: 103 },
    { name: 'Sat', value: 142 },
    { name: 'Sun', value: 125 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Server Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your Minecraft server control panel. Monitor performance and player activity.
        </p>
        
        {/* Stats cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Online Players" 
            value="42" 
            description="Currently active on the server"
            change={8}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard 
            title="Server Uptime" 
            value="99.8%" 
            description="Last 30 days"
            change={0.2}
            icon={<Server className="h-5 w-5" />}
          />
          <StatCard 
            title="TPS" 
            value="19.8" 
            description="Ticks per second"
            change={-0.1}
            icon={<Zap className="h-5 w-5" />}
          />
          <StatCard 
            title="Average Playtime" 
            value="2.4h" 
            description="Per player this week"
            change={0.3}
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
        
        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Player Activity</CardTitle>
            <CardDescription>Daily active players this week</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={playerData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '6px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#60A5FA" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle>Server Activity</CardTitle>
            <CardDescription>The latest events on your Minecraft server</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <a href="#" className="text-sm text-primary hover:underline">
              View all server logs
            </a>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  change: number;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, description, change, icon }: StatCardProps) => {
  const isPositive = change > 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="border-t p-2">
        <div className="flex items-center text-sm">
          {isPositive ? (
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {Math.abs(change)}% {isPositive ? "increase" : "decrease"}
          </span>
          <span className="text-muted-foreground ml-1">from yesterday</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const activityItems = [
  {
    title: "New player joined",
    description: "MinecraftPro123 joined the server for the first time",
    time: "10 minutes ago",
    icon: <Users className="h-5 w-5 text-white" />,
    bgColor: "bg-blue-500"
  },
  {
    title: "World backup",
    description: "Automatic world backup completed successfully",
    time: "2 hours ago",
    icon: <FileText className="h-5 w-5 text-white" />,
    bgColor: "bg-green-500"
  },
  {
    title: "Player report",
    description: "DiamondMiner filed a report against TNTLover",
    time: "5 hours ago",
    icon: <FileText className="h-5 w-5 text-white" />,
    bgColor: "bg-amber-500"
  },
  {
    title: "Server restart",
    description: "Scheduled server maintenance completed",
    time: "1 day ago",
    icon: <Settings className="h-5 w-5 text-white" />,
    bgColor: "bg-purple-500"
  },
];

export default Dashboard;
