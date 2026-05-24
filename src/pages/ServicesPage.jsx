import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEO 
        title="Our Services | HADYRA TECHNOLOGIES" 
        description="Explore our premium services including Web Development, Mobile App Development, AI Automation, and ERP Solutions in Chennai."
        keywords="Web development company Chennai, Mobile app development, AI automation services, ERP software solutions"
      />
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold font-display mb-6"
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-gray text-lg max-w-2xl mx-auto"
        >
          Comprehensive technology solutions designed to scale your business, optimize operations, and create stunning digital experiences.
        </motion.p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
