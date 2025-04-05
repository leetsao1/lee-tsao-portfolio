
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const BackgroundSection = () => {
  const experience = [
    {
      role: "Configuration Engineer",
      company: "Apple Inc.",
      period: "2022 - Present",
      description:
        "Leading enterprise system architecture for global marketing initiatives across Apple Music, Apple TV+, and other media services. Designed 'Metronome', a project management tool supporting 157 markets, and built integrated Airtable solutions that serve as unified sources of truth for cross-functional teams.",
      icon: <Briefcase className="w-6 h-6 text-apple-blue" />,
    },
    {
      role: "Project & Process Engineer",
      company: "3M",
      period: "2022",
      description:
        "Led capital projects focused on operational efficiency and environmental impact reduction. Designed comprehensive technical systems including an Airtable database with PowerBI integration for data-driven decision making, resulting in 60% reduction in pollution and significant yield improvements.",
      icon: <Briefcase className="w-6 h-6 text-apple-blue" />,
    },
    {
      role: "Process Engineer",
      company: "Evonik Chemicals",
      period: "2018 - 2022",
      description:
        "Managed critical capital projects and developed innovative technical solutions including emissions tracking dashboards and web-based maintenance systems. Led cross-functional teams in process improvement initiatives and equipment modernization projects.",
      icon: <Briefcase className="w-6 h-6 text-apple-blue" />,
    },
    {
      role: "B.S. Chemical Engineering",
      company: "University of California, Riverside",
      period: "2015 - 2018",
      description:
        "Applied engineering principles to complex systems and process optimization. Completed additional certification as a Full Stack Web Developer to augment technical skill set.",
      icon: <GraduationCap className="w-6 h-6 text-apple-blue" />,
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

  return (
    <section id="background" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Professional Background</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A proven track record of leading technical initiatives at global companies,
            with expertise in system architecture, process engineering, and cross-functional collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className="glass-card animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <CardTitle>{item.role}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center mt-1">
                        <span>{item.company}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{item.period}</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                      {skill}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" /> Certifications
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Airtable Builder Certification
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Full Stack Web Developer (UC Riverside)
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Lean Six Sigma Green Belt
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      Systems Engineering I (Siemens)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
