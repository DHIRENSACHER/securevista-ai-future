import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Eye, 
  DoorOpen, 
  Bell, 
  Users, 
  Shield, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  LogOut,
  Settings
} from "lucide-react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@securevista.ai",
    role: "Security Administrator"
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Dashboard Header */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Security Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Welcome back, {user.name} | {user.role}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="glass-card p-3 hover:bg-card/60 transition-colors">
                <Settings className="h-5 w-5 text-foreground" />
              </button>
              <button className="glass-card p-3 hover:bg-card/60 transition-colors">
                <Bell className="h-5 w-5 text-foreground" />
              </button>
              <Link to="/login" className="glass-card p-3 hover:bg-card/60 transition-colors">
                <LogOut className="h-5 w-5 text-foreground" />
              </Link>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Active Cameras */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Cameras</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm text-green-500">All systems operational</span>
              </div>
            </div>

            {/* Active Alerts */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Alerts</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <AlertTriangle className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-primary">2 high priority</span>
              </div>
            </div>

            {/* Personnel Online */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Personnel Online</p>
                  <p className="text-2xl font-bold text-foreground">18</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Activity className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-sm text-blue-500">6 on patrol</span>
              </div>
            </div>

            {/* System Status */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">System Status</p>
                  <p className="text-2xl font-bold text-green-500">Secure</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm text-green-500">99.9% uptime</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Surveillance Card */}
            <div className="glass-card p-8 surveillance-glow group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Surveillance Center</h3>
                    <p className="text-muted-foreground">Monitor live feeds and AI detection</p>
                  </div>
                </div>
                <div className="pulse-scarlet w-4 h-4 bg-primary rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Live Cameras</span>
                  <span className="text-primary font-semibold">24 Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">AI Detection Events</span>
                  <span className="text-primary font-semibold">127 Today</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Storage Usage</span>
                  <span className="text-primary font-semibold">78% Used</span>
                </div>
              </div>

              <button className="w-full mt-6 btn-surveillance">
                Access Surveillance
              </button>
            </div>

            {/* Entrance/Exit Manager Card */}
            <div className="glass-card p-8 surveillance-glow group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/30 rounded-xl flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                    <DoorOpen className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Access Control</h3>
                    <p className="text-muted-foreground">Manage entry logs and alerts</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Today's Entries</span>
                  <span className="text-secondary font-semibold">342 Logs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Unauthorized Attempts</span>
                  <span className="text-secondary font-semibold">3 Blocked</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Active Badges</span>
                  <span className="text-secondary font-semibold">1,247 Valid</span>
                </div>
              </div>

              <button className="w-full mt-6 btn-ghost-surveillance">
                Manage Access
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Recent Security Events</h3>
            <div className="space-y-4">
              {[
                {
                  time: "2 minutes ago",
                  event: "Motion detected in Sector 7",
                  type: "detection",
                  status: "resolved"
                },
                {
                  time: "15 minutes ago",
                  event: "Unauthorized access attempt at Main Gate",
                  type: "alert",
                  status: "investigating"
                },
                {
                  time: "32 minutes ago",
                  event: "Camera maintenance completed in Zone A",
                  type: "maintenance",
                  status: "completed"
                },
                {
                  time: "1 hour ago",
                  event: "New personnel badge activated",
                  type: "access",
                  status: "completed"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === "alert" ? "bg-primary" :
                      activity.type === "detection" ? "bg-yellow-500" :
                      "bg-green-500"
                    }`}></div>
                    <div>
                      <p className="text-foreground font-medium">{activity.event}</p>
                      <p className="text-muted-foreground text-sm">{activity.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activity.status === "resolved" ? "bg-green-500/20 text-green-500" :
                    activity.status === "investigating" ? "bg-primary/20 text-primary" :
                    "bg-blue-500/20 text-blue-500"
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;