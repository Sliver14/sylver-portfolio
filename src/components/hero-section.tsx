'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-background to-neutral dark:from-background dark:to-neutral min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full blur-lg floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/40 rounded-full blur-sm rotate-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge variant="secondary" className="mb-4 bg-accent/20 dark:bg-accent/30 text-accent dark:text-accent hover:bg-accent/30 dark:hover:bg-accent/40 pulse-glow">
                  🚀 Available for New Projects
                </Badge>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-6xl font-bold text-secondary dark:text-foreground leading-tight"
              >
                Hi, I'm <span className="text-gradient">Sylver Oyinaga</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-4"
              >
                Full Stack Developer & Mobile App Specialist
              </motion.p>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              With over 1 year of experience crafting beautiful, functional web applications and mobile solutions. 
              I help businesses transform their ideas into powerful digital experiences that users love.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 pulse-glow group">
                <Download className="mr-2 h-4 w-4 group-hover:bounce-gentle" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPortfolio} className="border-primary text-primary dark:border-primary dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/20">
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 mt-12"
            >
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-3xl transform rotate-6 floating-animation"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-xl"></div>
              <motion.img
                src="../assets/photo_2024-02-11_14-17-47.jpg"
                alt="Professional headshot of Oyinaga Sylver"
                className="relative rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto border-2 border-white/20 dark:border-white/10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full wiggle"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full blur-sm floating-animation" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
