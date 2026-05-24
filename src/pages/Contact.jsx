import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import SEO from '../components/SEO';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_lgiiode",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_8elj0nl",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xxEIBSZ-MgQSULA59"
        }
      );

      setSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <SEO 
        title="Contact Us | HADYRA TECHNOLOGIES" 
        description="Ready to transform your business? Contact Hadyra Technologies in Chennai or Qatar to schedule a consultation with our technology experts."
        keywords="contact IT company, software company Chennai contact, Qatar tech company support"
      />
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
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email Us</h4>
                    <p className="text-brand-gray mt-1">hadyratech@gmail.com</p>
                    <p className="text-brand-gray">support@hadyratech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Call Us</h4>
                    <p className="text-brand-gray mt-1">+91 93451 54161 (India)</p>
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
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-brand-gray">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-blue hover:text-white font-medium transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-gray">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-gray">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-gray">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
