import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6"
          >
            About <span className="text-gradient">Hadyra</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg max-w-3xl mx-auto leading-relaxed"
          >
            HADYRA TECHNOLOGIES is a premium software engineering firm operating in Chennai, India and Doha, Qatar. We specialize in building scalable, secure, and beautiful digital solutions for modern enterprises.
          </motion.p>
        </div>

        {/* Vision / Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <div className="w-14 h-14 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-brand-gray leading-relaxed text-lg">
              To be the global catalyst for digital transformation, empowering businesses with cutting-edge technology that drives growth and innovation on a massive scale.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-brand-blue/30"
          >
            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-brand-gray leading-relaxed text-lg">
              We deliver engineered excellence through custom software, AI automation, and cloud solutions, ensuring our clients stay ahead in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
