import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import BrandGenerator from "@/pages/BrandGenerator";
import LogoCreator from "@/pages/LogoCreator";
import ContentAutomation from "@/pages/ContentAutomation";
import { Sidebar } from "@/components/layout/Sidebar";

// Layout wrapper for the app interface
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* App Routes wrapped in Sidebar layout */}
      <Route path="/app">
        <AppLayout><Dashboard /></AppLayout>
      </Route>
      <Route path="/app/brand-generator">
        <AppLayout><BrandGenerator /></AppLayout>
      </Route>
      <Route path="/app/logo-creator">
        <AppLayout><LogoCreator /></AppLayout>
      </Route>
      <Route path="/app/content-automation">
        <AppLayout><ContentAutomation /></AppLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;