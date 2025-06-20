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
    <section id="home" className="pt-16 bg-gradient-to-br from-neutral to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                Available for New Projects
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
                Hi, I'm <span className="text-primary">Alex Chen</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mt-4">
                Full Stack Developer & Mobile App Specialist
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 3 years of experience crafting beautiful, functional web applications and mobile solutions. 
              I help businesses transform their ideas into powerful digital experiences that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToPortfolio}>
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-12">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="Professional headshot of Alex Chen"
                className="relative rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
