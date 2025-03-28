
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const BackgroundSection = () => {
  const experience = [
    {
      role: "Technical Expert",
      company: "Apple",
      period: "2020 - Present",
      description:
        "Leading the development of internal tools and optimizing processes across departments. Implementing Airtable solutions that save thousands of hours annually.",
      icon: <Briefcase className="w-6 h-6 text-apple-blue" />,
    },
    {
      role: "Process Optimization Engineer",
      company: "Technology Consulting Firm",
      period: "2017 - 2020",
      description:
        "Redesigned manufacturing processes for Fortune 500 clients, resulting in improved efficiency and reduced waste. Created custom applications for process monitoring.",
      icon: <Briefcase className="w-6 h-6 text-apple-blue" />,
    },
    {
      role: "Chemical Engineering Degree",
      company: "University of Technology",
      period: "2013 - 2017",
      description:
        "Specialized in process optimization and systems design. Graduated with honors and received the Outstanding Technical Achievement award.",
      icon: <GraduationCap className="w-6 h-6 text-apple-blue" />,
    },
  ];

  const skills = [
    "Airtable Expert",
    "Process Optimization",
    "Automation Design",
    "JavaScript / TypeScript",
    "React Development",
    "Node.js",
    "Python",
    "API Integration",
    "SQL / NoSQL Databases",
    "Technical Architecture",
    "Data Analysis",
    "Chemical Engineering",
  ];

  return (
    <section id="background" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Professional Background</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey combines formal education in chemical engineering with
            practical experience in technical implementation and process optimization.
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
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" /> Certifications
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Airtable Certified Expert
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Process Optimization Specialist
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Technical Integration Professional
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
