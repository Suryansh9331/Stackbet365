import React, { useState, useEffect } from 'react';
import DepositOfferPopup from "../../Components/2xBonus";

import { 
  Gamepad2, 
  Users, 
  Trophy, 
  Zap, 
  Heart, 
  Target, 
  Mail, 
  Globe, 
  Star,
  Sparkles,
  Play,
  TrendingUp,
  Shield
} from 'lucide-react';
import Footer from '../../Components/Footer';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Matchmaking",
      description: "Host online multiplayer games with lightning-fast matchmaking",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      id: 2,
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournaments & Events",
      description: "Organize tournaments, leaderboards, and exciting live events",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Gaming Community",
      description: "Build a passionate community of casual and professional gamers",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Players", icon: <Users className="w-5 h-5" /> },
    { number: "500+", label: "Daily Matches", icon: <Play className="w-5 h-5" /> },
    { number: "50+", label: "Tournaments", icon: <Trophy className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-5 h-5" /> }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('support@Stake365.com');
      alert('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="h-auto lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30   bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className={`bg-white border-b border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Stake365
            </h1>
            <p className="text-gray-600 text-lg">Your Premier Gaming Platform</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full animate-pulse">
              <Gamepad2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Stake365, we're building more than just games — we're creating a competitive and fun environment where gamers from around the world can connect, play, and grow.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">What We Do</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive gaming experiences that bring players together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-full text-white ${hoveredCard === feature.id ? 'animate-bounce' : ''}`}>
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-black mb-4 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-700 text-center leading-relaxed">
                  {feature.description}
                </p>
                {hoveredCard === feature.id && (
                  <div className="flex justify-center mt-4">
                    <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              To deliver fun, fair, and fast gaming for players of all levels.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
              <span className="text-lg font-medium">Made with passion for gamers</span>
              <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Ready to Level Up?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Let's level up together — join the Stake365 community today.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium text-lg hover:scale-105 transform shadow-lg">
              Join Our Community
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-600 text-lg">
                Have questions? Want to partner with us? We'd love to hear from you!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4">Email Us</h4>
                <button
                  onClick={copyEmail}
                  className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors duration-200"
                >
                  support@Stake365.com
                </button>
                <p className="text-gray-500 text-sm mt-2">Click to copy</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4">Visit Our Website</h4>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200"
                >
                  www.Stake365.com
                </a>
                <p className="text-gray-500 text-sm mt-2">Official website</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">Building the future of gaming</span>
              <Star className="w-5 h-5 text-yellow-400 ml-2" />
            </div>
            <p className="text-gray-500">
              © 2025 Stake365. All rights reserved. | Last updated: July 2025
            </p>
          </div>
        </div>
      </div>
    <Footer/>
       <DepositOfferPopup/>
    </div>
  );
};

export default AboutUs;