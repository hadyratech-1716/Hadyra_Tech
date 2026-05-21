import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Bot, Database, Cloud, Layout, Briefcase } from 'lucide-react';

const servicesList = [
  {
    title: 'Web Development',
    desc: 'Modern responsive websites with premium UI/UX for startups and enterprises.',
    icon: Layout,
    color: 'from-blue-500/20 to-blue-500/0'
  },
  {
    title: 'Mobile Apps',
    desc: 'Android and cross-platform mobile applications designed for scalability.',
    icon: Smartphone,
    color: 'from-purple-500/20 to-purple-500/0'
  },
  {
    title: 'AI Automation',
    desc: 'Smart automation systems, chatbots and AI-powered business tools.',
    icon: Bot,
    color: 'from-cyan-500/20 to-cyan-500/0'
  },
  {
    title: 'ERP Systems',
    desc: 'Business management systems for inventory, billing and operations.',
    icon: Database,
    color: 'from-emerald-500/20 to-emerald-500/0'
  },
  {
    title: 'Cloud Solutions',
    desc: 'Secure cloud deployment and scalable hosting infrastructure solutions.',
    icon: Cloud,
    color: 'from-orange-500/20 to-orange-500/0'
  },
  {
    title: 'Business Software',
    desc: 'Custom software solutions tailored to optimize your business processes.',
    icon: Briefcase,
    color: 'from-pink-500/20 to-pink-500/0'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Engineering <span className="text-gradient">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg"
          >
            We deliver robust, scalable, and intelligent solutions designed to accelerate your digital transformation.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="group relative glass-card p-8 hover:-translate-y-2 transition-transform duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/10">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-brand-gray leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
