import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a roadmap.'
  },
  {
    icon: Code2,
    title: 'Design & Development',
    description: 'Our team crafts stunning UI/UX and builds robust, scalable architecture using modern tech stacks.'
  },
  {
    icon: Rocket,
    title: 'Testing & Launch',
    description: 'Rigorous QA testing ensures a bug-free experience before we smoothly deploy your project to production.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Growth',
    description: 'Post-launch support, performance monitoring, and iterative improvements to keep you ahead.'
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-brand-card/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-brand-blue font-semibold tracking-wider uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            How we bring ideas to <span className="text-gradient">life</span>
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            A proven, transparent methodology designed to deliver exceptional results on time and within budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-dark border border-brand-blue/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.1)] relative">
                  <div className="absolute inset-0 rounded-full bg-brand-blue/10 animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                  <Icon className="w-10 h-10 text-brand-blue relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
