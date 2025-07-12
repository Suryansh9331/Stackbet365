import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Shield, Users, CreditCard, Copyright, AlertTriangle } from 'lucide-react';
import Footer from '../../Components/Footer';
import DepositOfferPopup from "../../Components/2xBonus";


const TermsAndConditions = () => {
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
      title: "Account Usage",
      icon: <Users className="w-5 h-5" />,
      content: [
        "You must be 13+ years old to use our services and create an account on our platform.",
        "You are fully responsible for all activity that occurs under your account, including security.",
        "Sharing, renting, or selling your account to other users is strictly prohibited and may result in permanent suspension."
      ]
    },
    {
      id: 2,
      title: "Game Rules",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Cheating, exploiting bugs, or using unauthorized third-party software is strictly forbidden.",
        "All players must treat each other with respect — harassment, hate speech, or toxic behavior will not be tolerated.",
        "Fair play is essential to our community, and violations will be investigated and penalized accordingly."
      ]
    },
    {
      id: 3,
      title: "Payments and Virtual Items",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        "All purchases made on our platform are final and non-refundable under standard circumstances.",
        "Virtual goods or in-game currency hold no real-world monetary value outside the platform.",
        "We reserve the right to modify pricing and availability of virtual items at any time."
      ]
    },
    {
      id: 4,
      title: "Content and Copyright",
      icon: <Copyright className="w-5 h-5" />,
      content: [
        "Uploading or distributing copyrighted content without proper permission is not allowed.",
        "Stake365's branding, games, and media assets are protected by copyright and intellectual property laws.",
        "Users retain ownership of their original content but grant us license to use it within our platform."
      ]
    },
    {
      id: 5,
      title: "Account Termination",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        "Violation of these terms may result in account suspension or permanent ban from our platform.",
        "We reserve the right to terminate accounts that engage in fraudulent or harmful activities.",
        "Users may deactivate their accounts at any time through their account settings."
      ]
    }
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
    <div className="min-h-screen bg-white lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-30  sm:mt-40 mt-30 ">
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
            Terms and Conditions
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-black">
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome toStake365. By accessing or using our platform, you agree to be bound by the following terms and conditions. Please read them carefully before using our services.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full font-bold">
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
                          <span className="text-black font-bold mt-1">•</span>
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
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Questions or Concerns?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              If you have any questions about these terms or need support, please don't hesitate to contact us:
            </p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">support@Stake365.com</span>
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
      <DepositOfferPopup/>
    </div>
  );
};

export default TermsAndConditions;