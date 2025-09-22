"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

// --- your projects data ---
const projects = [
  {
    id: 1,
    title: "Online Learning Platform",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758575897/gzxqhpop7itbukgan7zx.png",
    technologies: ["Next.js", "TypeScript", "MySQL"],
    categories: ["web", "fullstack"],
    demoUrl: "https://online-school-olive.vercel.app/",
    codeUrl: "https://github.com/Sliver14/online-school",
  },
  {
    id: 2,
    title: "My Store",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758575996/zboltvp9zjwqj5hansgq.png",
    technologies: ["Next.js", "TypeScript", "Mongoose"],
    categories: ["web"],
    demoUrl: "https://my-store-three-pearl.vercel.app/",
    codeUrl: "https://github.com/Sliver14/my-store",
  },
  {
    id: 3,
    title: "Department Mobile app",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758209252/qvdwmijwexgsuedd5hku.png",
    technologies: ["React Native", "Expo"],
    categories: ["mobile", "fullstack"],
    demoUrl: "https://expo.dev/accounts/sliver14/projects/Loveworld-Foundation-School",
    codeUrl: "https://github.com/Sliver14/lwfs-ReactNativeApp",
  },
  {
    id: 4,
    title: "DOI Creative Portfolio",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758576162/hozwrpuahva5kckj83nw.png",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    categories: ["web"],
    demoUrl: "https://doi-creative.vercel.app/",
    codeUrl: "https://github.com/Sliver14/DOI-Creative",
  },
];

// --- filters ---
const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "fullstack", label: "Full Stack" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.categories.includes(activeFilter)
  );

  // if showAll = false → only first 3 projects
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-12 lg:py-16 bg-neutral dark:bg-neutral relative overflow-hidden">
      {/* ... animated bg stays same ... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
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

        {/* filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false); // reset to 3 when changing filter
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-primary text-white hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 pulse-glow"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.demoUrl} target="_blank">
                      <Button variant="ghost" size="sm">
                        {project.categories.includes("mobile") ? <Smartphone className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                        {project.categories.includes("mobile") ? "App Store" : "Live Demo"}
                      </Button>
                    </a>
                    <a href={project.codeUrl} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* toggle button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 pulse-glow text-white"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
