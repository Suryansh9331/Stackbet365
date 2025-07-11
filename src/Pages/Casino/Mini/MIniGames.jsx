import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const MiniGames = () => {
 const games = [
  { id: 1, name: 'JetX', image: 'https://papacasino777.com/img/thumbnails/2000004.png' },
  { id: 2, name: 'Aviator', image: 'https://papacasino777.com/img/thumbnails/2000001.png' },
  { id: 3, name: 'Balloon', image: 'https://papacasino777.com/img/thumbnails/2000002.png' },
  { id: 4, name: 'FootballX', image: 'https://papacasino777.com/img/thumbnails/2000003.png' },
  { id: 5, name: 'PlinkoX', image: 'https://papacasino777.com/img/thumbnails/2000005.png' },
  { id: 6, name: 'Mine Island', image: 'https://papacasino777.com/img/thumbnails/2000006.png' },
  { id: 7, name: 'HolyX', image: 'https://papacasino777.com/img/thumbnails/2000007.png' },
  { id: 8, name: 'Smash', image: 'https://papacasino777.com/img/thumbnails/2000008.png' },
  { id: 9, name: 'mines', image: 'https://papacasino777.com/img/thumbnails/4000009.png' },
  { id: 10, name: 'go-bananas', image: 'https://papacasino777.com/img/thumbnails/4000203.png' },
  { id: 11, name: 'SlapShot', image: 'https://papacasino777.com/img/thumbnails/5000001.png' },
  { id: 12, name: 'super-double', image: 'https://papacasino777.com/img/thumbnails/4000202.png' },
  { id: 13, name: 'keno', image: 'https://papacasino777.com/img/thumbnails/4000109.png' },
  { id: 14, name: 'Plinkoman', image: 'https://papacasino777.com/img/thumbnails/5000007.png' },
  { id: 15, name: 'BlackJack', image: 'https://papacasino777.com/img/thumbnails/5000003.png' },
  { id: 16, name: 'TurboMines', image: 'https://papacasino777.com/img/thumbnails/5000006.png' },
  { id: 17, name: 'ring', image: 'https://papacasino777.com/img/thumbnails/4000108.png' },
  { id: 18, name: 'Atlantis', image: 'https://papacasino777.com/img/thumbnails/5000011.png' },
  { id: 19, name: 'MouseTower', image: 'https://papacasino777.com/img/thumbnails/2.png' },
  { id: 20, name: 'lucky-football', image: 'https://papacasino777.com/img/thumbnails/4000205.png' },
  { id: 21, name: 'color-game', image: 'https://papacasino777.com/img/thumbnails/4000104.png' },
  { id: 22, name: 'CosmoSaga', image: 'https://papacasino777.com/img/thumbnails/5000010.png' },
  { id: 23, name: 'lost-treasure', image: 'https://papacasino777.com/img/thumbnails/4000001.png' },
  { id: 24, name: 'CoinFlip', image: 'https://papacasino777.com/img/thumbnails/5000021.png' },
  { id: 25, name: 'fast-furious', image: 'https://papacasino777.com/img/thumbnails/4000107.png' },
  { id: 26, name: 'DrShocker', image: 'https://papacasino777.com/img/thumbnails/5000004.png' },
  { id: 27, name: 'treasure-hunt-moles', image: 'https://papacasino777.com/img/thumbnails/4000103.png' },
  { id: 28, name: 'WhackAMole', image: 'https://papacasino777.com/img/thumbnails/1.png' },
  { id: 29, name: 'MagicLamp', image: 'https://papacasino777.com/img/thumbnails/3.png' },
  { id: 30, name: 'go-for-gold', image: 'https://papacasino777.com/img/thumbnails/4000201.png' },
  { id: 31, name: 'hilo', image: 'https://papacasino777.com/img/thumbnails/3000005.png' },
  { id: 32, name: 'Totem', image: 'https://papacasino777.com/img/thumbnails/5000015.png' },
  { id: 33, name: 'bank-heist', image: 'https://papacasino777.com/img/thumbnails/4000106.png' },
  { id: 34, name: 'monopoly', image: 'https://papacasino777.com/img/thumbnails/4000105.png' },
  { id: 35, name: 'ScratchMap', image: 'https://papacasino777.com/img/thumbnails/5000024.png' },
  { id: 36, name: 'HamsterMania', image: 'https://papacasino777.com/img/thumbnails/5000008.png' },
  { id: 37, name: 'lucky-tanks', image: 'https://papacasino777.com/img/thumbnails/4000008.png' },
  { id: 38, name: 'dice', image: 'https://papacasino777.com/img/thumbnails/4000110.png' },
  { id: 39, name: 'fiery-bot', image: 'https://papacasino777.com/img/thumbnails/4000112.png' },
  { id: 40, name: 'limbo', image: 'https://papacasino777.com/img/thumbnails/4000007.png' },
  { id: 41, name: 'HotGear', image: 'https://papacasino777.com/img/thumbnails/5000013.png' },
  { id: 42, name: 'sushi-mines', image: 'https://papacasino777.com/img/thumbnails/4000002.png' }
];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">💡</span>
          </div>
          <h1 className="text-black text-xl font-bold">Mini Games</h1>
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

export default MiniGames;