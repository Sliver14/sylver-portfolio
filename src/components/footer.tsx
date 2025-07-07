'use client'

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary dark:bg-background text-white dark:text-foreground py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-12 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-6 right-16 w-32 h-32 bg-accent/8 dark:bg-accent/15 rounded-full blur-2xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/15 dark:bg-primary/25 rounded-full blur-lg rotate-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              <span className="text-gradient">Sylver Oyinaga</span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 dark:text-gray-400 mb-6 max-w-md"
            >
              Full Stack Developer passionate about creating exceptional digital experiences that drive business success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("#home")}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#portfolio")}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 dark:text-gray-400">Web Development</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Mobile Apps</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Full Stack Solutions</span></li>
              <li><span className="text-gray-300 dark:text-gray-400">Consultation</span></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 dark:border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-300 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Sylver Oyinaga. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-primary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
