import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ShowcasePreview from '../components/ShowcasePreview';
import ProcessTimeline from '../components/ProcessTimeline';
import TrustBadges from '../components/TrustBadges';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import SEO from '../components/SEO';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const Home = () => {
  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="pt-20"
    >
      <SEO 
        title="HADYRA TECHNOLOGIES | Premium Digital Solutions" 
        description="Transforming businesses with premium web development, application development, and cutting-edge software solutions."
        keywords="Hadyra Technologies, software development company, premium web design"
      />
      
      {/* 1. Hero: What transformation do you provide? */}
      <Hero />
      
      {/* 2. Showcase: What have you built? */}
      <ShowcasePreview />
      
      {/* 3. Process: How do clients work with you? */}
      <ProcessTimeline />
      
      {/* 4. Social Proof: Why trust you? */}
      <TrustBadges />
      <Stats />
      <Testimonials />
      
      {/* 5. CTA: How to contact? */}
      <CallToAction />
      
    </motion.div>
  );
};

export default Home;
