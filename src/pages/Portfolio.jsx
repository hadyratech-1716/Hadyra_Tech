import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const projects = [
  { title: "Enterprise ERP Portal", category: "Web App", image: "bg-blue-900" },
  { title: "Fintech Mobile Wallet", category: "Mobile App", image: "bg-indigo-900" },
  { title: "AI Customer Support", category: "AI Automation", image: "bg-cyan-900" },
  { title: "Global Logistics Dashboard", category: "Web App", image: "bg-slate-800" },
  { title: "E-Commerce Platform", category: "Web Dev", image: "bg-fuchsia-900" },
  { title: "Cloud Infrastructure Setup", category: "Cloud", image: "bg-sky-900" },
];

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <SEO 
        title="Our Portfolio | HADYRA TECHNOLOGIES" 
        description="A showcase of our most impactful digital projects including Restaurant Billing Apps, ERP Dashboards, and AI Chatbots."
        keywords="Business software company, enterprise IT solutions, portfolio, Chennai software company"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg max-w-2xl mx-auto"
          >
            A showcase of our most impactful projects. We've helped enterprises across the globe achieve digital excellence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer glass-card overflow-hidden"
            >
              <div className={`h-64 ${project.image} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="text-white/20 font-display text-4xl font-bold tracking-widest uppercase rotate-[-45deg] scale-150 group-hover:scale-110 group-hover:text-white/40 transition-all duration-700">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-brand-blue text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
