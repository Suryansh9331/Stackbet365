import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const SpribeGames = () => {
 const games = [
  { id: 1, name: 'JetX', image: 'https://papacasino777.com/img/thumbnails/2000004.png' },
  { id: 2, name: 'Aviator', image: 'https://papacasino777.com/img/thumbnails/3000006.png' },
  { id: 3, name: 'Balloon', image: 'https://papacasino777.com/img/thumbnails/3000002.png' },
  { id: 4, name: 'FootballX', image: 'https://papacasino777.com/img/thumbnails/3000003.png' },
  { id: 5, name: 'PlinkoX', image: 'https://papacasino777.com/img/thumbnails/3000008.png' },
  { id: 6, name: 'Mine Island', image: 'https://papacasino777.com/img/thumbnails/3000009.png' },
  { id: 7, name: 'HolyX', image: 'https://papacasino777.com/img/thumbnails/3000007.png' },
  { id: 8, name: 'Smash', image: 'https://papacasino777.com/img/thumbnails/the_candy_keno.png' },


];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🎲 </span>
          </div>
          <h1 className="text-black text-xl font-bold">Spribe Games</h1>
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

export default SpribeGames;