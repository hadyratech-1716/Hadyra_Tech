import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Services from '../components/Services';

const WebDevelopmentTamilNadu = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEO 
        title="Website Development in Tamil Nadu | Hadyra Technology" 
        description="Top-rated website development company in Tamil Nadu. We build custom, responsive, and SEO-friendly websites, eCommerce platforms, and web apps for businesses."
        keywords="Website Development in Tamil Nadu, Web design company Chennai, eCommerce website development, Custom web apps Tamil Nadu, React developers India"
      />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold font-display mb-6"
        >
          Expert <span className="text-gradient">Website Development</span> in Tamil Nadu
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-gray text-lg max-w-3xl mx-auto mb-10"
        >
          Transform your digital presence with Tamil Nadu's leading web development agency. From corporate websites to complex eCommerce platforms, we deliver fast, scalable, and beautifully designed digital experiences tailored to your business needs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left"
        >
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Custom Web Apps</h3>
            <p className="text-brand-gray">We build robust, full-stack web applications using the latest technologies like React, Node.js, and Python, ensuring high performance.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">eCommerce Solutions</h3>
            <p className="text-brand-gray">Launch your online store with secure payment gateways, inventory management, and an intuitive shopping experience for your customers.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">SEO & Performance</h3>
            <p className="text-brand-gray">Our websites are built with SEO best practices and speed optimization to ensure you rank higher on Google and convert more visitors.</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <Services />
      </div>
    </div>
  );
};

export default WebDevelopmentTamilNadu;
