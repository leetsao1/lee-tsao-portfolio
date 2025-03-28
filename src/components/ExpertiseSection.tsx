
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Settings, Code, Terminal, Laptop, Activity } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Airtable Automation",
      description:
        "Building complex, scalable Airtable systems with custom automations that streamline workflows and save thousands of hours.",
    },
    {
      icon: <Settings className="w-10 h-10 text-purple-500" />,
      title: "Process Optimization",
      description:
        "Applying chemical engineering principles to optimize business processes, improving efficiency and reducing waste.",
    },
    {
      icon: <Code className="w-10 h-10 text-green-500" />,
      title: "Web Development",
      description:
        "Creating robust web applications with clean, maintainable architecture using modern frameworks and best practices.",
    },
    {
      icon: <Terminal className="w-10 h-10 text-red-500" />,
      title: "Technical Integration",
      description:
        "Seamlessly connecting disparate systems and APIs to create cohesive, automated workflows across platforms.",
    },
    {
      icon: <Laptop className="w-10 h-10 text-amber-500" />,
      title: "Portable Applications",
      description:
        "Developing cross-platform applications that deliver consistent, high-quality experiences across devices.",
    },
    {
      icon: <Activity className="w-10 h-10 text-indigo-500" />,
      title: "Data Analysis",
      description:
        "Transforming raw data into actionable insights through advanced analytics and visualization techniques.",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Combining technical knowledge with practical problem-solving to deliver
            solutions that drive real-world results.
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
