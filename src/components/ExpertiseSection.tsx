
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Settings, Code, Terminal, Laptop, Activity, Server, PieChart, BarChart3, Network, Layers, Workflow } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Enterprise Airtable Solutions",
      description:
        "Architecting scalable Airtable systems that serve as central sources of truth for global companies, supporting 150+ markets and streamlining complex workflows.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-purple-500" />,
      title: "Advanced Workflow Automation",
      description:
        "Designing sophisticated automation systems that reduce manual effort by 70%+ while improving data accuracy and cross-functional collaboration.",
    },
    {
      icon: <Layers className="w-10 h-10 text-green-500" />,
      title: "Technical Project Architecture",
      description:
        "Building robust technical architectures that integrate APIs, databases, and reporting tools to create unified information ecosystems.",
    },
    {
      icon: <Network className="w-10 h-10 text-red-500" />,
      title: "System Integration",
      description:
        "Seamlessly connecting enterprise platforms, APIs, and databases to create cohesive workflow solutions across organizational boundaries.",
    },
    {
      icon: <PieChart className="w-10 h-10 text-amber-500" />,
      title: "Data Analytics & Reporting",
      description:
        "Transforming complex data into actionable insights through PowerBI dashboards, custom reporting tools, and strategic data visualization.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-indigo-500" />,
      title: "Process Optimization",
      description:
        "Applying Lean Six Sigma principles to analyze, optimize, and transform business processes, resulting in measurable improvements to efficiency and output.",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Professional Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Combining technical excellence with practical business solutions to deliver 
            systems that drive organizational success and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-2">
                {item.icon}
                <CardTitle className="text-xl mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
