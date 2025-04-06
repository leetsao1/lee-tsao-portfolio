import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-slate-900/80">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-400"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-6">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:leetsao1@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 border border-cyan-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-slate-400">leetsao1@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://github.com/leetsao1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 border border-cyan-500/20">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-slate-400">@leetsao1</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/leetsao1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 border border-cyan-500/20">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-slate-400">/in/leetsao1</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/50 border border-cyan-500/20">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-slate-400">
                      San Francisco Bay Area, California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Available For
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Airtable Automation
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Process Optimization
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Web Development
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Technical Consulting
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  Workflow Design
                </li>
              </ul>

              <Button
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white"
                onClick={() => window.open("#calendar", "_blank")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Check Availability Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
