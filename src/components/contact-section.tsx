'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-10 lg:py-16 bg-neutral relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl floating-animation"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-xl rotate-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-18 bg-accent/20 rounded-full blur-sm bounce-gentle"></div>
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
            Let's Work <span>Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-foreground max-w-3xl mx-auto"
          >
            Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-neutral border-2 border-primary/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <CardContent className="p-8 relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-primary mb-6"
                >
                  Send Me a Message
                </motion.h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-secondary">First Name</Label>
                      <Input
                        id="firstName"
                        {...form.register("firstName")}
                        className="mt-2 bg-white border-gray-300 text-gray-900"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-secondary">Last Name</Label>
                      <Input
                        id="lastName"
                        {...form.register("lastName")}
                        className="mt-2 bg-white border-gray-300 text-gray-900"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-secondary">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="mt-2 bg-white border-gray-300 text-gray-900"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="text-secondary">Project Type</Label>
                    <Select onValueChange={(value) => form.setValue("projectType", value)}>
                      <SelectTrigger className="mt-2 bg-white border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="web">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.projectType && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.projectType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-secondary">Budget Range</Label>
                    <Select onValueChange={(value) => form.setValue("budget", value)}>
                      <SelectTrigger className="mt-2 bg-white border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        <SelectItem value="5-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.budget && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.budget.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-secondary">Project Details</Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="mt-2 bg-white border-gray-300 text-gray-900"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/80 group px-4 py-2 rounded-md font-medium text-white transition-colors duration-200"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-300 mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you need a complete digital solution or want to discuss your ideas, I'm here to help.
              </p>
            </div>

            <div className="space-y-2">
              <a 
                href="mailto:silverchristopher12@gmail.com" 
                className="flex items-center p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="text-primary h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">Email</div>
                  <div className="text-foreground group-hover:text-accent transition-colors duration-300">silverchristopher12@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+2348135971304" 
                className="flex items-center p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="text-primary h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">Phone</div>
                  <div className="text-foreground group-hover:text-accent transition-colors duration-300">(+234) 813-35971-304</div>
                </div>
              </a>

              <div className="flex items-center p-4 rounded-lg group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Location</div>
                  <div className="text-foreground">Lagos, Nigeria</div>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-lg group">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Response Time</div>
                  <div className="text-foreground">Within 24 hours</div>
                </div>
              </div>
            </div>
My approach combines technical expertise with user-centered design principles. I believe that great software should be invisible to the user – powerful, intuitive, and reliable.
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <Github className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <Twitter className="h-5 w-5 text-gray-700" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <Dribbble className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
