import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useGithubStats } from "@/hooks/use-github";

const skillCategories = [
  {
    title: "Frontend",
    icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["Node.js & Express", "Python & Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Mobile",
    icon: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["React Native", "Flutter & Dart", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    title: "DevOps",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    skills: ["AWS & Azure", "Docker", "CI/CD Pipelines", "Git & GitHub"],
  },
];

export default function SkillsSection() {
  const { data: githubStats, isLoading } = useGithubStats("alexchen");

  return (
    <section id="skills" className="py-20 lg:py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <img
                    src={category.icon}
                    alt={`${category.title} technology stack`}
                    className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-xl font-semibold text-secondary mb-2">{category.title}</h3>
                  <ul className="text-gray-600 space-y-1">
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
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
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">GitHub Activity</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {isLoading ? "..." : githubStats?.public_repos || "127"}
                  </div>
                  <div className="text-gray-600">Public Repositories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1,847</div>
                  <div className="text-gray-600">Contributions This Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">234</div>
                  <div className="text-gray-600">Stars Received</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-secondary hover:bg-gray-800">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
