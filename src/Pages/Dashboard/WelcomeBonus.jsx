import React, { useState, useEffect } from 'react';

const WelcomeBonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when component mounts (page loads)
    setIsVisible(true);

    // Hide popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    <div className="fixed top-8 right-4 z-50 animate-slide-in">
      <div className="animate-bounce bg-white border border-purple-200 px-5 py-4 rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out pointer-events-auto max-w-xs backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
              ₿
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">🎉 Congratulations!</h3>
              <p className="text-sm text-gray-700 font-medium">You received <span className="text-purple-600 font-bold">200 BTC</span></p>
              <p className="text-xs text-gray-500">as welcome bonus</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors duration-200 text-xl leading-none ml-3"
          >
            ×
          </button>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
          <div className="bg-purple-600 h-1 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomeBonusPopup;