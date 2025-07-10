import React from 'react';
import { Mail, Shield, FileText, HelpCircle, Users, Trophy, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t-2 mt-10 border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <div className="flex items-baseline space-x-0">
                <span className="text-2xl font-bold text-gray-800 tracking-tight">Stack</span>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">Bet</span>
                <span className="text-xl font-normal text-[#9810FA] ml-0.5">365</span>
              </div>
              <span className="text-sm text-gray-500 font-medium tracking-wide">Casino & Sports</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              At StackBet365, we are committed to promoting responsible gambling practices. We believe in creating a safe and enjoyable gaming environment for all players.
            </p>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4 text-[#9810FA]" />
              <span className="text-sm">stackbet365@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
              <FileText className="w-5 h-5 text-[#9810FA] mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <Users className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <HelpCircle className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <Shield className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <FileText className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Gaming Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
              <Gamepad2 className="w-5 h-5 text-[#9810FA] mr-2" />
              Gaming
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#casino" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <div className="w-4 h-4 mr-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                  Casino Original
                </a>
              </li>
              <li>
                <a href="#sports" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <Trophy className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100" />
                  Sports Betting
                </a>
              </li>
              <li>
                <a href="#live-casino" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <div className="w-4 h-4 mr-2 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                  Live Casino
                </a>
              </li>
              <li>
                <a href="#slots" className="text-gray-600 hover:text-[#9810FA] transition-colors duration-200 text-sm flex items-center group">
                  <div className="w-4 h-4 mr-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                  Slot Games
                </a>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
              <Shield className="w-5 h-5 text-[#9810FA] mr-2" />
              Responsible Gaming
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Please ensure you are 18 years or older to participate, and remember to play responsibly. Your well-being is our top priority.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="#support" className="text-[#9810FA] hover:text-purple-600 transition-colors duration-200 text-sm font-medium">
                Support Center
              </a>
              <a href="#responsible-gaming" className="text-[#9810FA] hover:text-purple-600 transition-colors duration-200 text-sm font-medium">
                Responsible Gaming Tools
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 StackBet365.com | All Rights Reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#contact" className="text-gray-500 hover:text-[#9810FA] transition-colors duration-200">
                Contact Us
              </a>
              <a href="#sitemap" className="text-gray-500 hover:text-[#9810FA] transition-colors duration-200">
                Sitemap
              </a>
              <a href="#affiliates" className="text-gray-500 hover:text-[#9810FA] transition-colors duration-200">
                Affiliates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Age Verification Banner */}
      
    </footer>
  );
};

export default Footer;