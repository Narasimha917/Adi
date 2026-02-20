import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Copy, RefreshCw, PenTool } from "lucide-react";

export default function ContentAutomation() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOutput(`🚀 Introducing NexBrand AI - The Future of Branding\n\nAre you tired of spending weeks iterating on logos and brand names? We've built the ultimate solution for startups and creators.\n\nOur new generative platform allows you to:\n✨ Create memorable brand names instantly\n🎨 Generate vector-ready logos\n✍️ Automate your marketing copy\n\nStop assembling. Start crafting. Join the waitlist today and elevate your brand identity.\n\n#GenerativeAI #Branding #Startup #Tech`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold tracking-tight mb-2">Content Automation</h1>
        <p className="text-muted-foreground">Draft brand-aligned social posts, emails, and marketing copy.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-[600px]">
        {/* Editor Side */}
        <div className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col h-full">
          <div className="space-y-5 flex-1">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Content Type</label>
              <Select defaultValue="social">
                <SelectTrigger className="bg-secondary/50 border-white/10">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social Media Post</SelectItem>
                  <SelectItem value="email">Email Newsletter</SelectItem>
                  <SelectItem value="website">Website Hero Copy</SelectItem>
                  <SelectItem value="ad">Ad Copy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Tone of Voice</label>
              <Select defaultValue="professional">
                <SelectTrigger className="bg-secondary/50 border-white/10">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional & Authoritative</SelectItem>
                  <SelectItem value="friendly">Friendly & Approachable</SelectItem>
                  <SelectItem value="bold">Bold & Edgy</SelectItem>
                  <SelectItem value="witty">Witty & Humorous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm font-medium mb-1.5 block">What do you want to say?</label>
              <Textarea 
                placeholder="We are launching a new AI branding tool next week..." 
                className="bg-secondary/50 border-white/10 flex-1 resize-none focus-visible:ring-yellow-400"
              />
            </div>
          </div>

          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            data-testid="button-generate-content"
            className="w-full mt-6 bg-yellow-400 text-black hover:bg-yellow-500 neon-glow"
          >
            {isGenerating ? (
              <span className="flex items-center animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" /> Writing...
              </span>
            ) : (
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" /> Generate Copy
              </span>
            )}
          </Button>
        </div>

        {/* Output Side */}
        <div className="glass-panel p-0 rounded-2xl border-white/10 flex flex-col h-full overflow-hidden relative">
          <div className="bg-secondary/80 border-b border-white/5 p-4 flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2">
              <PenTool className="w-4 h-4 text-yellow-400" /> Output
            </h3>
            {output && (
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-white">
                  <RefreshCw className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:text-white"
                  onClick={() => navigator.clipboard.writeText(output)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex-1 p-6 overflow-auto">
            {output ? (
              <div className="prose prose-invert max-w-none">
                <p className="whitespace-pre-wrap text-lg leading-relaxed">{output}</p>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                <PenTool className="w-12 h-12 mb-4" />
                <p>Your generated content will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}