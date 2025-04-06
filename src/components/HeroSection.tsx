import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  Terminal,
  Database,
  Server,
  Network,
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Animated corner brackets */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      <div className="section-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8 lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-cyan-400 font-medium tracking-wide">
                  Welcome to my portfolio
                </span>
                <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-500/30 to-transparent" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="block text-white">Lee</span>
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{
                    textShadow: "0 0 40px rgba(0, 150, 255, 0.15)",
                  }}
                >
                  Tsao
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative pl-4 border-l-2 border-cyan-500/20"
            >
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Crafting enterprise solutions at Apple, specializing in Airtable
                architecture and workflow automation. Passionate about building
                scalable systems that drive organizational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href="https://github.com/leetsao1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/leetsao1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:leetsao1@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Orbital rings */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-cyan-500/20"
                    animate={{
                      rotate: 360,
                      scale: [1 + i * 0.1, 1.1 + i * 0.1, 1 + i * 0.1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>

              {/* Profile image */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-2 border-cyan-500/20"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 150, 255, 0.2)",
                    "0 0 40px rgba(0, 150, 255, 0.2)",
                    "0 0 20px rgba(0, 150, 255, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img
                  src="/images/emoji.png"
                  alt="Lee Tsao"
                  className="w-full h-full object-cover animate-float"
                />
              </motion.div>

              {/* Company badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-4 right-0 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/20"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                  @Apple
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
