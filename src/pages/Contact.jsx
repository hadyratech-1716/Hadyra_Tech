import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-display mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-lg max-w-2xl mx-auto"
          >
            Ready to transform your business? Schedule a consultation with our technology experts today.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Office Locations</h4>
                    <p className="text-brand-gray mt-1">Chennai, Tamil Nadu, India</p>
                    <p className="text-brand-gray">Doha, Qatar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email Us</h4>
                    <p className="text-brand-gray mt-1">hello@hadyratech.com</p>
                    <p className="text-brand-gray">support@hadyratech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Call Us</h4>
                    <p className="text-brand-gray mt-1">+91 98765 43210 (India)</p>
                    <p className="text-brand-gray">+974 1234 5678 (Qatar)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10"
          >
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-gray">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-gray">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gray">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-gray">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(10,108,255,0.4)]">
                <span className="relative z-10">Send Request</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
