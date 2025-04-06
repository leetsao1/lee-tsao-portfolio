import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Cpu, Database, Network } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
  isFirstLoad?: boolean;
}

// Logo component to reuse in both splash screens
const Logo = () => (
  <motion.div
    className="flex items-center space-x-2 text-2xl font-bold"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <span className="text-cyan-400">&lt;/&gt;</span>
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      LTDEV
    </span>
  </motion.div>
);

const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  isFirstLoad = true,
}) => {
  const [show, setShow] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const loadingMessages = [
    "Loading portfolio data...",
    "Preparing project showcase...",
    "Configuring interactive elements...",
    "Optimizing user experience...",
    "Almost ready...",
  ];

  // React code snippets for the background
  const codeSnippets = [
    "import React from 'react';",
    "import { motion } from 'framer-motion';",
    "",
    "const Portfolio = () => {",
    "  const [isLoading, setIsLoading] = useState(true);",
    "",
    "  useEffect(() => {",
    "    // Initialize portfolio data",
    "    const loadData = async () => {",
    "      await fetchProjects();",
    "      setIsLoading(false);",
    "    };",
    "    loadData();",
    "  }, []);",
    "",
    "  return (",
    "    <main className='min-h-screen'>",
    "      <Header />",
    "      <Projects data={projects} />",
    "      <Contact />",
    "    </main>",
    "  );",
    "};",
    "",
    "export default Portfolio;",
  ];

  useEffect(() => {
    if (!isFirstLoad) {
      // Simpler loading for page transitions
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Full animation for first load
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => setShowName(true), 500);
    const loadingTimer = setTimeout(() => setShowLoading(true), 1000);

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 0.6;
        if (newProgress <= 20) {
          setLoadingText(loadingMessages[0]);
        } else if (newProgress <= 40) {
          setLoadingText(loadingMessages[1]);
        } else if (newProgress <= 60) {
          setLoadingText(loadingMessages[2]);
        } else if (newProgress <= 80) {
          setLoadingText(loadingMessages[3]);
        } else {
          setLoadingText(loadingMessages[4]);
        }

        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    const completeTimer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
      clearTimeout(loadingTimer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete, isFirstLoad]);

  if (!isFirstLoad) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            times: [0, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          <Logo />
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              when: "afterChildren",
            },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 overflow-hidden"
        >
          {/* Reveal animation container */}
          <motion.div
            className="absolute inset-0 bg-slate-900 origin-center"
            exit={{
              scaleY: 0,
              transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
              },
            }}
          />

          {/* Enhanced background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 70%, transparent 100%)",
                "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%, transparent 100%)",
                "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 70%, transparent 100%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Enhanced particles with trails */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  transition: {
                    duration: Math.random() * 20 + 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  },
                }}
              >
                <motion.div
                  className="w-1 h-1 bg-cyan-500 rounded-full"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-500 rounded-full blur-sm" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500/30 rounded-full blur-md" />
              </motion.div>
            ))}
          </div>

          {/* Enhanced orbital rings */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-cyan-500/20"
                style={{
                  width: "100px",
                  height: "100px",
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                  rotateX: mousePosition.y * 2,
                  rotateY: mousePosition.x * 2,
                }}
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0.3, 0.2, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Content container with 3D effect */}
          <motion.div
            className="relative z-10"
            style={{
              rotateX: mousePosition.y,
              rotateY: mousePosition.x,
            }}
            exit={{
              scale: 1.5,
              y: -100,
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            <AnimatePresence>
              {showName && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    scale: 1.2,
                    y: -50,
                    opacity: 0,
                    filter: "blur(10px)",
                    transition: {
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="relative flex flex-col items-center"
                >
                  {/* Enhanced glowing background */}
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-center relative"
                  >
                    <motion.span
                      className="block text-white relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Lee
                      <motion.span
                        className="absolute -inset-x-6 -inset-y-4 bg-cyan-500/10 blur-2xl rounded-lg"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative"
                      style={{ textShadow: "0 0 40px rgba(0, 150, 255, 0.3)" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Tsao
                      <motion.span
                        className="absolute -inset-x-6 -inset-y-4 bg-blue-500/10 blur-2xl rounded-lg"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5,
                        }}
                      />
                    </motion.span>
                  </motion.h1>

                  {/* Enhanced loading bar */}
                  <AnimatePresence>
                    {showLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-16 w-80 relative"
                      >
                        <div className="relative">
                          {/* Enhanced pulsing glow effect */}
                          <motion.div
                            className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full"
                            animate={{
                              opacity: [0.5, 0.8, 0.5],
                              scale: [1, 1.1, 1],
                              rotate: [0, 180],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />

                          {/* Progress text with typewriter effect */}
                          <div className="flex justify-between items-center mb-2">
                            <motion.span
                              className="text-sm text-slate-400 font-mono"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              {loadingText}
                            </motion.span>
                            <motion.span
                              className="text-sm text-cyan-400 font-mono"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              {Math.round(loadingProgress)}%
                            </motion.span>
                          </div>

                          {/* Enhanced loading bar */}
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${loadingProgress}%` }}
                              transition={{ duration: 0.1 }}
                              className="h-full relative"
                            >
                              {/* Enhanced gradient bar */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
                                animate={{
                                  backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                style={{ backgroundSize: "200% 100%" }}
                              />

                              {/* Enhanced shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />

                              {/* Particle effects on the loading bar */}
                              {loadingProgress > 0 &&
                                [...Array(3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"
                                    animate={{
                                      y: [-10, 10],
                                      x: [-5, 5],
                                      opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                      duration: 1,
                                      delay: i * 0.2,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                  />
                                ))}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
