
import React from "react";
import { ArrowDown, Zap, Workflow, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start lg:justify-between gap-12">
          {/* Profile Image - Apple-style positioning */}
          <div className="relative w-40 h-40 lg:w-72 lg:h-72 mb-6 lg:mb-0 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 to-purple-500/20 rounded-full blur-xl opacity-70"></div>
            <Avatar className="w-full h-full rounded-full border-8 border-white dark:border-gray-900 shadow-2xl overflow-hidden">
              <AvatarImage 
                src="/lovable-uploads/52bb672b-51de-4879-8113-6546351c5996.png" 
                alt="Lee Tsao"
                className="object-cover scale-110"
              />
              <AvatarFallback className="text-4xl font-bold">LT</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
              <Database className="w-6 h-6 text-apple-blue" />
            </div>
          </div>

          {/* Content Section */}
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

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
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

            <div className="flex gap-4 justify-center lg:justify-start pt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" className="bg-apple-blue hover:bg-blue-600">
                View My Work
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Visual Element - Only on large screens */}
          <div className="hidden xl:block w-96 animate-scale-in">
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
