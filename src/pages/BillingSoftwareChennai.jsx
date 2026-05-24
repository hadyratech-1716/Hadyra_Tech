import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Services from '../components/Services';

const BillingSoftwareChennai = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEO 
        title="Billing Software in Chennai | Hadyra Technology" 
        description="Looking for the best billing software in Chennai? Hadyra Technology offers GST-ready, cloud-based, and offline billing solutions for retail, restaurants, and supermarkets."
        keywords="Billing Software in Chennai, POS software Chennai, GST billing software, Retail billing software, Supermarket software Chennai"
      />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold font-display mb-6"
        >
          Best <span className="text-gradient">Billing Software</span> in Chennai
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-gray text-lg max-w-3xl mx-auto mb-10"
        >
          Empower your retail business, restaurant, or supermarket with Chennai's leading GST billing and POS software. We provide fast, secure, and easy-to-use billing solutions designed to streamline your daily operations, manage inventory, and boost your sales.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left"
        >
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">GST Ready Solutions</h3>
            <p className="text-brand-gray">Generate fast GST invoices with barcode scanning. File returns seamlessly with comprehensive tax reports.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Inventory Management</h3>
            <p className="text-brand-gray">Track your stock in real-time. Get alerts for low stock and manage multiple branches effortlessly.</p>
          </div>
          <div className="bg-brand-dark/50 border border-brand-blue/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Cloud & Offline Modes</h3>
            <p className="text-brand-gray">Access your business data from anywhere securely, or operate seamlessly even without an internet connection.</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <Services />
      </div>
    </div>
  );
};

export default BillingSoftwareChennai;
