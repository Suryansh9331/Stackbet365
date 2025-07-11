import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  User,
  DollarSign,
  Lock,
  Bug,
  Smartphone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Footer from "../../Components/Footer";

const FAQ = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const faqs = [
    {
      id: 1,
      question: "How do I sign up?",
      answer:
        'Click the "Sign Up" button and follow the instructions using your email or social login.',
      icon: <User className="w-5 h-5" />,
      category: "Account",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      question: "Is Stake365 free to play?",
      answer:
        "Yes, most of our games are free! Some items and features may require payment.",
      icon: <DollarSign className="w-5 h-5" />,
      category: "Billing",
      color: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      question: "I forgot my password. What do I do?",
      answer:
        'Use the "Forgot Password" link on the login page to reset it instantly.',
      icon: <Lock className="w-5 h-5" />,
      category: "Account",
      color: "bg-orange-100 text-orange-700",
    },
    {
      id: 4,
      question: "How can I report a bug or abusive player?",
      answer:
        'Go to the "Support" section or use the in-game report button to notify us.',
      icon: <Bug className="w-5 h-5" />,
      category: "Support",
      color: "bg-red-100 text-red-700",
    },
    {
      id: 5,
      question: "Can I play on mobile?",
      answer:
        "Absolutely! Stake365 is mobile-optimized and works on all major browsers.",
      icon: <Smartphone className="w-5 h-5" />,
      category: "Technical",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <div className="h-auto bg-gradient-to-br from-gray-50 to-white lg:px-10  px-2 md:px-6 py-4 space-y-6 lg:mt-4 md:mt-4  sm:mt-40 mt-30 ">
      {/* Header */}
      <div
        className={`bg-white border-b border-gray-200 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
             Stake365
            </h1>
            <p className="text-gray-600 text-lg">
              Your Premier Gaming Platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* FAQ Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions aboutStake365. Can't find what
            you're looking for? Contact our support team!
          </p>
        </div>

       

        {/* Categories */}
        <div
          className={`mb-8 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-1000 hover:shadow-md ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <button
                  onClick={() => toggleSection(faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${faq.color}`}
                      >
                        {faq.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {faq.category}
                          </span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">
                            Q{faq.id}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-black">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {expandedSection === faq.id && (
                        <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                      )}
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          expandedSection === faq.id
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="ml-14">
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-600">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all categories above.
              </p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mt-12 text-white transition-all duration-1000 delay-800 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-purple-100 mb-6 text-lg">
              Can't find the answer you're looking for? Our support team is here
              to help!
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 font-medium">
              <MessageCircle className="w-4 h-4" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
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

export default FAQ;
