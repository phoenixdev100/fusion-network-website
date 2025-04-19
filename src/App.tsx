
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import UserDashboard from "./pages/user/Dashboard";
import UserProfile from "./pages/user/Profile";
import ServerInfo from "./pages/ServerInfo";
import Store from "./pages/Store";
import LeaderBoard from "./pages/LeaderBoard";
import Rules from "./pages/Rules";
import Community from "./pages/Community";
import Support from "./pages/Support";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Content from "./pages/admin/Content";
import Server from "./pages/admin/Server";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/server-info" element={<ServerInfo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/content" element={<Content />} />
            <Route path="/admin/server" element={<Server />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
