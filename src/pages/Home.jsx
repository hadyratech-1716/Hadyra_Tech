import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="HADYRA TECHNOLOGIES | Home" 
        description="Transforming businesses with premium web development, application development, and cutting-edge software solutions."
        keywords="Hadyra Technologies, software development company, premium web design"
      />
      <Hero />
      <TrustBadges />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
