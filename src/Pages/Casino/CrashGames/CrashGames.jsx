import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const CrashGames = () => {
 const games = [
  { id: 1, name: 'Turbo Blast', image: '/api/placeholder/200/200' },
  { id: 2, name: 'Pixel Racer', image: '/api/placeholder/200/200' },
  { id: 3, name: 'Lucky SpinX', image: '/api/placeholder/200/200' },
  { id: 4, name: 'Crypto Dash', image: '/api/placeholder/200/200' },
  { id: 5, name: 'Bomb Runner', image: '/api/placeholder/200/200' },
  { id: 6, name: 'Sky Frenzy', image: '/api/placeholder/200/200' },
  { id: 7, name: 'Space Flip', image: '/api/placeholder/200/200' },
  { id: 8, name: 'Cash Smash', image: '/api/placeholder/200/200' },
  { id: 9, name: 'Dice Climb', image: '/api/placeholder/200/200' },
  { id: 10, name: 'Ghost Jet', image: '/api/placeholder/200/200' },
  { id: 11, name: 'Moon Rider', image: '/api/placeholder/200/200' },
  { id: 12, name: 'Tornado Cash', image: '/api/placeholder/200/200' },
  { id: 13, name: 'Crash Jungle', image: '/api/placeholder/200/200' },
  { id: 14, name: 'Dragon Plinko', image: '/api/placeholder/200/200' },
  { id: 15, name: 'Matrix Strike', image: '/api/placeholder/200/200' },
  { id: 16, name: 'X Rocket', image: '/api/placeholder/200/200' },
  { id: 17, name: 'Laser Mines', image: '/api/placeholder/200/200' },
  { id: 18, name: 'Treasure Shot', image: '/api/placeholder/200/200' },
  { id: 19, name: 'Blast Hero', image: '/api/placeholder/200/200' },
  { id: 20, name: 'Bubble Bank', image: '/api/placeholder/200/200' },
  { id: 21, name: 'Super Bounce', image: '/api/placeholder/200/200' },
  { id: 22, name: 'Nitro Duel', image: '/api/placeholder/200/200' },
  { id: 23, name: 'Vortex Spin', image: '/api/placeholder/200/200' },
  { id: 24, name: 'Pirate Clash', image: '/api/placeholder/200/200' },
  { id: 25, name: 'Inferno Crash', image: '/api/placeholder/200/200' },
  { id: 26, name: 'Rocket Rumble', image: '/api/placeholder/200/200' },
  { id: 27, name: 'Mega Tower', image: '/api/placeholder/200/200' },
  { id: 28, name: 'Crypto Cavern', image: '/api/placeholder/200/200' },
];


  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🔥</span>
          </div>
          <h1 className="text-black text-xl font-bold">Crash Games</h1>
        </div>
       <Link
  to="/"
  className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
>
  <ChevronLeft className="w-5 h-5 text-white" />
</Link>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative group cursor-pointer"
          >
            {/* Game Card */}
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-square">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-[#9810FA] hover:cursor-pointer text-white font-semibold hover:bg-white hover:text-purple-600 py-2 px-4 rounded-full flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-2 h-2 fill-current" />
                  <span>Play Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrashGames;