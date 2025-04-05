import React from "react";
import {
  ArrowDown,
  Zap,
  Workflow,
  Database,
  Trophy,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-primary to-primary/90 overflow-hidden"
    >
      {/* Tech background pattern */}
      <div className="absolute inset-0 bg-[url('/tech-pattern.png')] opacity-10" />

      {/* Animated circuit lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-1 h-full bg-secondary/20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-secondary/20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1 h-full bg-secondary/20 animate-pulse" />
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image - Modern floating design */}
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-70"></div>
            <img
              src="/lovable-uploads/52bb672b-51de-4879-8113-6546351c5996.png"
              alt="Lee Tsao"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-8 border-white/10"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse border border-secondary/20">
              <Database className="w-8 h-8 text-secondary" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 max-w-xl">
            <div
              className="space-y-2 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
                Lee Tsao
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
                Enterprise Airtable Architect
              </h2>
            </div>

            <p
              className="text-lg text-white/80 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Leading the future of enterprise workflow automation at{" "}
              <span className="font-semibold text-secondary">Apple</span>.
              Architecting scalable Airtable solutions that power global
              operations across 157 markets, transforming complex business
              processes into streamlined, automated workflows.
            </p>

            {/* Achievement Highlights */}
            <div
              className="grid grid-cols-2 gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-secondary/20">
                <Trophy className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm font-medium text-white">
                    157+ Markets
                  </div>
                  <div className="text-xs text-white/60">Global Deployment</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-secondary/20">
                <Users className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm font-medium text-white">
                    10,000+ Users
                  </div>
                  <div className="text-xs text-white/60">Enterprise Scale</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-secondary/20">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm font-medium text-white">
                    70% Efficiency
                  </div>
                  <div className="text-xs text-white/60">
                    Process Improvement
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-secondary/20">
                <Workflow className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm font-medium text-white">
                    50+ Integrations
                  </div>
                  <div className="text-xs text-white/60">
                    System Connections
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
                <Database className="w-4 h-4 text-secondary" />
                <span className="text-sm text-white">
                  Enterprise Airtable Solutions
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
                <Workflow className="w-4 h-4 text-secondary" />
                <span className="text-sm text-white">Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm text-white">
                  Technical Project Management
                </span>
              </div>
            </div>

            <div
              className="flex gap-4 justify-center lg:justify-start pt-2 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90"
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#expertise" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-secondary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
