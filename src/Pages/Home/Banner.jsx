// import React from 'react';
// import { Gift, Sparkles, TrendingUp } from 'lucide-react';

// const HeroBanner = () => {
//   const coins = Array.from({ length: 8 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 15 + 25,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     delay: Math.random() * 2,
//     duration: Math.random() * 3 + 2
//   }));

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-[200px] lg:min-h-[280px] rounded-2xl">
//       {/* Subtle Background Elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-5 left-5 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
//         <div className="absolute bottom-5 right-5 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Minimal Floating Coins */}
//       <div className="absolute inset-0 pointer-events-none opacity-30">
//         {coins.map((coin) => (
//           <div
//             key={coin.id}
//             className="absolute animate-bounce"
//             style={{
//               left: `${coin.x}%`,
//               top: `${coin.y}%`,
//               animationDelay: `${coin.delay}s`,
//               animationDuration: `${coin.duration}s`,
//             }}
//           >
//             <div
//               className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center font-bold text-yellow-900 border border-yellow-300"
//               style={{
//                 width: `${coin.size}px`,
//                 height: `${coin.size}px`,
//                 fontSize: `${coin.size * 0.4}px`,
//               }}
//             >
//               $
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Simple Gift Box */}
//       <div className="absolute right-6 top-1/2 transform -translate-y-1/2 lg:right-12 pointer-events-none opacity-80">
//         <div className="relative">
//           <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl transform rotate-12">
//             <div className="absolute top-1/2 left-0 right-0 h-2 lg:h-3 bg-gradient-to-r from-blue-500 to-blue-700 transform -translate-y-1/2"></div>
//             <div className="absolute top-0 bottom-0 left-1/2 w-2 lg:w-3 bg-gradient-to-b from-blue-500 to-blue-700 transform -translate-x-1/2"></div>
//             <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
//               <div className="w-4 h-3 lg:w-5 lg:h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
//             </div>
//           </div>
          
//           {/* Few coins around gift */}
//           <div className="absolute -top-3 -left-3 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce delay-300 flex items-center justify-center font-bold text-yellow-900 text-xs">
//             $
//           </div>
//           <div className="absolute -bottom-2 -right-2 w-5 h-5 lg:w-7 lg:h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center font-bold text-yellow-900 text-xs">
//             $
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 px-6 py-8 lg:px-12 lg:py-12">
//         <div className="max-w-xl">
//           {/* Platform Badge */}
//           <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/30">
//             <Sparkles className="w-3 h-3 text-yellow-300" />
//             <span className="text-white font-semibold text-sm">Stackbet365</span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
//             Double Your First Deposit
//             <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text">
//               Get 2X Bonus!
//             </span>
//           </h1>

//           {/* Clear Subtitle */}
//           <p className="text-lg lg:text-xl text-blue-100 mb-6 leading-relaxed">
//             Make your first deposit and instantly receive 100% bonus. 
//             Double your money, double your winning potential!
//           </p>

//           {/* Key Benefits */}
//           <div className="flex flex-wrap gap-3 mb-6">
//             <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
//               <TrendingUp className="w-3 h-3 text-green-300" />
//               <span className="text-white text-sm font-medium">Instant 2X Bonus</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
//               <Gift className="w-3 h-3 text-purple-300" />
//               <span className="text-white text-sm font-medium">First Deposit Only</span>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold lg:text-lg sm:text-md hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
//               <Gift className="w-5 h-5" />
//               Deposit & Get 2X Bonus
//             </button>
//             <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-white/30 transition-all duration-300 border border-white/30">
//               Learn More
//             </button>
//           </div>

//           {/* Terms */}
//           <div className="mt-5">
//             <p className="text-blue-200 text-sm">
//               <span className="font-medium">Bonus Terms:</span> 
//               <span className="underline cursor-pointer hover:text-white transition-colors ml-1">
//                 Terms & Conditions apply
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
//     </div>
//   );
// };

// export default HeroBanner;
import React from 'react';
import { Gift, Sparkles, TrendingUp } from 'lucide-react';

const HeroBanner = () => {
  const coins = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 25,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-[160px] lg:min-h-[200px] rounded-2xl">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-5 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Minimal Floating Coins */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute animate-bounce"
            style={{
              left: `${coin.x}%`,
              top: `${coin.y}%`,
              animationDelay: `${coin.delay}s`,
              animationDuration: `${coin.duration}s`,
            }}
          >
            <div
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg flex items-center justify-center font-bold text-yellow-900 border border-yellow-300"
              style={{
                width: `${coin.size}px`,
                height: `${coin.size}px`,
                fontSize: `${coin.size * 0.4}px`,
              }}
            >
              $
            </div>
          </div>
        ))}
      </div>

      {/* Simple Gift Box */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 lg:right-12 pointer-events-none opacity-80">
        <div className="relative">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl transform rotate-12">
            <div className="absolute top-1/2 left-0 right-0 h-2 lg:h-3 bg-gradient-to-r from-blue-500 to-blue-700 transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-2 lg:w-3 bg-gradient-to-b from-blue-500 to-blue-700 transform -translate-x-1/2"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-3 lg:w-5 lg:h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Few coins around gift */}
          <div className="absolute -top-3 -left-3 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce delay-300 flex items-center justify-center font-bold text-yellow-900 text-xs">
            $
          </div>
          <div className="absolute -bottom-2 -right-2 w-5 h-5 lg:w-7 lg:h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center font-bold text-yellow-900 text-xs">
            $
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-6 lg:px-12 lg:py-8">
        <div className="max-w-xl">
          {/* Platform Badge */}
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 mb-3 border border-white/30">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span className="text-white font-semibold text-sm">Stackbet365</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
            Double Your First Deposit
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text">
              Get 2X Bonus!
            </span>
          </h1>

          {/* Clear Subtitle */}
          <p className="text-base lg:text-lg text-blue-100 mb-4 leading-relaxed">
            Make your first deposit and instantly receive 100% bonus. 
            Double your money, double your winning potential!
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <TrendingUp className="w-3 h-3 text-green-300" />
              <span className="text-white text-sm font-medium">Instant 2X Bonus</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <Gift className="w-3 h-3 text-purple-300" />
              <span className="text-white text-sm font-medium">First Deposit Only</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold lg:text-lg sm:text-md hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
              <Gift className="w-5 h-5" />
              Deposit & Get 2X Bonus
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-white/30 transition-all duration-300 border border-white/30">
              Learn More
            </button>
          </div>

          {/* Terms */}
          <div className="mt-3">
            <p className="text-blue-200 text-sm">
              <span className="font-medium">Bonus Terms:</span> 
              <span className="underline cursor-pointer hover:text-white transition-colors ml-1">
                Terms & Conditions apply
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
    </div>
  );
};

export default HeroBanner;