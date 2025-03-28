
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-gray-300 dark:border-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border-gray-300 dark:border-gray-700"
                />
              </div>
              <Button className="w-full bg-apple-blue hover:bg-blue-600">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-apple-blue mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">contact@leetsao.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-apple-blue mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-apple-blue mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco Bay Area, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <h4 className="text-lg font-medium mb-2">Availability</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Currently taking on select projects with innovative teams.
                Schedule a consultation to discuss your needs.
              </p>
              <Button variant="link" className="text-apple-blue p-0 mt-2">
                Check Availability Calendar →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
