'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Daniel Ifeakanwa",
    title: "CEO, DOI Creative Media.",
    image: "../assets/",
    content: "Sylver crafted a stunning portfolio website that truly reflects our brand. The design is sleek, professional, and perfectly captures our identity. We’re thrilled with the result and impressed by his creative and technical skills.",
    rating: 5,

  }
  // ,{
  //   id: 2,
  //   name: "Michael Rodriguez",
  //   title: "CTO, InnovateLab",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  //   content: "Working with Alex was a game-changer for our mobile app project. He delivered ahead of schedule and the app performance is outstanding. Highly recommended for any serious development work.",
  //   rating: 5,
  // },
  // {
  //   id: 3,
  //   name: "Emily Chen",
  //   title: "Product Manager, DataFlow",
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  //   content: "Alex's full-stack expertise helped us build a robust analytics platform that scales beautifully. His communication throughout the project was excellent, and he always delivered quality code.",
  //   rating: 5,
  // },
  // {
  //   id: 4,
  //   name: "David Kim",
  //   title: "Founder, FinTech Solutions",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  //   content: "The mobile app Alex developed for us has been a huge success. The user experience is seamless, and the backend integration works flawlessly. Couldn't be happier with the results.",
  //   rating: 5,
  // },
  // {
  //   id: 5,
  //   name: "Lisa Thompson",
  //   title: "Marketing Director, GrowthCo",
  //   image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  //   content: "Alex brings both technical skill and creative problem-solving to every project. Our web application performs better than we ever imagined, and the code quality is exceptional.",
  //   rating: 5,
  // },
  // {
  //   id: 6,
  //   name: "James Wilson",
  //   title: "Operations Manager, LogiTech",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  //   content: "Professional, reliable, and incredibly talented. Alex took our complex requirements and built something that works perfectly. We'll definitely be working with him on future projects.",
  //   rating: 5,
  // },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-neutral dark:bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-16 w-36 h-36 bg-accent/8 dark:bg-accent/15 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-28 left-12 w-28 h-28 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl floating-animation" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-20 h-20 bg-accent/15 dark:bg-accent/25 rounded-full blur-xl rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-primary/20 dark:bg-primary/30 rounded-full blur-sm bounce-gentle"></div>
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
            What <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trusted by businesses and entrepreneurs worldwide
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-500 bg-white dark:bg-card border-2 border-transparent hover:border-primary/20 dark:hover:border-primary/30 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-4"
                  >
                    <div className="flex text-yellow-400 dark:text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2, rotate: 72 }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic"
                  >
                    "{testimonial.content}"
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={`Professional headshot of ${testimonial.name}`}
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20 dark:border-primary/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                    <div>
                      <div className="font-semibold text-secondary dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </motion.div>
                  {/* Decorative floating quote mark */}
                  <div className="absolute top-4 right-4 text-6xl text-primary/10 dark:text-primary/20 font-serif leading-none">"</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
