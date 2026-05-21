import React from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <TrustBadges />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
