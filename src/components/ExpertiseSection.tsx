import React from "react";
import { motion } from "framer-motion";
import { Database, Code, Server, Cpu, Layers, Network } from "lucide-react";

const ExpertiseSection: React.FC = () => {
  const expertise = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Enterprise Airtable Solutions",
      description:
        "Architecting scalable Airtable systems that serve as central sources of truth for global companies, supporting 150+ markets and streamlining complex workflows.",
      technologies: [
        "Airtable",
        "Database Design",
        "Enterprise Scale",
        "System Architecture",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advanced Workflow Automation",
      description:
        "Designing sophisticated automation systems that reduce manual effort by 70%+ while improving data accuracy and cross-functional collaboration.",
      technologies: [
        "Workflow Automation",
        "Process Design",
        "Integration",
        "Efficiency",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Technical Project Architecture",
      description:
        "Building robust technical architectures that integrate APIs, databases, and reporting tools to create unified information ecosystems.",
      technologies: [
        "API Integration",
        "Database Design",
        "System Architecture",
        "Technical Planning",
      ],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "System Integration",
      description:
        "Seamlessly connecting enterprise platforms, APIs, and databases to create cohesive workflow solutions across organizational boundaries.",
      technologies: [
        "API Implementation",
        "Enterprise Integration",
        "Cross-platform Solutions",
        "Workflow Design",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Data Analytics & Reporting",
      description:
        "Transforming complex data into actionable insights through PowerBI dashboards, custom reporting tools, and strategic data visualization.",
      technologies: [
        "PowerBI",
        "Data Analytics",
        "Dashboard Development",
        "Visualization",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Process Optimization",
      description:
        "Applying Lean Six Sigma principles to analyze, optimize, and transform business processes, resulting in measurable improvements to efficiency and output.",
      technologies: [
        "Lean Six Sigma",
        "Process Engineering",
        "Efficiency Optimization",
        "Workflow Analysis",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              Professional Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            Combining technical excellence with practical business solutions to
            deliver systems that drive organizational success and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-300">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 text-cyan-400">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
