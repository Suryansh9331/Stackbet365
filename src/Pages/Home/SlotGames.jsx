import React from "react";
import { ChevronLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
const SlotGames = () => {
  const games = [
    { id: 1, name: 'JetX', image: 'https://mediumrare.imgix.net/73754d4bf421b78fbd3895bbc7890d379797588cb699d6cbe47f3656aa93613b?w=180&h=236&fit=min&auto=format' },
  { id: 2, name: 'Aviator', image: 'https://mediumrare.imgix.net/c064ef9ce4a6caedeca1d76665b5ae31df2147ef84c0f0f8288556dfa94478f4?w=180&h=236&fit=min&auto=format' },
  { id: 3, name: 'Balloon', image: 'https://mediumrare.imgix.net/caebb5f1f0bde973616bddedf650f0d1427da0c1b0be2c06e33719385a52af99?w=180&h=236&fit=min&auto=format' },
  { id: 4, name: 'FootballX', image: 'https://mediumrare.imgix.net/14d5410c6cf4c303d291262a10e949dc14b0ac2eca2a7a730b0401919c01358e?w=180&h=236&fit=min&auto=format' },
  { id: 5, name: 'PlinkoX', image: 'https://mediumrare.imgix.net/32e71937e51907f599b3d819775c59ad6db923f24a1cbd6188eae6435d059b5e?w=180&h=236&fit=min&auto=format' },
  { id: 6, name: 'Mine Island', image: 'https://mediumrare.imgix.net/4e212f817a163d07b8d65cda3e07ec94e2dac06cc520b26ff98ed97d4b63e33d?w=180&h=236&fit=min&auto=format' },
  { id: 7, name: 'HolyX', image: 'https://mediumrare.imgix.net/186313f85186d1a071e71926cbcbfb2b86609991974c4efb64ae387fcd74696d?w=180&h=236&fit=min&auto=format' },
  { id: 8, name: 'Smash', image: 'https://mediumrare.imgix.net/bdff3ebf4d04f586ecab90203923fa65b39626ef03359106209089e0c8b1d0d3?w=180&h=236&fit=min&auto=format' },
  { id: 9, name: 'Sweet Bonanza 1000', image: 'https://mediumrare.imgix.net/73754d4bf421b78fbd3895bbc7890d379797588cb699d6cbe47f3656aa93613b?w=180&h=236&fit=min&auto=format' },
  { id: 10, name: 'Gates of Olympus 1000', image: 'https://mediumrare.imgix.net/c064ef9ce4a6caedeca1d76665b5ae31df2147ef84c0f0f8288556dfa94478f4?w=180&h=236&fit=min&auto=format' },
  { id: 11, name: 'Transylvania Mania Enhanced RTP', image: 'https://mediumrare.imgix.net/caebb5f1f0bde973616bddedf650f0d1427da0c1b0be2c06e33719385a52af99?w=180&h=236&fit=min&auto=format' },
  { id: 12, name: 'Sugar Rush 1000', image: 'https://mediumrare.imgix.net/14d5410c6cf4c303d291262a10e949dc14b0ac2eca2a7a730b0401919c01358e?w=180&h=236&fit=min&auto=format' },
  { id: 13, name: 'Big Bass Rock and Roll Enhanced RTP', image: 'https://mediumrare.imgix.net/32e71937e51907f599b3d819775c59ad6db923f24a1cbd6188eae6435d059b5e?w=180&h=236&fit=min&auto=format' },
  ];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🎮</span>
          </div>
          <h1 className="text-black text-xl font-bold">Slot Games</h1>
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
          <div key={game.id} className="relative group cursor-pointer">
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

export default SlotGames;
