
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Innocart
              </h3>
            </div>
            <p className="text-gray-200">
              Innocart is a ultimate destination for high quality fashion that blends style, comfort and affordability
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Home</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-300">Get in Touch</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="text-blue-300">
              +94 77 543 9120
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            Copyright 2024 Innocart - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
