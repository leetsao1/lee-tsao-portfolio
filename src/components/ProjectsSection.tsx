
import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Metronome: Global Campaign Management System",
      description:
        "Architected and implemented a comprehensive project management tool for Apple Music, supporting marketing campaigns across 157 global markets. Streamlined cross-functional collaboration and workflow tracking.",
      tags: ["Airtable", "API Integration", "Workflow Automation", "Enterprise Scale"],
      link: "#",
      featured: true,
    },
    {
      title: "Media Services Asset Database",
      description:
        "Designed and implemented a centralized asset tracking system for Apple TV+, optimizing project workflows and milestone tracking through custom database architecture and integration points.",
      tags: ["Database Design", "System Integration", "Workflow Optimization", "Asset Management"],
      link: "#",
      featured: true,
    },
    {
      title: "Environmental Impact Monitoring Dashboard",
      description:
        "Developed a comprehensive PowerBI dashboard for emissions tracking at a chemical manufacturing facility, enabling real-time monitoring and compliance reporting while driving a 60% reduction in environmental impact.",
      tags: ["PowerBI", "Data Analytics", "Environmental Monitoring", "Process Optimization"],
      link: "#",
      featured: false,
    },
    {
      title: "Predictive Maintenance Web Application",
      description:
        "Created a web-based system for tracking and replacing critical production components before failure, resulting in significantly reduced downtime and improved operational reliability.",
      tags: ["Web Development", "Preventive Maintenance", "Data Analysis", "Manufacturing"],
      link: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Enterprise-scale implementations that demonstrate technical leadership
            and deliver measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-card overflow-hidden animate-slide-up animated-border transition-all ${
                project.featured ? "border-l-2 border-l-apple-blue" : ""
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="bg-apple-blue text-white">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href={project.link} className="text-apple-blue hover:text-blue-700 flex items-center gap-1 text-sm">
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
