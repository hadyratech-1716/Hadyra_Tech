import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Target } from 'lucide-react';

const features = [
  {
    title: 'Enterprise-Grade Security',
    desc: 'Advanced security protocols and compliance standards baked into every solution.',
    icon: Shield,
  },
  {
    title: 'High-Performance Architecture',
    desc: 'Scalable cloud infrastructure designed for speed and zero downtime.',
    icon: Zap,
  },
  {
    title: 'Precision & Quality',
    desc: 'Rigorous testing and QA processes to ensure flawless delivery.',
    icon: Target,
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-3xl overflow-hidden glass-card p-1 border-white/10 bg-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent"></div>
          <div className="w-full h-full rounded-2xl bg-[#0a101f] border border-white/5 p-8 relative overflow-hidden">
            {/* Abstract dashboard UI */}
            <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="space-y-6">
              {[80, 60, 90, 40].map((width, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-white/5"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full w-full mb-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${width}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 * i }}
                        className="h-full bg-brand-blue rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Glowing orb */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/30 blur-[80px] rounded-full"></div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
            Built For <span className="text-white">Scale,</span> <br/>
            Engineered For <span className="text-gradient">Success.</span>
          </h2>
          
          <p className="text-brand-gray text-lg mb-12">
            We don't just write code; we build digital ecosystems. Our approach merges cutting-edge technology with deep business acumen to give you a competitive edge.
          </p>

          <div className="space-y-8">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-brand-gray">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
