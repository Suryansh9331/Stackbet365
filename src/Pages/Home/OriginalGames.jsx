import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const OriginalGames = () => {
 const games = [
  { id: 1, name: 'JetX', image: 'https://mediumrare.imgix.net/2c3e16f0a3b8cd8d979265e48dd6a169937a4a4d0acb05ad532ca8345a1e6f21?w=180&h=236&fit=min&auto=format' },
  { id: 2, name: 'Aviator', image: 'https://mediumrare.imgix.net/7c53d6414e9be4cf73ce95ecf193b2ae129a525cbc0231577b74150b24ca434f?w=180&h=236&fit=min&auto=format' },
  { id: 3, name: 'Balloon', image: 'https://mediumrare.imgix.net/5fcbd552a53b9be85428ecd7fa0ef663f9d763bd8a504dd0de222bc873b79887?w=180&h=236&fit=min&auto=format' },
  { id: 4, name: 'FootballX', image: 'https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?w=180&h=236&fit=min&auto=format' },
  { id: 5, name: 'PlinkoX', image: 'https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf?w=180&h=236&fit=min&auto=format' },
  { id: 6, name: 'Mine Island', image: 'https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?w=180&h=236&fit=min&auto=format' },
  { id: 7, name: 'HolyX', image: 'https://mediumrare.imgix.net/11caec5df20098884ae9071848e1951b8b34e5ec84a7241f2e7c5afd4b323dfd?w=180&h=236&fit=min&auto=format' },
  { id: 8, name: 'Smash', image: 'https://mediumrare.imgix.net/9cd0814e4ef63607a99044eab83cc981e1df7398032041d8c8505f33796d50d1?w=180&h=236&fit=min&auto=format' },
  { id: 9, name: 'Hunter', image: 'https://mediumrare.imgix.net/1b45a8e293264dab4677f8187e8d71feeb56adabc02510a59d6b4e780c1e5b4c?w=180&h=236&fit=min&auto=format' },
  { id: 10, name: 'Helicopter X', image: 'https://mediumrare.imgix.net/c830595cbd07b2561ac76a365c2f01869dec9a8fe5e7be30634d78c51b2cc91e?w=180&h=236&fit=min&auto=format' },
  { id: 11, name: 'AviaStar', image: 'https://mediumrare.imgix.net/1c0de2ee0ce713086ff7735697ad2b5385bc974f206b857c724a5ec84467a73b?w=180&h=236&fit=min&auto=format' },
  { id: 12, name: 'Tower X', image: 'https://mediumrare.imgix.net/102cf3d7c840018b939cd787bf013e080b996d80e604f3008f21dddf1f1aa201?w=180&h=236&fit=min&auto=format' },
  { id: 13, name: 'Crash Duel X', image: 'https://mediumrare.imgix.net/e0a4131a16c28a1c1516958c93ec90c6f0f1bb00f41de87f72f6800c535b9c6f?w=180&h=236&fit=min&auto=format' },
  { id: 14, name: 'Bonuses Bonanza', image: 'https://mediumrare.imgix.net/7324297ac3a60dd5705db514330c5c363aca538432fda98be261bef8df232a77?w=180&h=236&fit=min&auto=format' },
  { id: 15, name: 'Booster Run', image: 'https://mediumrare.imgix.net/4031cec525edc307c71df6dddc71506ab06150fd5c14194a5dc9ca6fb54893a1?w=180&h=236&fit=min&auto=format' },
  { id: 16, name: 'Kite Festival', image: 'https://mediumrare.imgix.net/5da127925ac99a19da0cd888e5436049bc42f8ee4002df80cdc817f0501ab8a7?w=180&h=236&fit=min&auto=format' },
  { id: 17, name: 'Gunman Crash', image: 'https://mediumrare.imgix.net/86cd89b12ec34439c0d1a6e32b06c971efc86091e09ba466182abe173c3d3f7d?w=180&h=236&fit=min&auto=format' },
  { id: 18, name: 'Mr. Gamble', image: 'https://mediumrare.imgix.net/59d1df22a2931a965fc241a436a398f460e71ea9d0214f66780a52b56655d392?w=180&h=236&fit=min&auto=format' },
  { id: 19, name: 'Rocket Blaze', image: 'https://mediumrare.imgix.net/08512fbdc9c4163e9fae5917c47ade43a7bfe8253de88d8d16296540eab0f0a1?w=180&h=236&fit=min&auto=format' },
  { id: 20, name: 'Crypto Plinko', image: 'https://mediumrare.imgix.net/931cf1fd7147d0d0deda93f16fb8ef556d6d42df3586214f6539a9cfcfcf57b9?w=180&h=236&fit=min&auto=format' },
 ];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🎯</span>
          </div>
          <h1 className="text-black text-xl font-bold">Original Games</h1>
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

export default OriginalGames;