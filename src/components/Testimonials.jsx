import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Al-Thani",
    role: "CEO, TechVentures Qatar",
    content: "Hadyra Technologies completely transformed our operational software. The enterprise ERP they built is remarkably fast and intuitively designed. Highly recommend their services for scaling businesses.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Director of Operations, Chennai Logistics",
    content: "The level of professionalism and technical expertise is unmatched. Their AI automation systems saved us countless hours of manual work. A true partner in digital transformation.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, InnovatePay",
    content: "Working with Hadyra felt like an extension of our own team. Their attention to detail, modern UI/UX design, and clean architecture perfectly aligned with our fintech startup needs.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <p className="text-brand-gray text-lg">
            Don't just take our word for it. Here is what industry leaders say about our solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <p className="text-brand-gray/90 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-xl border border-brand-blue/30">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-brand-gray">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
