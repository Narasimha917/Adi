import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Copy, Check, Globe, Type } from "lucide-react";
import { motion } from "framer-motion";

const mockResults = [
  { name: "Lumina", available: true },
  { name: "NexusFlow", available: false },
  { name: "Synapse", available: true },
  { name: "AeroGen", available: true },
  { name: "Vortexa", available: true },
  { name: "OmniSpark", available: false },
];

export default function BrandGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<{name: string, available: boolean}[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setResults([]);
    
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold tracking-tight mb-2">Brand Naming</h1>
        <p className="text-muted-foreground">Generate catchy, memorable brand names based on your industry and keywords.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-6">
          <form onSubmit={handleGenerate} className="glass-panel p-6 rounded-2xl border-white/10">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Industry / Niche</label>
                <Input 
                  data-testid="input-industry"
                  placeholder="e.g. Artificial Intelligence, SaaS" 
                  className="bg-secondary/50 border-white/10 focus-visible:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1.5 block">Description & Keywords</label>
                <Textarea 
                  data-testid="textarea-keywords"
                  placeholder="Describe your product, its vibe, target audience..." 
                  className="bg-secondary/50 border-white/10 focus-visible:ring-primary min-h-[120px]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Brand Style</label>
                <div className="flex flex-wrap gap-2">
                  {["Modern", "Playful", "Corporate", "Abstract", "Tech"].map((style) => (
                    <Badge 
                      key={style} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/20 hover:border-primary border-white/10 bg-secondary"
                    >
                      {style}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isGenerating}
                data-testid="button-generate-names"
                className="w-full mt-4 bg-primary text-white hover:bg-primary/90 neon-glow"
              >
                {isGenerating ? (
                  <span className="flex items-center animate-pulse">
                    <Sparkles className="w-4 h-4 mr-2" /> Generating...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" /> Generate Names
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>

        <div className="md:col-span-7">
          <div className="h-full min-h-[400px] glass-panel p-6 rounded-2xl border-white/10 relative overflow-hidden">
            {results.length === 0 && !isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-muted-foreground">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 border border-white/5">
                  <Type className="w-8 h-8 opacity-50" />
                </div>
                <p>Fill out the form to generate unique brand names.</p>
              </div>
            ) : isGenerating ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" /> Generated Results
                </h3>
                <div className="grid gap-3">
                  {results.map((result, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={i}
                    >
                      <Card className="bg-secondary/40 border-white/5 hover:border-white/20 transition-colors">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-xl font-display font-bold text-white">{result.name}</span>
                            <Badge 
                              variant={result.available ? "default" : "secondary"}
                              className={result.available ? "bg-accent/20 text-accent hover:bg-accent/30" : "opacity-50"}
                            >
                              <Globe className="w-3 h-3 mr-1" />
                              {result.available ? ".com Available" : "Taken"}
                            </Badge>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-white"
                            onClick={() => copyToClipboard(result.name, i)}
                          >
                            {copiedIndex === i ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}