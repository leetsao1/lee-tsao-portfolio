
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 gradient-text">Lee Tsao</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
              Airtable expert and technical problem solver, creating innovative 
              solutions at the intersection of engineering and software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-500 hover:text-apple-blue transition-colors">Home</a></li>
              <li><a href="#expertise" className="text-gray-500 hover:text-apple-blue transition-colors">Expertise</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-apple-blue transition-colors">Projects</a></li>
              <li><a href="#background" className="text-gray-500 hover:text-apple-blue transition-colors">Background</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-apple-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Airtable Automation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Process Optimization</a></li>
              <li><a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Technical Consulting</a></li>
              <li><a href="#" className="text-gray-500 hover:text-apple-blue transition-colors">Workflow Design</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Lee Tsao. All rights reserved.
          </p>
          
          <a 
            href="#home" 
            className="flex items-center text-gray-500 hover:text-apple-blue transition-colors"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
