import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '5+', label: 'Countries Served' },
  { value: '99%', label: 'Client Satisfaction' },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 relative overflow-hidden bg-white/[0.02]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold font-display text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-brand-gray font-medium uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
