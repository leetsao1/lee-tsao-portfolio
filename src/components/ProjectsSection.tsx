import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Metronome: Global Campaign Management System",
      description:
        "Architected and implemented a comprehensive project management tool for Apple Music, supporting marketing campaigns across 157 global markets. Streamlined cross-functional collaboration and workflow tracking.",
      image: "/images/apple-music-kendrick.jpg",
      technologies: [
        "Airtable",
        "API Integration",
        "Workflow Automation",
        "Enterprise Scale",
      ],
      metrics: [
        "157 Global Markets",
        "12,500 Hours Saved Annually",
        "48 Automations Built",
      ],
      featured: true,
      link: "#",
      github: "#",
    },
    {
      title: "Media Services Asset Database",
      description:
        "Designed and implemented a centralized asset tracking system for Apple TV+, optimizing project workflows and milestone tracking through custom database architecture and integration points.",
      image:
        "/images/ted-lasso-jason-sudeikis-the-morning-show-reese-witherspoon-severance-adam-scott-apple-tv.avif",
      technologies: [
        "Database Design",
        "System Integration",
        "Workflow Optimization",
        "Asset Management",
      ],
      metrics: [
        "250,000 Assets Managed",
        "84% Process Efficiency Improvement",
        "120 Integration Points",
      ],
      featured: true,
      link: "#",
      github: "#",
    },
    {
      title: "Environmental Impact Monitoring Dashboard",
      description:
        "Developed a comprehensive PowerBI dashboard for emissions tracking at a chemical manufacturing facility, enabling real-time monitoring and compliance reporting while driving a 60% reduction in environmental impact.",
      image: "/images/Oil-Refinery-Chemical-Petrochemical-plant-.jpg",
      technologies: [
        "PowerBI",
        "Data Analytics",
        "Environmental Monitoring",
        "Process Optimization",
      ],
      metrics: [
        "60% Pollution Reduction",
        "16 Key Performance Indicators",
        "Real-time Monitoring",
      ],
      featured: false,
      link: "#",
      github: "#",
    },
    {
      title: "Predictive Maintenance Web Application",
      description:
        "Created a web-based system for tracking and replacing critical production components before failure, resulting in significantly reduced downtime and improved operational reliability.",
      image: "/images/Chemical-plant-worker.webp",
      technologies: [
        "Web Development",
        "Preventive Maintenance",
        "Data Analysis",
        "Manufacturing",
      ],
      metrics: [
        "95% Uptime Achieved",
        "72% Downtime Reduction",
        "Proactive Maintenance",
      ],
      featured: false,
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            Enterprise-scale implementations that demonstrate technical
            leadership and deliver measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10 overflow-hidden hover:border-cyan-500/30 transition-colors duration-300">
                <div className="aspect-video rounded-t-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                      <span className="text-sm text-white font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mr-3" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500/20 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-cyan-500/40 shadow-sm hover:shadow transition-all duration-300"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-cyan-500/20 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-cyan-500/40 shadow-sm hover:shadow transition-all duration-300"
            onClick={() => (window.location.href = "#projects")}
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
