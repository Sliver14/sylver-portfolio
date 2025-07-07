'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ShopFlow E-commerce",
    description: "Full-stack e-commerce platform with advanced inventory management and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "PostgreSQL"],
    categories: ["web", "fullstack"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "FitTrack Mobile App",
    description: "Cross-platform fitness tracking app with social features and AI-powered workout recommendations.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Firebase", "Redux"],
    categories: ["mobile"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "TaskMaster Dashboard",
    description: "Real-time collaborative task management platform with advanced reporting and team analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Express", "Socket.io"],
    categories: ["web"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "PropertyFinder App",
    description: "Full-stack real estate application with AR property viewing and mortgage calculator integration.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Flutter", "Django", "ARKit"],
    categories: ["mobile", "fullstack"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "DataInsight SaaS",
    description: "Enterprise analytics platform with machine learning insights and custom reporting tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Python", "AWS"],
    categories: ["web", "fullstack"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "ConnectHub Social",
    description: "Privacy-focused social networking app with end-to-end encryption and community features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    categories: ["mobile"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "fullstack", label: "Full Stack" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-neutral dark:bg-neutral relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-40 h-40 bg-primary/8 dark:bg-primary/15 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-accent/12 dark:bg-accent/20 rounded-full blur-2xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-primary/15 dark:bg-primary/25 rounded-full blur-xl rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent/20 dark:bg-accent/30 rounded-full blur-sm bounce-gentle"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-secondary dark:text-foreground mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work in web and mobile development
          </motion.p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.id
                    ? "bg-primary text-white hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 pulse-glow"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
                }`}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 bg-white dark:bg-card border-2 border-transparent hover:border-primary/20 dark:hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-accent rounded-full wiggle"></div>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="text-xl font-bold text-secondary dark:text-foreground mb-2 relative z-10 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-gray-600 dark:text-gray-300 mb-4 relative z-10"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    className="flex flex-wrap gap-2 mb-4 relative z-10"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + techIndex * 0.1 }}
                      >
                        <Badge variant="secondary" className="text-xs bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    className="flex justify-between items-center relative z-10"
                  >
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 hover:bg-primary/10 dark:hover:bg-primary/20 group/btn">
                      {project.categories.includes("mobile") ? (
                        <Smartphone className="mr-2 h-4 w-4 group-hover/btn:bounce-gentle" />
                      ) : (
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:bounce-gentle" />
                      )}
                      {project.categories.includes("mobile") ? "App Store" : "Live Demo"}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 group/btn">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 pulse-glow">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
