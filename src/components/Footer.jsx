import React from 'react';
import { Mail, MapPin, Phone, Globe, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#020813] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-1">
            <div className="mb-8 origin-left transform scale-90">
              <Link to="/">
                <Logo className="items-start" />
              </Link>
            </div>
            <p className="text-brand-gray mb-8 leading-relaxed text-sm">
              Architecting the digital future. Premium software solutions for ambitious enterprises across the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-brand-gray hover:text-white transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-white transition-colors text-sm">Mobile Applications</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-white transition-colors text-sm">AI Automation</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-white transition-colors text-sm">ERP Systems</Link></li>
              <li><Link to="/services" className="text-brand-gray hover:text-white transition-colors text-sm">Cloud Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-brand-gray hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/portfolio" className="text-brand-gray hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/contact" className="text-brand-gray hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-brand-gray hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-brand-gray hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-gray text-sm">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Chennai, India <br /> Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3 text-brand-gray text-sm">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:hello@hadyra.com" className="hover:text-white transition-colors">hadyratech@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-brand-gray text-sm">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>+91 93451 54161</span>
                <span>+974 517 0099</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-sm">
            &copy; {new Date().getFullYear()} Hadyra Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-gray">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
