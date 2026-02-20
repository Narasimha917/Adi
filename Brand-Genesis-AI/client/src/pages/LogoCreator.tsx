import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Download, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import logo1 from "@/assets/images/logo-1.png";
import logo2 from "@/assets/images/logo-2.png";

export default function LogoCreator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setHasGenerated(false);
    
    // Simulate AI Generation
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold tracking-tight mb-2">Logo Creator</h1>
        <p className="text-muted-foreground">Generate professional, vector-style logos using AI.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 space-y-6">
          <form onSubmit={handleGenerate} className="glass-panel p-6 rounded-2xl border-white/10">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Brand Name</label>
                <Input 
                  data-testid="input-brand-name"
                  placeholder="NexBrand" 
                  className="bg-secondary/50 border-white/10 focus-visible:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Slogan (Optional)</label>
                <Input 
                  placeholder="Automate everything" 
                  className="bg-secondary/50 border-white/10 focus-visible:ring-accent"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Complexity</label>
                  <span className="text-xs text-muted-foreground">Minimal</span>
                </div>
                <Slider defaultValue={[33]} max={100} step={1} className="py-2" />
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Color Palette</label>
                <div className="flex gap-3">
                  {['#9d4edd', '#00b4d8', '#ff006e', '#ffffff'].map(color => (
                    <div 
                      key={color} 
                      className="w-8 h-8 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-white/50 transition-all border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border border-dashed border-white/30 flex items-center justify-center cursor-pointer hover:border-white">
                    <span className="text-lg leading-none">+</span>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isGenerating}
                data-testid="button-generate-logo"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 neon-glow-accent"
              >
                {isGenerating ? (
                  <span className="flex items-center animate-pulse">
                    <Sparkles className="w-4 h-4 mr-2" /> Crafting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" /> Generate Logos
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="md:col-span-8">
          <div className="h-full min-h-[500px] glass-panel p-8 rounded-2xl border-white/10 relative">
            {!hasGenerated && !isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-muted-foreground">
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6 border border-white/5 shadow-xl">
                  <LayoutTemplate className="w-10 h-10 opacity-40" />
                </div>
                <p className="text-lg max-w-md">Enter your brand details to generate 4 unique logo concepts.</p>
              </div>
            ) : isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 relative mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-accent animate-spin" />
                </div>
                <p className="text-accent animate-pulse font-medium">Training models...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 h-full">
                {[logo1, logo2, logo1, logo2].map((logo, i) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    key={i}
                    className="relative group rounded-xl overflow-hidden border border-white/5 bg-black"
                  >
                    <div className="aspect-square p-8 flex items-center justify-center">
                      <img src={logo} alt={`Concept ${i+1}`} className="w-full h-full object-contain" />
                    </div>
                    
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="default" className="rounded-full bg-accent hover:bg-accent/90">
                        Use Logo
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}