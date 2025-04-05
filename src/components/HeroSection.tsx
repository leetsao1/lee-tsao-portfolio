
import React from "react";
import { ArrowDown, Zap, Workflow, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Lee Tsao
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                Enterprise Solutions Architect
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Certified Airtable expert and technical project leader with a track record of building 
              enterprise-scale solutions for cross-functional teams. Currently driving system architecture 
              and workflow optimization at <span className="font-semibold">Apple</span>.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Enterprise Airtable Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <Workflow className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Workflow Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm">Technical Project Management</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" className="bg-apple-blue hover:bg-blue-600">
                View My Work
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <div className="glass-card p-8 border-2 border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-apple-blue rounded-xl flex items-center justify-center text-white">
                  <Database size={32} />
                </div>
                <div className="ml-10 space-y-4">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="p-2 my-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <code className="text-sm text-gray-600 dark:text-gray-400">
                      {`// Enterprise Airtable Solution\nconst workflow = optimizeProcess(data);\nintegrateSystems(workflow, 'apple-music-api');`}
                    </code>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                    <div className="h-8 w-8 rounded-full bg-green-500"></div>
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#expertise" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
