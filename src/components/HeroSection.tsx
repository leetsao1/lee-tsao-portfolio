import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-brand-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] opacity-5" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-brand-secondary font-bold tracking-wider">
                  Welcome to my world
                </span>
                <div className="h-[2px] w-16 bg-brand-secondary" />
              </div>

              <h1 className="heading-1 mb-4">
                <span className="block text-slate-900 dark:text-white">
                  Lee
                </span>
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"
                  style={{
                    textShadow: `
                      0 0 80px rgba(0, 113, 227, 0.2),
                      0 0 32px rgba(0, 113, 227, 0.2)
                    `,
                  }}
                >
                  Tsao
                </span>
              </h1>

              <h2 className="heading-3 text-slate-800 dark:text-slate-200">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="body-large max-w-xl"
            >
              Crafting enterprise solutions at Apple, specializing in Airtable
              architecture and workflow automation. Passionate about building
              scalable systems that drive organizational efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-brand-primary hover:bg-brand-primary/90"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary/10"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/leetsao1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-brand-secondary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/leetsao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-brand-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:lee.tsao@example.com"
                className="p-2 rounded-full border border-border hover:border-brand-secondary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-[400px] mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 blur-3xl" />

              {/* Avatar image */}
              <motion.img
                src="/lovable-uploads/52bb672b-51de-4879-8113-6546351c5996.png"
                alt="Lee Tsao"
                className="relative w-full h-auto object-contain drop-shadow-2xl animate-float"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(0,113,227,0.2))",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />

              {/* Company badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-brand-primary/10 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="text-sm font-medium text-brand-muted">
                  Currently at
                </div>
                <div className="text-lg font-bold text-brand-primary">
                  Apple
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
