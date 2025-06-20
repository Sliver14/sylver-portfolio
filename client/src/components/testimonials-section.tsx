import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Alex transformed our vision into a stunning e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The site loads incredibly fast and converts amazingly well.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "CTO, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Working with Alex was a game-changer for our mobile app project. He delivered ahead of schedule and the app performance is outstanding. Highly recommended for any serious development work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Product Manager, DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Alex's full-stack expertise helped us build a robust analytics platform that scales beautifully. His communication throughout the project was excellent, and he always delivered quality code.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    title: "Founder, FinTech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "The mobile app Alex developed for us has been a huge success. The user experience is seamless, and the backend integration works flawlessly. Couldn't be happier with the results.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Alex brings both technical skill and creative problem-solving to every project. Our web application performs better than we ever imagined, and the code quality is exceptional.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Operations Manager, LogiTech",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    content: "Professional, reliable, and incredibly talented. Alex took our complex requirements and built something that works perfectly. We'll definitely be working with him on future projects.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary mb-6">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses and entrepreneurs worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={`Professional headshot of ${testimonial.name}`}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-secondary">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
