import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "25+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-neutral relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-16 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-24 left-20 w-24 h-24 bg-accent/15 dark:bg-accent/25 rounded-full blur-xl floating-animation" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full blur-lg rotate-slow"></div>
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Passionate developer with a love for clean code and innovative solutions
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-2xl blur-xl floating-animation"></div>
            <motion.img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with code on multiple screens"
              className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/20 dark:border-white/10"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/30 dark:bg-accent/40 rounded-full blur-sm bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/40 dark:bg-primary/50 rounded-full wiggle"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold text-secondary dark:text-foreground mb-6"
            >
              3+ Years of Building <span className="text-gradient">Digital Excellence</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I started my journey in software development with a curiosity for how things work under the hood. 
              Today, I specialize in creating full-stack web applications and mobile solutions that not only 
              look great but perform exceptionally.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              My approach combines technical expertise with user-centered design principles. I believe that 
              great software should be invisible to the user – powerful, intuitive, and reliable.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
