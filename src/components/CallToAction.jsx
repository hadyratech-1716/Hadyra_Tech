import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 text-center border-brand-blue/20 shadow-[0_0_50px_rgba(99,102,241,0.1)] relative overflow-hidden"
        >
          {/* Inner Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to transform your business?</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Let's build something <br className="hidden md:block" />
              <span className="text-gradient">extraordinary</span> together.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Book a free consultation today and discover how our premium digital solutions can accelerate your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-blue text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all duration-300 w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/portfolio">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
