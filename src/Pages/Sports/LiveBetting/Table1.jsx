import React, { useState, useEffect } from 'react';

const CryptoLiveBettingTable = () => {
  const [bets, setBets] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Crypto-themed user names and game names
  const userNames = ['CryptoKing777', 'BitMaster', 'EthWhale', 'SolanaShark', 'DogeHunter', 'CardanoAce', 'PolkaDot99', 'ChainLord', 'TokenTrader', 'CoinFlip23'];
  const gameNames = ['BitcoinRoulette', 'EthereumPoker', 'CryptoMines', 'SatoshiSlots', 'DogeCoinDice', 'BlockchainBaccarat', 'NFTCrash', 'MetaverseWheel', 'DefiDragon', 'Web3Warrior'];

  // Generate random bet data
  const generateRandomBet = () => {
    const now = new Date();
    const hoursBack = Math.floor(Math.random() * 5) + 1; // 1-5 hours back
    const minutesBack = Math.floor(Math.random() * 60);
    const secondsBack = Math.floor(Math.random() * 60);
    
    const betTime = new Date(now.getTime() - (hoursBack * 60 * 60 * 1000) - (minutesBack * 60 * 1000) - (secondsBack * 1000));
    
    const amount = (Math.random() * 0.5 + 0.001).toFixed(4); // Crypto amounts in BTC/ETH
    const basePayout = parseFloat(amount);
    const multiplier = Math.random() * 4 + 0.3; // 0.3x to 4.3x multiplier
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      user: userNames[Math.floor(Math.random() * userNames.length)],
      game: gameNames[Math.floor(Math.random() * gameNames.length)],
      amount: amount,
      time: betTime,
      basePayout: basePayout,
      currentMultiplier: multiplier,
      payout: (basePayout * multiplier).toFixed(4),
      color: Math.random() > 0.6 ? 'green' : Math.random() > 0.3 ? 'red' : 'default',
      currency: Math.random() > 0.5 ? 'BTC' : 'ETH'
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
          const variation = (Math.random() - 0.5) * 0.3; // ±15% variation
          const newMultiplier = Math.max(0.1, bet.currentMultiplier + variation);
          const newPayout = (bet.basePayout * newMultiplier).toFixed(4);
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

  const getCurrencyColor = (currency) => {
    return currency === 'BTC' ? 'text-orange-600' : 'text-blue-600';
  };

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-4 py-3 rounded-t-lg">
          <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <span>🚀</span>
            Crypto Live Bets
          </h2>
        </div>

        {/* Live indicator */}
        <div className="bg-orange-50 px-3 sm:px-4 py-2 border-b border-orange-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-600 text-sm font-medium">LIVE BLOCKCHAIN</span>
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
                        Player
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Game
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Stake
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
                          index === 0 ? 'bg-orange-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{bet.game}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-medium ${getCurrencyColor(bet.currency)}`}>
                            {bet.amount} {bet.currency}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {formatTime(bet.time)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
                            {bet.payout} {bet.currency}
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
                    Recent Crypto Bets
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {bets.map((bet, index) => (
                    <div 
                      key={bet.id} 
                      className={`p-4 transition-all duration-300 ${
                        index === 0 ? 'bg-orange-50 animate-pulse' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-1">{bet.user}</div>
                          <div className="text-xs text-gray-500">{bet.game}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold ${getPayoutColorClass(bet.color)}`}>
                            {bet.payout} {bet.currency}
                          </div>
                          <div className={`text-xs font-medium ${getCurrencyColor(bet.currency)}`}>
                            {bet.amount} {bet.currency}
                          </div>
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
                        Player/Game
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Stake
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
                          index === 0 ? 'bg-orange-50 animate-pulse' : ''
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900">{bet.user}</div>
                          <div className="text-xs text-gray-500">{bet.game}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-sm font-medium ${getCurrencyColor(bet.currency)}`}>
                            {bet.amount} {bet.currency}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-sm font-bold transition-all duration-300 ${getPayoutColorClass(bet.color)}`}>
                            {bet.payout} {bet.currency}
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
       
      </div>
    </div>
  );
};

export default CryptoLiveBettingTable;