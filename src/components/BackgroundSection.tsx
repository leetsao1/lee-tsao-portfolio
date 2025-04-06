import React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Award } from "lucide-react";

const BackgroundSection: React.FC = () => {
  const experiences = [
    {
      type: "work",
      icon: <Building2 className="w-6 h-6" />,
      title: "Configuration Engineer",
      organization: "Apple Inc.",
      period: "2022 - Present",
      location: "Cupertino, CA",
      highlights: [
        "Leading enterprise system architecture for global marketing initiatives across Apple Music, Apple TV+, and other media services",
        "Designed 'Metronome', a project management tool supporting 157 markets",
        "Built integrated Airtable solutions that serve as unified sources of truth for cross-functional teams",
      ],
    },
    {
      type: "work",
      icon: <Building2 className="w-6 h-6" />,
      title: "Project & Process Engineer",
      organization: "3M",
      period: "2022",
      location: "Minnesota",
      highlights: [
        "Led capital projects focused on operational efficiency and environmental impact reduction",
        "Designed comprehensive technical systems including an Airtable database with PowerBI integration",
        "Achieved 60% reduction in pollution and significant yield improvements through data-driven decision making",
      ],
    },
    {
      type: "work",
      icon: <Building2 className="w-6 h-6" />,
      title: "Process Engineer",
      organization: "Evonik Chemicals",
      period: "2018 - 2022",
      location: "Mobile, AL",
      highlights: [
        "Managed critical capital projects and developed innovative technical solutions",
        "Created emissions tracking dashboards and web-based maintenance systems",
        "Led cross-functional teams in process improvement initiatives and equipment modernization projects",
      ],
    },
    {
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.S. Chemical Engineering",
      organization: "University of California, Riverside",
      period: "2015 - 2018",
      location: "Riverside, CA",
      highlights: [
        "Applied engineering principles to complex systems and process optimization",
        "Completed additional certification as a Full Stack Web Developer",
        "Focus on technical problem-solving and system optimization",
      ],
    },
  ];

  const skills = [
    "Enterprise Airtable Architecture",
    "Cross-functional Leadership",
    "Workflow Automation",
    "Process Optimization",
    "System Integration",
    "Technical Project Management",
    "Data Analytics & Reporting",
    "API Implementation",
    "Lean Six Sigma",
    "PowerBI Dashboard Development",
    "Capital Project Management",
    "Web Application Development",
  ];

  const certifications = [
    {
      title: "Airtable Builder Certification",
      issuer: "Airtable",
      year: "2023",
    },
    {
      title: "Full Stack Web Developer",
      issuer: "UC Riverside",
      year: "2022",
    },
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "ASQ",
      year: "2021",
    },
    {
      title: "Systems Engineering I",
      issuer: "Siemens",
      year: "2020",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900/50 backdrop-blur-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
              Professional Background
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            A proven track record of leading technical initiatives at global
            companies, with expertise in system architecture, process
            engineering, and cross-functional collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-500" />

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-1/2">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-75" />
                    </div>

                    <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10 group hover:border-cyan-500/30 transition-colors duration-300">
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-cyan-400">{experience.icon}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {experience.title}
                            </h3>
                            <p className="text-cyan-400">
                              {experience.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                          <span>{experience.period}</span>
                          <span>•</span>
                          <span>{experience.location}</span>
                        </div>

                        <ul className="space-y-2">
                          {experience.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-slate-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              {/* Professional Skills */}
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Professional Skills
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-300 bg-slate-700/30 rounded-lg px-4 py-2 border border-cyan-500/10"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-slate-700/30 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-300"
                    >
                      <h4 className="font-medium text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-400">{cert.issuer}</span>
                        <span className="text-slate-400">{cert.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
