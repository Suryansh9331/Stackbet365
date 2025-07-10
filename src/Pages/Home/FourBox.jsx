// import React, { useState } from 'react';

// const GamingCategories = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const categories = [
//     {
//       id: 1,
//       title: "Casino",
//       bgColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
//       glowColor: "shadow-emerald-500/50",
//       icon: "🎰",
//       description: "Live Casino & Table Games",
//       particles: ["🎲", "🃏", "💎", "🎯"]
//     },
//     {
//       id: 2,
//       title: "Sports",
//       bgColor: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600",
//       glowColor: "shadow-orange-500/50",
//       icon: "⚽",
//       description: "Live Sports Betting",
//       particles: ["🏀", "🏈", "🎾", "⚾"]
//     },
//     {
//       id: 3,
//       title: "Original",
//       bgColor: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600",
//       glowColor: "shadow-purple-500/50",
//       icon: "🎮",
//       description: "Exclusive Original Games",
//       particles: ["⭐", "🌟", "✨", "💫"]
//     },
//     {
//       id: 4,
//       title: "Crash Games",
//       bgColor: "bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-600",
//       glowColor: "shadow-blue-500/50",
//       icon: "🚀",
//       description: "High Multiplier Crash",
//       particles: ["🔥", "💥", "⚡", "🌈"]
//     }
//   ];

//   const FloatingParticles = ({ particles, isHovered }) => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle, index) => (
//         <div
//           key={index}
//           className={`absolute text-lg opacity-20 transition-all duration-1000 ${
//             isHovered ? 'animate-bounce' : ''
//           }`}
//           style={{
//             top: `${20 + index * 20}%`,
//             left: `${10 + index * 20}%`,
//             animationDelay: `${index * 0.2}s`,
//             animationDuration: `${2 + index * 0.3}s`
//           }}
//         >
//           {particle}
//         </div>
//       ))}
//     </div>
//   );

//   const PulsingGlow = ({ isHovered }) => (
//     <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 ${
//       isHovered ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5'
//     }`}>
//       <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-700 ${
//         isHovered ? 'shadow-2xl shadow-white/30' : 'shadow-lg shadow-black/20'
//       }`} />
//     </div>
//   );

//   const AnimatedBorder = ({ isHovered }) => (
//     <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 ${
//       isHovered ? 'bg-gradient-to-r from-white/30 via-transparent to-white/30' : 'bg-transparent'
//     }`}>
//       <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
//     </div>
//   );

//   return (
//     <div className="w-full max-w-7xl   sm:px-4  py-4">
//       {/* Desktop and Tablet: 2x2 Grid */}
//       <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`
//               ${category.bgColor}
//               rounded-xl sm:rounded-2xl p-4 sm:p-6 
//               h-[140px] sm:h-[160px] lg:h-[180px]
//               cursor-pointer transition-all duration-500 ease-out
//               relative overflow-hidden
//               flex flex-col justify-between
//               w-full
//               transform-gpu
//               ${hoveredCard === category.id ? 
//                 `scale-105 ${category.glowColor} shadow-2xl -translate-y-2` : 
//                 'hover:scale-102 hover:shadow-xl'
//               }
//             `}
//             onMouseEnter={() => setHoveredCard(category.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Animated Background Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-50" />
            
//             {/* Pulsing Glow Effect */}
//             <PulsingGlow isHovered={hoveredCard === category.id} />
            
//             {/* Animated Border */}
//             <AnimatedBorder isHovered={hoveredCard === category.id} />
            
//             {/* Floating Particles */}
//             <FloatingParticles 
//               particles={category.particles} 
//               isHovered={hoveredCard === category.id} 
//             />
            
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 text-3xl sm:text-4xl lg:text-6xl opacity-30 transition-all duration-500 ${
//                 hoveredCard === category.id ? 'scale-110 rotate-12' : ''
//               }`}>
//                 {category.icon}
//               </div>
//               <div className={`absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-2xl sm:text-3xl lg:text-4xl opacity-20 transition-all duration-700 ${
//                 hoveredCard === category.id ? 'scale-125 -rotate-6' : ''
//               }`}>
//                 {category.icon}
//               </div>
//             </div>
            
//             {/* Content */}
//             <div className="relative z-10">
//               <h3 className={`text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 transition-all duration-300 ${
//                 hoveredCard === category.id ? 'text-shadow-lg scale-105' : ''
//               }`}>
//                 {category.title}
//               </h3>
//               <p className={`text-white/90 text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
//                 hoveredCard === category.id ? 'text-white scale-105' : ''
//               }`}>
//                 {category.description}
//               </p>
//             </div>
            
//             {/* Main Icon with Pulse Animation */}
//             <div className="relative z-10 self-end">
//               <div className={`text-2xl sm:text-3xl lg:text-4xl opacity-80 transition-all duration-500 ${
//                 hoveredCard === category.id ? 'scale-125 opacity-100 animate-pulse' : ''
//               }`}>
//                 {category.icon}
//               </div>
//             </div>
            
//             {/* Rainbow Shine Effect */}
//             <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
//               hoveredCard === category.id ? 'translate-x-[100%]' : 'translate-x-[-100%]'
//             }`} />
            
//             {/* Betting Platform Accent */}
//             <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
//             <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full" />
//           </div>
//         ))}
//       </div>

//       {/* Mobile: Vertical Stack */}
//       <div className="sm:hidden space-y-3">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`
//               ${category.bgColor}
//               rounded-xl p-4 h-[120px]
//               cursor-pointer transition-all duration-500 ease-out
//               active:scale-95 active:shadow-2xl
//               relative overflow-hidden
//               flex flex-col justify-between
//               w-full
//               transform-gpu
//               ${category.glowColor} shadow-lg
//             `}
//             onTouchStart={() => setHoveredCard(category.id)}
//             onTouchEnd={() => setHoveredCard(null)}
//           >
//             {/* Animated Background Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-50" />
            
//             {/* Pulsing Glow Effect */}
//             <PulsingGlow isHovered={hoveredCard === category.id} />
            
//             {/* Floating Particles */}
//             <FloatingParticles 
//               particles={category.particles} 
//               isHovered={hoveredCard === category.id} 
//             />
            
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-2 right-2 text-3xl opacity-30 transition-all duration-500 animate-pulse">
//                 {category.icon}
//               </div>
//               <div className="absolute bottom-1 left-1 text-2xl opacity-20 transition-all duration-700">
//                 {category.icon}
//               </div>
//             </div>
            
//             {/* Content */}
//             <div className="relative z-10">
//               <h3 className="text-white text-lg font-bold mb-1 text-shadow-lg">
//                 {category.title}
//               </h3>
//               <p className="text-white/90 text-xs font-medium">
//                 {category.description}
//               </p>
//             </div>
            
//             {/* Main Icon */}
//             <div className="relative z-10 self-end">
//               <div className="text-2xl opacity-80 animate-pulse">
//                 {category.icon}
//               </div>
//             </div>
            
//             {/* Rainbow Shine Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] active:translate-x-[100%] transition-transform duration-1000" />
            
//             {/* Betting Platform Accent */}
//             <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
//             <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GamingCategories;
import React, { useState } from 'react';

const GamingCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Casino",
      bgColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
      glowColor: "shadow-emerald-500/50",
      icon: "🎰",
      description: "Live Casino & Table Games",
      particles: ["🎲", "🃏", "💎", "🎯"]
    },
    {
      id: 2,
      title: "Sports",
      bgColor: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600",
      glowColor: "shadow-orange-500/50",
      icon: "⚽",
      description: "Live Sports Betting",
      particles: ["🏀", "🏈", "🎾", "⚾"]
    },
    {
      id: 3,
      title: "Original",
      bgColor: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600",
      glowColor: "shadow-purple-500/50",
      icon: "🎮",
      description: "Exclusive Original Games",
      particles: ["⭐", "🌟", "✨", "💫"]
    },
    {
      id: 4,
      title: "Crash Games",
      bgColor: "bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-600",
      glowColor: "shadow-blue-500/50",
      icon: "🚀",
      description: "High Multiplier Crash",
      particles: ["🔥", "💥", "⚡", "🌈"]
    }
  ];

  const FloatingParticles = ({ particles, isHovered }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute text-lg opacity-20 transition-all duration-1000 ${
            isHovered ? 'animate-bounce' : ''
          }`}
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 20}%`,
            animationDelay: `${index * 0.2}s`,
            animationDuration: `${2 + index * 0.3}s`
          }}
        >
          {particle}
        </div>
      ))}
    </div>
  );

  const PulsingGlow = ({ isHovered }) => (
    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 ${
      isHovered ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5'
    }`}>
      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-700 ${
        isHovered ? 'shadow-2xl shadow-white/30' : 'shadow-lg shadow-black/20'
      }`} />
    </div>
  );

  const AnimatedBorder = ({ isHovered }) => (
    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 ${
      isHovered ? 'bg-gradient-to-r from-white/30 via-transparent to-white/30' : 'bg-transparent'
    }`}>
      <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
    </div>
  );

  return (
    <div className="w-full max-w-7xl   sm:px-4  py-4">
      {/* Desktop and Tablet: 2x2 Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              ${category.bgColor}
              rounded-xl sm:rounded-2xl p-3 sm:p-4 
              h-[100px] sm:h-[120px] lg:h-[130px]
              cursor-pointer transition-all duration-500 ease-out
              relative overflow-hidden
              flex flex-col justify-between
              w-full
              transform-gpu
              ${hoveredCard === category.id ? 
                `scale-105 ${category.glowColor} shadow-2xl -translate-y-2` : 
                'hover:scale-102 hover:shadow-xl'
              }
            `}
            onMouseEnter={() => setHoveredCard(category.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-50" />
            
            {/* Pulsing Glow Effect */}
            <PulsingGlow isHovered={hoveredCard === category.id} />
            
            {/* Animated Border */}
            <AnimatedBorder isHovered={hoveredCard === category.id} />
            
            {/* Floating Particles */}
            <FloatingParticles 
              particles={category.particles} 
              isHovered={hoveredCard === category.id} 
            />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute top-1 sm:top-2 right-1 sm:right-2 text-2xl sm:text-3xl lg:text-4xl opacity-30 transition-all duration-500 ${
                hoveredCard === category.id ? 'scale-110 rotate-12' : ''
              }`}>
                {category.icon}
              </div>
              <div className={`absolute bottom-1 left-1 text-xl sm:text-2xl lg:text-3xl opacity-20 transition-all duration-700 ${
                hoveredCard === category.id ? 'scale-125 -rotate-6' : ''
              }`}>
                {category.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className={`text-white text-base sm:text-lg lg:text-xl font-bold mb-1 transition-all duration-300 ${
                hoveredCard === category.id ? 'text-shadow-lg scale-105' : ''
              }`}>
                {category.title}
              </h3>
              <p className={`text-white/90 text-xs sm:text-sm font-medium transition-all duration-300 ${
                hoveredCard === category.id ? 'text-white scale-105' : ''
              }`}>
                {category.description}
              </p>
            </div>
            
            {/* Main Icon with Pulse Animation */}
            <div className="relative z-10 self-end">
              <div className={`text-lg sm:text-xl lg:text-2xl opacity-80 transition-all duration-500 ${
                hoveredCard === category.id ? 'scale-125 opacity-100 animate-pulse' : ''
              }`}>
                {category.icon}
              </div>
            </div>
            
            {/* Rainbow Shine Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
              hoveredCard === category.id ? 'translate-x-[100%]' : 'translate-x-[-100%]'
            }`} />
            
            {/* Betting Platform Accent */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full" />
          </div>
        ))}
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="sm:hidden space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              ${category.bgColor}
              rounded-xl p-3 h-[90px]
              cursor-pointer transition-all duration-500 ease-out
              active:scale-95 active:shadow-2xl
              relative overflow-hidden
              flex flex-col justify-between
              w-full
              transform-gpu
              ${category.glowColor} shadow-lg
            `}
            onTouchStart={() => setHoveredCard(category.id)}
            onTouchEnd={() => setHoveredCard(null)}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-50" />
            
            {/* Pulsing Glow Effect */}
            <PulsingGlow isHovered={hoveredCard === category.id} />
            
            {/* Floating Particles */}
            <FloatingParticles 
              particles={category.particles} 
              isHovered={hoveredCard === category.id} 
            />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1 right-1 text-2xl opacity-30 transition-all duration-500 animate-pulse">
                {category.icon}
              </div>
              <div className="absolute bottom-1 left-1 text-xl opacity-20 transition-all duration-700">
                {category.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white text-base font-bold mb-1 text-shadow-lg">
                {category.title}
              </h3>
              <p className="text-white/90 text-xs font-medium">
                {category.description}
              </p>
            </div>
            
            {/* Main Icon */}
            <div className="relative z-10 self-end">
              <div className="text-xl opacity-80 animate-pulse">
                {category.icon}
              </div>
            </div>
            
            {/* Rainbow Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] active:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Betting Platform Accent */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
            <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingCategories;