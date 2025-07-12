import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Database, Share2, Shield, Eye } from 'lucide-react';
import Footer from '../../Components/Footer';


const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Personal information: Name, email, and contact details (when registering or contacting us)",
        "Gameplay data: Match history, leaderboards, interactions",
        "Device & location data: IP address, browser type, and session details"
      ]
    },
    {
      id: 2,
      title: "How We Use Your Data",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "Improve and personalize your gaming experience",
        "Send updates, offers, and support communications",
        "Perform analytics to enhance platform performance"
      ]
    },
    {
      id: 3,
      title: "Sharing of Information",
      icon: <Share2 className="w-5 h-5" />,
      content: [
        "We do not sell your personal data. We may share information with:",
        "Payment processors and technical support services",
        "Legal authorities, if required by law",
        "Game developers or affiliates (only when needed)"
      ]
    },
    {
      id: 4,
      title: "Your Rights",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Access or update your data",
        "Request data deletion",
        "Opt out of marketing messages at any time"
      ]
    }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('privacy@Stake365.com');
      alert('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white   lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 ">
      {/* Header */}
      <div className={`bg-white border-b border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
             Stake365
            </h1>
            <p className="text-gray-600 text-lg">Your Premier Gaming Platform</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className={`bg-white border border-gray-200 rounded-lg p-8 mb-12 shadow-sm transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Privacy Policy
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
            <p className="text-gray-700 text-lg leading-relaxed">
              AtStake365, your privacy is important to us. This policy explains how we collect, use, and protect your data.
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold">
                      {section.id}
                    </div>
                    <div className="flex items-center space-x-3">
                      {section.icon}
                      <h3 className="text-xl font-semibold text-black">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      expandedSection === section.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="ml-14">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <span className="text-purple-600 font-bold mt-1">•</span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className={`bg-white border border-gray-200 rounded-lg p-8 mt-12 shadow-sm transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Have Concerns?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              If you have any questions about our privacy practices or need to exercise your rights, please contact us:
            </p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">privacy@Stake365.com</span>
            </button>
            <p className="text-gray-500 text-sm mt-2">Click to copy email address</p>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500">
              © 2025Stake365. All rights reserved. | Last updated: July 2025
            </p>
          </div>
        </div>
      </div>
 <Footer/>  
    </div>
  );
};

export default PrivacyPolicy;