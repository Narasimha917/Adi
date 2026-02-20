import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@/assets/images/hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="AI Neural Network Background" 
            className="w-full h-full object-cover opacity-20 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Future of Branding is Generative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
          >
            Create Your Brand Identity <br />
            <span className="text-gradient">in Seconds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Automate brand naming, logo creation, and content generation with our integrated AI-driven workflow. Built for startups and creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/app">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white neon-glow rounded-full group">
                Start Generating For Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/5">
              View Examples
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Integrated AI Workflow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Everything you need to build and scale your brand identity, powered by advanced generative models.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Instant Brand Naming",
                desc: "Describe your vision and let AI generate unique, available brand names and domain suggestions.",
                color: "text-yellow-400",
                bg: "bg-yellow-400/10"
              },
              {
                icon: Cpu,
                title: "Generative Logos",
                desc: "Create bespoke, professional vector logos tailored to your brand's personality and industry.",
                color: "text-primary",
                bg: "bg-primary/10"
              },
              {
                icon: Globe,
                title: "Content Automation",
                desc: "Generate brand-aligned copy, social posts, and marketing materials instantly.",
                color: "text-accent",
                bg: "bg-accent/10"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                
                {/* Decorative gradient orb */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 ${feature.bg} blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}