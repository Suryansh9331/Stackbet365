import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import offer  from "../assets/image.png"
const DepositOfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const showPopup = () => {
    setIsVisible(true);
    setAnimate(true);
  };

  const startTimer = () => {
    // Clear any existing timers
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timer for 10 seconds
    timeoutRef.current = setTimeout(() => {
      showPopup();
      // After showing, set up the next timer
      intervalRef.current = setInterval(showPopup, 10000);
    }, 10000);
  };

  useEffect(() => {
    // Show popup immediately on mount after 1 second
    const initialTimeout = setTimeout(() => {
      showPopup();
      // Start the recurring timer after first show
      intervalRef.current = setInterval(showPopup, 10000);
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setIsVisible(false), 300);
    
    // Clear current interval and start fresh timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Restart the timer when popup is closed
    startTimer();
  };



  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50">
      <div
        className={`relative bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden transform transition-all duration-300 ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 hover:cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Casino Image Placeholder - Replace with your actual image */}
         <div className="mb-6 flex justify-center">
            <img 
              src={offer}
              alt="Casino offer" 
              className="w-40 h-32 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            FIRST TIME DEPOSIT
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 mb-4 text-sm">upto</p>

          {/* Offer Amount */}
          <div className="mb-6">
            <div className="text-5xl font-bold text-purple-600 mb-2 animate-bounce">
              2X
            </div>
            <div className="text-gray-900 font-semibold text-lg">
              AMOUNT ON YOUR FIRST DEPOSIT
            </div>
          </div>

          {/* CTA Button */}
          <Link to  = "/deposite-page">
            <button className="w-full hover:cursor-pointer bg-purple-600  text-white   font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
              Claim
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositOfferPopup;




// import React, { useState, useEffect, useRef } from "react";
// import { X } from "lucide-react";

// const DepositOfferPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animate, setAnimate] = useState(false);
//   const intervalRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const showPopup = () => {
//     setIsVisible(true);
//     setAnimate(true);
//   };

//   const startTimer = () => {
//     // Clear any existing timers
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Set new timer for 10 seconds
//     timeoutRef.current = setTimeout(() => {
//       showPopup();
//       // After showing, set up the next timer
//       intervalRef.current = setInterval(showPopup, 10000);
//     }, 10000);
//   };

//   useEffect(() => {
//     // Show popup immediately on mount after 1 second
//     const initialTimeout = setTimeout(() => {
//       showPopup();
//       // Start the recurring timer after first show
//       intervalRef.current = setInterval(showPopup, 10000);
//     }, 1000);

//     return () => {
//       clearTimeout(initialTimeout);
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   const handleClose = () => {
//     setAnimate(false);
//     setTimeout(() => setIsVisible(false), 300);
    
//     // Clear current interval and start fresh timer
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
    
//     // Restart the timer when popup is closed
//     startTimer();
//   };

//   const handleClaim = () => {
//     // Replace this with your navigation logic
//     console.log("Navigate to deposit page");
//     // You can use your router navigation here
//     // For example: navigate('/deposite-page');
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50">
//       <div
//         className={`relative bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden transform transition-all duration-300 ${
//           animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 z-10 hover:cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
//         >
//           <X className="w-5 h-5 text-gray-600" />
//         </button>

//         {/* Content */}
//         <div className="p-8 text-center">
//           {/* Casino Image Placeholder */}
//          <div className="mb-6 flex justify-center">
//             <div className="w-40 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
//               <div className="text-purple-600 font-bold text-lg">CASINO</div>
//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="text-xl font-bold text-gray-900 mb-2">
//             FIRST TIME DEPOSIT
//           </h2>

//           {/* Subtitle */}
//           <p className="text-gray-500 mb-4 text-sm">upto</p>

//           {/* Offer Amount */}
//           <div className="mb-6">
//             <div className="text-5xl font-bold text-purple-600 mb-2 animate-bounce">
//               2X
//             </div>
//             <div className="text-gray-900 font-semibold text-lg">
//               AMOUNT ON YOUR FIRST DEPOSIT
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button 
//             onClick={handleClaim}
//             className="w-full hover:cursor-pointer bg-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
//           >
//             Claim
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepositOfferPopup;