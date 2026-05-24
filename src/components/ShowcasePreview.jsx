import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A high-performance online store with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  },
  {
    title: 'AI Billing Solution',
    category: 'Software',
    description: 'Automated GST billing software with predictive inventory analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '/portfolio'
  }
];

const ShowcasePreview = () => {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-brand-gray text-lg md:text-xl">
              We build digital experiences that drive real business results.
            </p>
          </div>
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 text-brand-blue hover:text-brand-white transition-colors duration-300 font-medium group"
          >
            View all projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-full">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <span className="text-brand-blue text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-brand-gray">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcasePreview;
