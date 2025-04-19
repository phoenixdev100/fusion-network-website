
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Trash2, Edit, Plus } from 'lucide-react';
import { useState } from 'react';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Content Management</h1>
            <p className="text-muted-foreground">
              Manage your server's announcements, rules, and pages.
            </p>
          </div>
          <Button className="self-start flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Create Content</span>
          </Button>
        </div>
        
        <div className="flex items-center">
          <Input 
            placeholder="Search content..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="rules">Server Rules</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <ContentList items={allContent} />
          </TabsContent>
          <TabsContent value="announcements" className="mt-6">
            <ContentList items={allContent.filter(item => item.type === 'announcement')} />
          </TabsContent>
          <TabsContent value="rules" className="mt-6">
            <ContentList items={allContent.filter(item => item.type === 'rules')} />
          </TabsContent>
          <TabsContent value="pages" className="mt-6">
            <ContentList items={allContent.filter(item => item.type === 'page')} />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

interface ContentItemProps {
  id: number;
  title: string;
  type: 'announcement' | 'rules' | 'page';
  author: string;
  status: 'published' | 'draft';
  lastUpdated: string;
}

const ContentList = ({ items }: { items: ContentItemProps[] }) => {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                    <div>
                      Type: <span className="capitalize">{item.type}</span>
                    </div>
                    <div>
                      Author: {item.author}
                    </div>
                    <div>
                      Last updated: {item.lastUpdated}
                    </div>
                    <div>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

const allContent: ContentItemProps[] = [
  {
    id: 1,
    title: "Server Maintenance Announcement",
    type: "announcement",
    author: "ServerAdmin",
    status: "published",
    lastUpdated: "2 hours ago"
  },
  {
    id: 2,
    title: "New Survival World Opening",
    type: "announcement",
    author: "EventCoordinator",
    status: "draft",
    lastUpdated: "1 day ago"
  },
  {
    id: 3,
    title: "Server Rules and Guidelines",
    type: "rules",
    author: "ModTeam",
    status: "published",
    lastUpdated: "1 week ago"
  },
  {
    id: 4,
    title: "About Our Server",
    type: "page",
    author: "ServerAdmin",
    status: "published",
    lastUpdated: "3 weeks ago"
  },
  {
    id: 5,
    title: "Staff Application Process",
    type: "page",
    author: "ServerAdmin",
    status: "published",
    lastUpdated: "1 month ago"
  }
];

export default Content;
