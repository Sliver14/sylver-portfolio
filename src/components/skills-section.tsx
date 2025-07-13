'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useGithubStats } from "@/hooks/use-github";

const skillCategories = [
  {
    title: "Frontend",
    icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["Node.js & Express", "PostgreSQL", "MongoDB", "MySql"],
  },
  {
    title: "Mobile",
    icon: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["React Native", "React Native Expo", "Web Progress App"],
  },
  {
    title: "DevOps",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["AWS & Azure", "Docker", "CI/CD Pipelines", "Git & GitHub"],
  },
];

export default function SkillsSection() {
  const { data: githubStats, isLoading } = useGithubStats("oyinagasylver");

  return (
    <section id="skills" className="py-10 lg:py-16 bg-neutral relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-28 h-28 bg-accent/10 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-32 right-24 w-36 h-36 bg-primary/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-accent/15 rounded-full blur-xl rotate-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/20 rounded-full blur-sm bounce-gentle"></div>
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
            Skills & <span>Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-foreground max-w-3xl mx-auto"
          >
            My technical toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-black/20 backdrop-blur-sm border-2 border-transparent hover:border-primary/20 group">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.img
                    src={category.icon}
                    alt={`${category.title} technology stack`}
                    className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2 relative z-10 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  <ul className="text-foreground space-y-1 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="group-hover:transition-colors duration-300"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
                      <Card className="shadow-2xl bg-black/20 backdrop-blur-sm border-2 border-primary/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <CardContent className="p-8 relative z-10">
              <motion.h3 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-primary mb-6 text-center"
              >
                <span>GitHub</span> Activity
              </motion.h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                    {isLoading ? (
                      <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      githubStats?.public_repos || "4"
                    )}
                  </div>
                  <div className="text-foreground">Public Repositories</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">131</div>
                  <div className="text-foreground">Contributions This Year</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                  <div className="text-foreground">Stars Received</div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <a href="https://github.com/Sliver14"
                target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-gray-800 text-primary">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  View GitHub Profile
                </Button>
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
