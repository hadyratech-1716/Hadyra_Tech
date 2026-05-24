import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Services from '../components/Services';

const AIAutomationIndia = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEO 
        title="AI Automation Services India | Hadyra Technology" 
        description="Accelerate your business growth with top AI Automation Services in India. Hadyra Technology provides intelligent RPA, chatbots, and machine learning solutions."
        keywords="AI Automation Services India, RPA companies India, Machine Learning solutions, AI chatbots, Business process automation"
      />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold font-display mb-6"
        >
          Leading <span className="text-gradient">AI Automation</span> Services in India
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-gray text-lg max-w-3xl mx-auto mb-10"
        >
          Step into the future with intelligent automation. We help businesses across India and globally to automate repetitive tasks, reduce operational costs, and make data-driven decisions using Artificial Intelligence and Machine Learning.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left"
        >
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Smart Chatbots</h3>
            <p className="text-brand-gray">Deploy conversational AI assistants that provide 24/7 customer support, generate leads, and integrate seamlessly with your existing platforms.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Process Automation (RPA)</h3>
            <p className="text-brand-gray">Eliminate manual data entry and repetitive workflows. Our RPA solutions save hundreds of hours and reduce human error effectively.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-brand-gray">Leverage machine learning models to forecast trends, analyze customer behavior, and optimize your business strategy for maximum ROI.</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <Services />
      </div>
    </div>
  );
};

export default AIAutomationIndia;
