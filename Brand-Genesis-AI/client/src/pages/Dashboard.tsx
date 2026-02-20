import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Activity, Type, Image as ImageIcon, PenTool, ArrowUpRight } from "lucide-react";
import logo1 from "@/assets/images/logo-1.png";
import logo2 from "@/assets/images/logo-2.png";

export default function Dashboard() {
  const stats = [
    { label: "Total Generations", value: "142", icon: Activity, change: "+12%" },
    { label: "Saved Names", value: "8", icon: Type, change: "+2" },
    { label: "Logo Assets", value: "24", icon: ImageIcon, change: "+5" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back, Creator</h1>
          <p className="text-muted-foreground">Here's what's happening with your brands today.</p>
        </div>
        <Button variant="outline" className="border-white/10 hover:bg-white/5">
          View Documentation
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="glass-panel border-white/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-accent">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>{stat.change} this week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold">Quick Generators</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/app/brand-generator">
              <a className="block p-6 rounded-2xl glass-panel border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Type className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Name Generator</h3>
                <p className="text-sm text-muted-foreground">Create catchy, available brand names from keywords.</p>
              </a>
            </Link>
            <Link href="/app/logo-creator">
              <a className="block p-6 rounded-2xl glass-panel border border-white/5 hover:border-accent/50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Logo Creator</h3>
                <p className="text-sm text-muted-foreground">Generate vector-style logos tailored to your brand.</p>
              </a>
            </Link>
          </div>

          <Link href="/app/content-automation">
            <a className="block p-6 rounded-2xl glass-panel border border-white/5 hover:border-yellow-400/50 transition-all group mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PenTool className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Content Automation</h3>
                    <p className="text-sm text-muted-foreground">Draft social posts and marketing copy.</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </div>
            </a>
          </Link>
        </div>

        {/* Recent Assets */}
        <div>
          <h2 className="text-xl font-bold mb-6">Recent Assets</h2>
          <div className="space-y-4">
            {[logo1, logo2].map((logo, i) => (
              <div key={i} className="glass-panel p-3 rounded-xl border border-white/5 flex items-center gap-4 group cursor-pointer hover:border-white/20">
                <img src={logo} alt="Generated Logo" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h4 className="font-semibold text-sm">Project Omega</h4>
                  <p className="text-xs text-muted-foreground">Generated 2h ago</p>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-muted-foreground hover:text-white mt-2">
              View All History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}