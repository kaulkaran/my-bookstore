import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5D2F6D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#D5A6F1] text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            QualtBooks is your gateway to endless stories and knowledge. 
              We provide a curated collection of e-books for every reader.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#D5A6F1] text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">qualtspire@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8948598589</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Uttar Pradesh</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#D5A6F1] text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#8A47D0] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#8A47D0] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#8A47D0] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-400/20 text-center">
          <p className="text-sm">© 2024 QualtBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
