import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-grid-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" style={{ willChange: 'transform' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gray text-sm font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Chennai & Gulf Based Tech Enterprise
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            Accelerate Growth With <br />
            <span className="text-gradient">Intelligent Tech</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-brand-gray text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            HADYRA TECHNOLOGIES engineers high-performance software, AI automation, and digital ecosystems designed to maximize ROI, reduce operational costs, and scale your enterprise.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link to="/services">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold overflow-hidden transition-all"
              >
                <span className="relative z-10">Explore Solutions</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold transition-colors backdrop-blur-md"
              >
                See Our Work
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Abstract Tech Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-20 glass-card p-4 flex items-center gap-4 w-48 shadow-2xl shadow-black/50"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold">Global Scale</div>
              <div className="text-xs text-brand-gray">Cloud Infrastructure</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-0 z-20 glass-card p-4 flex items-center gap-4 w-52 shadow-2xl shadow-black/50"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold">Clean Code</div>
              <div className="text-xs text-brand-gray">Enterprise Software</div>
            </div>
          </motion.div>

          {/* Center Main Orb */}
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-brand-blue/40 to-cyan-400/40 flex items-center justify-center border border-white/20 shadow-[0_0_80px_rgba(99,102,241,0.3)]">
            <div className="w-48 h-48 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
              <Cpu className="w-16 h-16 text-white/80 relative z-10" />
            </div>

            {/* Orbiting element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/20"
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_10px_#6366f1]"></div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
