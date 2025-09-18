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
    title: "Online Learning Platform",
    description: "Online Learning Platform built with Next.js featuring user authentication, class and exam management, progress tracking, and efficient MySQL data handling via Prisma. Delivers a modern, interactive school experience.",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758196793/d2ycssgkzvy0g2heipes.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "MySQL",
        "JWT Auth",
        "Axios",
        "Nodemailer",
        "Lottie-react",
        "Lucide-react",
        "bcryptjs",
        "js-cookie",
        "react-hot-toast",
        "uuid"
      ],
    categories: ["web", "fullstack"],
    demoUrl: "https://online-school-olive.vercel.app/",
    codeUrl: "https://github.com/Sliver14/online-school",
  },
  {
    id: 2,
    title: "DOI Creative Portfolio",
    description: "DOI Creative is a modern website for film production and video editing services, built with Next.js, TypeScript, Tailwind CSS, and Supabase.",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758196794/qf8yo4omfaztgco61kjk.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Supabase",
        "PostgreSQL",
        "React Query",
        "Radix UI",
        "Lucide React",
        "Zod",
        "React Hook Form",
        "Embla Carousel",
        "Recharts",
        "date-fns",
        "cmdk",
        "Nodemailer"
      ],
    categories: ["web"],
    demoUrl: "https://doi-creative.vercel.app/",
    codeUrl: "https://github.com/Sliver14/DOI-Creative",
  },
  {
    id: 3,
    title: "LWFS Mobile app",
    description: "A community-focused mobile app built with React Native, TypeScript, and Expo. It features an e-commerce store, liveTV streaming, and user authentication, all wrapped in amodern UI styled with NativeWind (Tailwind CSS).",
  // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    image: "https://res.cloudinary.com/dfi8bpolg/image/upload/v1758209252/qvdwmijwexgsuedd5hku.png",
    technologies: ["React Native", "Expo"],
    categories: ["mobile", "fullstack"],
    demoUrl: "https://expo.dev/accounts/sliver14/projects/Loveworld-Foundation-School",
    codeUrl: "https://github.com/Sliver14/lwfs-ReactNativeApp",
  },
  // {
  //   id: 4,
  //   title: "PropertyFinder App",
  //   description: "Full-stack real estate application with AR property viewing and mortgage calculator integration.",
  //   image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   technologies: ["Flutter", "Django", "ARKit"],
  //   categories: ["mobile", "fullstack"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "DataInsight SaaS",
  //   description: "Enterprise analytics platform with machine learning insights and custom reporting tools.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   technologies: ["Next.js", "Python", "AWS"],
  //   categories: ["web", "fullstack"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "ConnectHub Social",
  //   description: "Privacy-focused social networking app with end-to-end encryption and community features.",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   technologies: ["React Native", "GraphQL", "MongoDB"],
  //   categories: ["mobile"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  // },
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
    <section id="portfolio" className="py-10 lg:py-16 bg-neutral relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-40 h-40 bg-primary/8 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-accent/12 rounded-full blur-2xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/5 w-24 h-24 bg-primary/15 rounded-full blur-xl rotate-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-sm bounce-gentle"></div>
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
            className="text-3xl lg:text-5xl font-bold text-primary mb-6"
          >
            Featured <span>Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-foreground max-w-3xl mx-auto"
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
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
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
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-black/20 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 group">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="text-xl font-bold text-primary mb-2 relative z-10 group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-foreground mb-4 relative z-10"
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
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
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
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group/btn">
                        {project.categories.includes("mobile") ? (
                          <Smartphone className="mr-2 h-4 w-4 group-hover/btn:bounce-gentle" />
                        ) : (
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:bounce-gentle" />
                        )}
                        {project.categories.includes("mobile") ? "App Store" : "Live Demo"}
                      </Button>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-secondary hover:bg-gray-100 group/btn">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Button>
                    </a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/80" >
            View All Projects
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
