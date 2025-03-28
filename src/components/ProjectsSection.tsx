
import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise Airtable System",
      description:
        "Developed a comprehensive Airtable system for a Fortune 500 company, automating inventory management and reducing manual work by 70%.",
      tags: ["Airtable", "Automation", "API Integration", "Process Design"],
      link: "#",
      featured: true,
    },
    {
      title: "Chemical Process Optimizer",
      description:
        "Created an algorithm that optimizes chemical manufacturing processes, resulting in 15% reduced waste and significant cost savings.",
      tags: ["Python", "Data Analysis", "Chemical Engineering", "Optimization"],
      link: "#",
      featured: true,
    },
    {
      title: "Cross-Platform Workflow Application",
      description:
        "Built a portable application that synchronizes workflows across devices, enabling seamless collaboration for distributed teams.",
      tags: ["React", "Node.js", "Electron", "Cross-platform"],
      link: "#",
      featured: false,
    },
    {
      title: "Supply Chain Dashboard",
      description:
        "Designed an interactive dashboard for real-time supply chain monitoring, improving decision-making response times by 40%.",
      tags: ["Data Visualization", "React", "API Integration", "Real-time"],
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
            Showcasing solutions that combine technical expertise with
            practical problem-solving to deliver real impact.
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
