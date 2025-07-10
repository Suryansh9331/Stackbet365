import React, { useState, useEffect } from 'react';

const SportsLiveBettingTable = () => {
  const [bets, setBets] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sports-themed user names and events
  const userNames = ['SportsFan88', 'BetMaster', 'GoalHunter', 'AcePredictor', 'ChampBetter', 'WinStreak7', 'LuckyShot', 'GameChanger', 'ProPicker', 'VictoryBet'];
  const sportsEvents = [
    'Lakers vs Warriors',
    'Man City vs Liverpool',
    'Cowboys vs Eagles',
    'Dodgers vs Yankees',
    'Celtics vs Heat',
    'Barcelona vs Real Madrid',
    'Chiefs vs Bills',
    'Red Sox vs Blue Jays',
    'Bucks vs Nets',
    'Chelsea vs Arsenal'
  ];

  // Generate random bet data
  const generateRandomBet = () => {
    const now = new Date();
    const hoursBack = Math.floor(Math.random() * 5) + 1; // 1-5 hours back
    const minutesBack = Math.floor(Math.random() * 60);
    const secondsBack = Math.floor(Math.random() * 60);
    
    const betTime = new Date(now.getTime() - (hoursBack * 60 * 60 * 1000) - (minutesBack * 60 * 1000) - (secondsBack * 1000));
    
    const amount = (Math.random() * 500 + 25).toFixed(0); // Sports bet amounts
    const basePayout = parseFloat(amount);
    const multiplier = Math.random() * 2.5 + 1.1; // 1.1x to 3.6x multiplier (typical odds)
    
    const betTypes = ['Win', 'Over/Under', 'Spread', 'Prop Bet', 'Parlay', 'Moneyline'];
    const betType = betTypes[Math.floor(Math.random() * betTypes.length)];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      user: userNames[Math.floor(Math.random() * userNames.length)],
      game: sportsEvents[Math.floor(Math.random() * sportsEvents.length)],
      amount: amount,
      time: betTime,
      basePayout: basePayout,
      currentMultiplier: multiplier,
      payout: (basePayout * multiplier).toFixed(0),
      color: Math.random() > 0.6 ? 'green' : Math.random() > 0.3 ? 'red' : 'default',
      betType: betType,
      odds: (multiplier + (Math.random() * 0.2 - 0.1)).toFixed(2)
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
          const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
          const newMultiplier = Math.max(1.01, bet.currentMultiplier + variation);
          const newPayout = (bet.basePayout * newMultiplier).toFixed(0);
          const newColor = Math.random() > 0.7 ? 'green' : Math.random() > 0.4 ? 'red' : 'default';
          const newOdds = (newMultiplier + (Math.random() * 0.2 - 0.1)).toFixed(2);
          
          return {
            ...bet,
            currentMultiplier: newMultiplier,
            payout: newPayout,
            color: newColor,
            odds: newOdds
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

  const getBetTypeColor = (betType) => {
    const colors = {
      'Win': 'bg-green-100 text-green-800',
      'Over/Under': 'bg-blue-100 text-blue-800',
      'Spread': 'bg-purple-100 text-purple-800',
      'Prop Bet': 'bg-yellow-100 text-yellow-800',
      'Parlay': 'bg-red-100 text-red-800',
      'Moneyline': 'bg-gray-100 text-gray-800'
    };
    return colors[betType] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 sm:px-4 py-3 rounded-t-lg">
          <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <span>🏆</span>
            Sports Live Betting
          </h2>
        </div>

        {/* Live indicator */}
        <div className="bg-green-50 px-3 sm:px-4 py-2 border-b border-green-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-green-600 text-sm font-medium">LIVE SPORTS</span>
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
                        Bettor
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Match
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Bet Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Stake
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Odds
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Potential Win
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {bets.map((bet, index) => (
                      <tr 
                        key={bet.id} 
                        className={`hover:bg-gray-50 transition-all duration-300 ${
                          index === 0 ? 'bg-green-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{bet.game}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getBetTypeColor(bet.betType)}`}>
                            {bet.betType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-green-600 font-medium">${bet.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-blue-600 font-medium">{bet.odds}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
                            ${bet.payout}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {formatTime(bet.time)}
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
                    Recent Sports Bets
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {bets.map((bet, index) => (
                    <div 
                      key={bet.id} 
                      className={`p-4 transition-all duration-300 ${
                        index === 0 ? 'bg-green-50 animate-pulse' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-1">{bet.user}</div>
                          <div className="text-xs text-gray-500 mb-1">{bet.game}</div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getBetTypeColor(bet.betType)}`}>
                            {bet.betType}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold ${getPayoutColorClass(bet.color)}`}>
                            ${bet.payout}
                          </div>
                          <div className="text-xs text-green-600 font-medium">${bet.amount}</div>
                          <div className="text-xs text-blue-600">@{bet.odds}</div>
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
                        Bettor/Match
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Stake
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Potential Win
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
                          index === 0 ? 'bg-green-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                          <div className="text-xs text-gray-500">{bet.game}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getBetTypeColor(bet.betType)}`}>
                            {bet.betType}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-sm text-green-600 font-medium">${bet.amount}</div>
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
        {/* <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="text-xs sm:text-sm text-gray-500">Total Bets Today</div>
            <div className="text-lg sm:text-2xl font-bold text-green-600">{Math.floor(Math.random() * 2000) + 8000}</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
            <div className="text-xs sm:text-sm text-gray-500">Active Bettors</div>
            <div className="text-lg sm:text-2xl font-bold text-blue-600">{Math.floor(Math.random() * 300) + 850}</div>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 sm:col-span-2 lg:col-span-1">
            <div className="text-xs sm:text-sm text-gray-500">Today's Payouts</div>
            <div className="text-lg sm:text-2xl font-bold text-purple-600">${(Math.random() * 50000 + 150000).toFixed(0)}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SportsLiveBettingTable;