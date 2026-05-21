import React from 'react';

const TrustBadges = () => {
  // Placeholder logos using text for now, in a real app these would be SVGs
  const companies = ['Cognizant', 'Microsoft', 'IBM', 'Oracle', 'Stripe', 'Linear'];
  
  return (
    <section className="py-12 border-b border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-brand-gray text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted by Innovative Teams Worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {companies.map((company) => (
            <div key={company} className="text-xl md:text-2xl font-display font-bold text-white/50 hover:text-white transition-colors duration-300">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
