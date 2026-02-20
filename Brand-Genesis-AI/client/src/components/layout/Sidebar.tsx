import { Link, useLocation } from "wouter";
import { Sparkles, LayoutDashboard, Type, Image as ImageIcon, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/app", icon: LayoutDashboard, label: "Overview" },
  { href: "/app/brand-generator", icon: Type, label: "Brand Naming" },
  { href: "/app/logo-creator", icon: ImageIcon, label: "Logo Creator" },
  { href: "/app/content-automation", icon: PenTool, label: "Content Automation" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 h-screen border-r border-border bg-sidebar flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center neon-glow">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">NexBrand AI</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          Tools
        </div>
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <a
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="glass-panel p-4 rounded-xl flex flex-col gap-3">
          <div className="text-sm font-medium">Credits Remaining</div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-3/4" />
          </div>
          <div className="text-xs text-muted-foreground text-right">75 / 100</div>
          <Button variant="outline" className="w-full mt-2 text-xs border-primary/30 hover:bg-primary/10">
            Upgrade Plan
          </Button>
        </div>
      </div>
    </aside>
  );
}