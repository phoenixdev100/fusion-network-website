
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
  // Mock data for charts
  const visitorData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 1900 },
    { name: 'Mar', value: 1500 },
    { name: 'Apr', value: 2400 },
    { name: 'May', value: 2700 },
    { name: 'Jun', value: 3000 },
    { name: 'Jul', value: 2500 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin portal. Here's an overview of your website's performance.
        </p>
        
        {/* Stats cards */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            title="Total Users" 
            value="12,345" 
            description="Active users on the platform"
            change={15}
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard 
            title="Content Pieces" 
            value="348" 
            description="Articles, pages and posts"
            change={-3}
            icon={<FileText className="h-5 w-5" />}
          />
          <StatCard 
            title="Page Views" 
            value="87,429" 
            description="Total views this month"
            change={23}
            icon={<Eye className="h-5 w-5" />}
          />
        </div>
        
        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
            <CardDescription>Monthly visitor statistics</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '6px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
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
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>The latest actions on your website</CardDescription>
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
              View all activity
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
          <span className="text-muted-foreground ml-1">from last month</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const activityItems = [
  {
    title: "New user registered",
    description: "John Smith created a new account",
    time: "10 minutes ago",
    icon: <Users className="h-5 w-5 text-white" />,
    bgColor: "bg-blue-500"
  },
  {
    title: "Content updated",
    description: "Homepage hero section was modified",
    time: "2 hours ago",
    icon: <FileText className="h-5 w-5 text-white" />,
    bgColor: "bg-purple-500"
  },
  {
    title: "New comment",
    description: "Sarah left a comment on 'Our Services'",
    time: "5 hours ago",
    icon: <FileText className="h-5 w-5 text-white" />,
    bgColor: "bg-teal-500"
  },
  {
    title: "System update",
    description: "System was updated to version 2.1.0",
    time: "1 day ago",
    icon: <Settings className="h-5 w-5 text-white" />,
    bgColor: "bg-amber-500"
  },
];

export default Dashboard;
