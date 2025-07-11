import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const Games = () => {
 const games = [
  { id: 1, name: 'JetX', image: 'https://papacasino777.com/img/thumbnails/JetX.png' },
  { id: 2, name: 'Aviator', image: 'https://papacasino777.com/img/thumbnails/3000001.png' },
  { id: 3, name: 'Balloon', image: 'https://papacasino777.com/img/thumbnails/Balloon.png' },
  { id: 4, name: 'FootballX', image: 'https://papacasino777.com/img/thumbnails/FootballX.png' },
  { id: 5, name: 'PlinkoX', image: 'https://papacasino777.com/img/thumbnails/PlinkoX.png' },
  { id: 6, name: 'Mine Island', image: 'https://papacasino777.com/img/thumbnails/MineIsland.png' },
  { id: 7, name: 'HolyX', image: 'https://papacasino777.com/img/thumbnails/RollX.png' },
  { id: 8, name: 'Smash', image: 'https://papacasino777.com/img/thumbnails/SmashX.png' },
  { id: 9, name: 'Hunter', image: 'https://papacasino777.com/img/thumbnails/HunterX.png' },
  { id: 10, name: 'Helicopter X', image: 'https://papacasino777.com/img/thumbnails/HelicopterX.png' },
  { id: 11, name: 'AviaStar', image: 'https://papacasino777.com/img/thumbnails/JetX3.png' },
  { id: 12, name: 'Tower X', image: 'https://papacasino777.com/img/thumbnails/TowerX.png' },
  { id: 13, name: 'Crash Duel X', image: 'https://papacasino777.com/img/thumbnails/TugOfWar.png' },
  { id: 14, name: 'Bonuses Bonanza', image: 'https://papacasino777.com/img/thumbnails/PlinkoJoker.png' },
  { id: 15, name: 'Booster Run', image: 'https://papacasino777.com/img/thumbnails/rooster_run.png' },
  { id: 16, name: 'Kite Festival', image: 'https://papacasino777.com/img/thumbnails/kite_festival_crash_game.png' },
  { id: 17, name: 'Gunman Crash', image: 'https://papacasino777.com/img/thumbnails/gunman_crash.png' },
  { id: 18, name: 'Mr. Gamble', image: 'https://papacasino777.com/img/thumbnails/5000022.png' },
  { id: 19, name: 'Rocket Blaze', image: 'https://papacasino777.com/img/thumbnails/4000005.png' },
  { id: 20, name: 'Crypto Plinko', image: 'https://papacasino777.com/img/thumbnails/4000003.png' },
  { id: 21, name: 'Boom Ball', image: 'https://papacasino777.com/img/thumbnails/4000004.png' },
  { id: 22, name: 'Lava Launch', image: 'https://papacasino777.com/img/thumbnails/5000031.png' },
  { id: 23, name: 'Speedy Flip', image: 'https://papacasino777.com/img/thumbnails/5000005.png' },
  { id: 24, name: 'Sniper Aim', image: 'https://papacasino777.com/img/thumbnails/5000017.png' },
  { id: 25, name: 'Dice Duel', image: 'https://papacasino777.com/img/thumbnails/5000022.png' },
  { id: 26, name: 'Sky Crash', image: 'https://papacasino777.com/img/thumbnails/4000005.png' },
  { id: 27, name: 'Mega Miner', image: 'https://papacasino777.com/img/thumbnails/4000003.png' },
  { id: 28, name: 'Ninja RunX', image: 'https://papacasino777.com/img/thumbnails/4000004.png' }
];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-xl">🚀</span>
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
                 <Link to ="/deposite-page">
                <button className="bg-[#9810FA] hover:cursor-pointer text-white font-semibold hover:bg-white hover:text-purple-600 py-2 px-4 rounded-full flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-2 h-2 fill-current" />
                  <span>Play Now</span>
                </button>
             </Link> </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;