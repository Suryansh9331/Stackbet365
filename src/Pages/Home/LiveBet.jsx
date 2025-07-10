// import React, { useState, useEffect } from 'react';

// const LiveBettingTable = () => {
//   const [bets, setBets] = useState([]);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // Sample user names and game names
//   const userNames = ['FP907', 'BT234', 'MX891', 'QR456', 'ZX123', 'LK789', 'CV345', 'NM567', 'RT890', 'WE234'];
//   const gameNames = ['BookOfBonanza', 'MegaFortune', 'CrazyTime', 'Lightning', 'Monopoly', 'DragonTiger', 'BaccaratLive', 'RouletteMax', 'BlackjackPro', 'PokerStars'];

//   // Generate random bet data
//   const generateRandomBet = () => {
//     const now = new Date();
//     const hoursBack = Math.floor(Math.random() * 5) + 1; // 1-5 hours back
//     const minutesBack = Math.floor(Math.random() * 60);
//     const secondsBack = Math.floor(Math.random() * 60);
    
//     const betTime = new Date(now.getTime() - (hoursBack * 60 * 60 * 1000) - (minutesBack * 60 * 1000) - (secondsBack * 1000));
    
//     const amount = (Math.random() * 10 + 0.10).toFixed(2);
//     const basePayout = parseFloat(amount);
//     const multiplier = Math.random() * 3 + 0.5; // 0.5x to 3.5x multiplier
    
//     return {
//       id: Math.random().toString(36).substr(2, 9),
//       user: userNames[Math.floor(Math.random() * userNames.length)],
//       game: gameNames[Math.floor(Math.random() * gameNames.length)],
//       amount: amount,
//       time: betTime,
//       basePayout: basePayout,
//       currentMultiplier: multiplier,
//       payout: (basePayout * multiplier).toFixed(2),
//       color: Math.random() > 0.6 ? 'green' : Math.random() > 0.3 ? 'red' : 'default'
//     };
//   };

//   // Initialize bets
//   useEffect(() => {
//     const initialBets = Array.from({ length: 8 }, generateRandomBet);
//     setBets(initialBets);
//   }, []);

//   // Update current time every second
//   useEffect(() => {
//     const timeInterval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timeInterval);
//   }, []);

//   // Add new bets periodically
//   useEffect(() => {
//     const betInterval = setInterval(() => {
//       setBets(prevBets => {
//         const newBet = generateRandomBet();
//         const updatedBets = [newBet, ...prevBets.slice(0, 7)]; // Keep only 8 bets
//         return updatedBets;
//       });
//     }, Math.random() * 5000 + 8000); // Random interval between 8-13 seconds

//     return () => clearInterval(betInterval);
//   }, []);

//   // Update payouts continuously
//   useEffect(() => {
//     const payoutInterval = setInterval(() => {
//       setBets(prevBets => 
//         prevBets.map(bet => {
//           const variation = (Math.random() - 0.5) * 0.2; // ±10% variation
//           const newMultiplier = Math.max(0.1, bet.currentMultiplier + variation);
//           const newPayout = (bet.basePayout * newMultiplier).toFixed(2);
//           const newColor = Math.random() > 0.7 ? 'green' : Math.random() > 0.4 ? 'red' : 'default';
          
//           return {
//             ...bet,
//             currentMultiplier: newMultiplier,
//             payout: newPayout,
//             color: newColor
//           };
//         })
//       );
//     }, 3000); // Update every 3 seconds

//     return () => clearInterval(payoutInterval);
//   }, []);

//   const formatTime = (date) => {
//     return date.toLocaleString('en-US', {
//       month: 'numeric',
//       day: 'numeric',
//       year: 'numeric',
//       hour: 'numeric',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: true
//     });
//   };

//   const getPayoutColorClass = (color) => {
//     switch(color) {
//       case 'green': return 'text-green-600';
//       case 'red': return 'text-red-600';
//       default: return 'text-gray-700';
//     }
//   };

//   return (
//     <div className="bg-white pt-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-purple-600 text-white px-4 py-3 rounded-t-lg">
//           <h2 className="text-lg font-semibold">Live Bets</h2>
//         </div>

//         {/* Live indicator */}
//         <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//             <span className="text-red-500 text-sm font-medium">LIVE</span>
//             <span className="text-gray-600 text-sm ml-4">
//               {formatTime(currentTime)}
//             </span>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl border border-gray-200">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                     User
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                     Game
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                     Amount
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                     Time
//                   </th>
//                   <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                     Payout
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {bets.map((bet, index) => (
//                   <tr 
//                     key={bet.id} 
//                     className={`hover:bg-gray-50 transition-all duration-300 ${
//                       index === 0 ? 'bg-blue-50 animate-pulse' : ''
//                     }`}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{bet.user}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-700">{bet.game}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-yellow-600 font-medium">{bet.amount}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">
//                         {formatTime(bet.time)}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
//                         {bet.payout}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Footer stats */}
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <div className="text-sm text-gray-500">Total Bets Today</div>
//             <div className="text-2xl font-bold text-gray-900">{Math.floor(Math.random() * 1000) + 5000}</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <div className="text-sm text-gray-500">Active Players</div>
//             <div className="text-2xl font-bold text-green-600">{Math.floor(Math.random() * 100) + 250}</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <div className="text-sm text-gray-500">Total Payout</div>
//             <div className="text-2xl font-bold text-yellow-600">${(Math.random() * 10000 + 25000).toFixed(2)}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveBettingTable;




import React, { useState, useEffect } from 'react';

const LiveBettingTable = () => {
  const [bets, setBets] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample user names and game names
  const userNames = ['FP907', 'BT234', 'MX891', 'QR456', 'ZX123', 'LK789', 'CV345', 'NM567', 'RT890', 'WE234'];
  const gameNames = ['BookOfBonanza', 'MegaFortune', 'CrazyTime', 'Lightning', 'Monopoly', 'DragonTiger', 'BaccaratLive', 'RouletteMax', 'BlackjackPro', 'PokerStars'];

  // Generate random bet data
  const generateRandomBet = () => {
    const now = new Date();
    const hoursBack = Math.floor(Math.random() * 5) + 1; // 1-5 hours back
    const minutesBack = Math.floor(Math.random() * 60);
    const secondsBack = Math.floor(Math.random() * 60);
    
    const betTime = new Date(now.getTime() - (hoursBack * 60 * 60 * 1000) - (minutesBack * 60 * 1000) - (secondsBack * 1000));
    
    const amount = (Math.random() * 10 + 0.10).toFixed(2);
    const basePayout = parseFloat(amount);
    const multiplier = Math.random() * 3 + 0.5; // 0.5x to 3.5x multiplier
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      user: userNames[Math.floor(Math.random() * userNames.length)],
      game: gameNames[Math.floor(Math.random() * gameNames.length)],
      amount: amount,
      time: betTime,
      basePayout: basePayout,
      currentMultiplier: multiplier,
      payout: (basePayout * multiplier).toFixed(2),
      color: Math.random() > 0.6 ? 'green' : Math.random() > 0.3 ? 'red' : 'default'
    };
  };

  // Initialize bets
  useEffect(() => {
    const initialBets = Array.from({ length: 8 }, generateRandomBet);
    setBets(initialBets);
  }, []);

  // Update current time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Add new bets periodically
  useEffect(() => {
    const betInterval = setInterval(() => {
      setBets(prevBets => {
        const newBet = generateRandomBet();
        const updatedBets = [newBet, ...prevBets.slice(0, 7)]; // Keep only 8 bets
        return updatedBets;
      });
    }, Math.random() * 5000 + 8000); // Random interval between 8-13 seconds

    return () => clearInterval(betInterval);
  }, []);

  // Update payouts continuously
  useEffect(() => {
    const payoutInterval = setInterval(() => {
      setBets(prevBets => 
        prevBets.map(bet => {
          const variation = (Math.random() - 0.5) * 0.2; // ±10% variation
          const newMultiplier = Math.max(0.1, bet.currentMultiplier + variation);
          const newPayout = (bet.basePayout * newMultiplier).toFixed(2);
          const newColor = Math.random() > 0.7 ? 'green' : Math.random() > 0.4 ? 'red' : 'default';
          
          return {
            ...bet,
            currentMultiplier: newMultiplier,
            payout: newPayout,
            color: newColor
          };
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(payoutInterval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatTimeShort = (date) => {
    return date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getPayoutColorClass = (color) => {
    switch(color) {
      case 'green': return 'text-green-600';
      case 'red': return 'text-red-600';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-purple-600 text-white px-3 sm:px-4 py-3 rounded-t-lg">
          <h2 className="text-base sm:text-lg font-semibold">Live Bets</h2>
        </div>

        {/* Live indicator */}
        <div className="bg-gray-100 px-3 sm:px-4 py-2 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 text-sm font-medium">LIVE</span>
            <span className="text-gray-600 text-xs sm:text-sm ml-2 sm:ml-4">
              <span className="hidden sm:inline">{formatTime(currentTime)}</span>
              <span className="sm:hidden">{formatTimeShort(currentTime)}</span>
            </span>
          </div>
        </div>

        {/* Table Container with horizontal scroll */}
        <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl border border-gray-200">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Game
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Payout
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bets.map((bet, index) => (
                      <tr 
                        key={bet.id} 
                        className={`hover:bg-gray-50 transition-all duration-300 ${
                          index === 0 ? 'bg-blue-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{bet.game}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-yellow-600 font-medium">${bet.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {formatTime(bet.time)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
                            ${bet.payout}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Layout */}
              <div className="md:hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Recent Bets
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {bets.map((bet, index) => (
                    <div 
                      key={bet.id} 
                      className={`p-4 transition-all duration-300 ${
                        index === 0 ? 'bg-blue-50 animate-pulse' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-1">{bet.user}</div>
                          <div className="text-xs text-gray-500">{bet.game}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold ${getPayoutColorClass(bet.color)}`}>
                            ${bet.payout}
                          </div>
                          <div className="text-xs text-yellow-600 font-medium">${bet.amount}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatTimeShort(bet.time)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet Compact Table */}
              <div className="hidden sm:block md:hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        User/Game
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Payout
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bets.map((bet, index) => (
                      <tr 
                        key={bet.id} 
                        className={`hover:bg-gray-50 transition-all duration-300 ${
                          index === 0 ? 'bg-blue-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                          <div className="text-xs text-gray-500">{bet.game}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm text-yellow-600 font-medium">${bet.amount}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
                            ${bet.payout}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-xs text-gray-500">
                            {formatTimeShort(bet.time)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer stats - Responsive Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="text-xs sm:text-sm text-gray-500">Total Bets Today</div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">{Math.floor(Math.random() * 1000) + 5000}</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="text-xs sm:text-sm text-gray-500">Active Players</div>
            <div className="text-lg sm:text-2xl font-bold text-green-600">{Math.floor(Math.random() * 100) + 250}</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 sm:col-span-2 lg:col-span-1">
            <div className="text-xs sm:text-sm text-gray-500">Total Payout</div>
            <div className="text-lg sm:text-2xl font-bold text-yellow-600">${(Math.random() * 10000 + 25000).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBettingTable;