import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ProjectsSection from "./components/ProjectsSection";
import BackgroundSection from "./components/BackgroundSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstLoad(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen bg-slate-900 overflow-hidden">
        {/* Background effects that persist across transitions */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ))}
          </div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(56 189 248 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(56 189 248 / 0.1) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen
              key="splash"
              onComplete={handleSplashComplete}
              isFirstLoad={isFirstLoad}
            />
          ) : (
            <motion.div
              key="main"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              {/* Multi-layer transition animation */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                {/* Hexagon Grid Layer */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(#0c1123_1px,transparent_1px)] [background-size:32px_32px]"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    opacity: 0,
                    scale: 1.5,
                    backgroundSize: "64px 64px",
                  }}
                  transition={{ duration: 1.2 }}
                />

                {/* Expanding Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-cyan-500/30 rounded-full"
                    initial={{ scale: 0.2, opacity: 1 }}
                    animate={{
                      scale: 2,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                ))}

                {/* Center burst effect */}
                <motion.div
                  className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl"
                  initial={{ scale: 0.2, opacity: 1 }}
                  animate={{
                    scale: [0.2, 3, 4],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />

                {/* Radial lines burst */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400"
                    style={{
                      originX: "center",
                      rotate: `${i * 30}deg`,
                    }}
                    initial={{ scaleX: 0, opacity: 1 }}
                    animate={{
                      scaleX: [0, 100, 120],
                      opacity: [1, 0.5, 0],
                      filter: ["blur(0px)", "blur(4px)"],
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.1,
                    }}
                  />
                ))}

                {/* Particles explosion */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 500,
                      y: (Math.random() - 0.5) * 500,
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Navbar />
              </motion.div>

              <motion.main>
                <motion.div variants={itemVariants}>
                  <HeroSection />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ExpertiseSection />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ProjectsSection />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <BackgroundSection />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ContactSection />
                </motion.div>
              </motion.main>

              <motion.div variants={itemVariants}>
                <Footer />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
