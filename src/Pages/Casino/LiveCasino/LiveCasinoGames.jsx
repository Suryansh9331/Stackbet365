import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from "react-router-dom";
const LiveCasinoGames = () => {
 const games = [
  { id: 1, name: 'JetX', image: 'https://mediumrare.imgix.net/9a45edc9b3a646964d221a495d1a4a22b801665c06bed849083f339be5221b76?w=180&h=236&fit=min&auto=format' },
  { id: 2, name: 'Aviator', image: 'https://mediumrare.imgix.net/5f45ac00385c249c51541d332f93917f3ade48ae992dbe33ef86a8e29117c508?w=180&h=236&fit=min&auto=format' },
  { id: 3, name: 'Balloon', image: 'https://mediumrare.imgix.net/0a0de9d5bd71f7ad46239db496b5b373cb694ddd0bd13fef5b8c58dba3af0f01?w=180&h=236&fit=min&auto=format' },
  { id: 4, name: 'FootballX', image: 'https://mediumrare.imgix.net/68ebb1c996064edf518928731ee45352216a41e9fb336abe4fcf4794a25f3f78?w=180&h=236&fit=min&auto=format' },
  { id: 5, name: 'PlinkoX', image: 'https://mediumrare.imgix.net/e4cc60603222231fa966b4cabef285fdfabaa5e9511b3979b72b4af8f2a77ec2?w=180&h=236&fit=min&auto=format' },
  { id: 6, name: 'Mine Island', image: 'https://mediumrare.imgix.net/351b4cecab9dca34ad7ba1a632b0372c12413ef2d66dfd6eb9daffdb77c5df1d?w=180&h=236&fit=min&auto=format' },
  { id: 7, name: 'HolyX', image: 'https://mediumrare.imgix.net/d3f4637ef57e99ce664831bf3cf49fbf6e94b53320d1758330443cfab21d6695?w=180&h=236&fit=min&auto=format' },
  { id: 8, name: 'Smash', image: 'https://mediumrare.imgix.net/fb3140b1a8bc8a41c5efbcba306a8bd003bef5aee6497613d08c389498e8a825?w=180&h=236&fit=min&auto=format' },
  { id: 9, name: 'Hunter', image: 'https://mediumrare.imgix.net/19003356fecb209d435952a47b7f121f3812421e22b8657543c64d7af2c30e0a?w=180&h=236&fit=min&auto=format' },
  { id: 10, name: 'Helicopter X', image: 'https://mediumrare.imgix.net/c94f33bac882ba6c0170970d11d5bb9f9f18b9e72fcdc647991e88545031a461?w=180&h=236&fit=min&auto=format' },
  { id: 11, name: 'AviaStar', image: 'https://mediumrare.imgix.net/953d840bbeddf380950cfc7cdd9027ccb09418149052574c34b5749b7ac39457?w=180&h=236&fit=min&auto=format' },
  { id: 12, name: 'Tower X', image: 'https://mediumrare.imgix.net/145800a3d15c10d629977a2564de8c1c7bf9570f9d354e1602c949868378a391?w=180&h=236&fit=min&auto=format' },
  { id: 13, name: 'Crash Duel X', image: 'https://mediumrare.imgix.net/6aa30a4a5356c42a94a78365c447ceca9fb301dda1a5cf995de0edc9f151c1b7?w=180&h=236&fit=min&auto=format' },
  { id: 14, name: 'Bonuses Bonanza', image: 'https://mediumrare.imgix.net/c40bcae3315585038417af91801a933cf0dfa3495995df4aba358906c58229e3?w=180&h=236&fit=min&auto=format' },
  { id: 15, name: 'Booster Run', image: 'https://mediumrare.imgix.net/73c30325c7b1906ad9e9b9c2642d4cfa00f6772dec7949288cd4831ddf30689f?w=180&h=236&fit=min&auto=format' },
  { id: 16, name: 'Blackjack', image: 'https://mediumrare.imgix.net/6b2970c5b8169a5ccfb620e461de4fe67ef7db59572cc4814b9dd13eff81675c?w=180&h=236&fit=min&auto=format' },
  { id: 17, name: 'Roulette Lobby', image: 'https://mediumrare.imgix.net/15c2626c51512e655e17ab52e131610c7abfd2932ea057977e103f1c38356e44?w=180&h=236&fit=min&auto=format' },
  { id: 18, name: 'Baccarat Lobby', image: 'https://mediumrare.imgix.net/6791003bfc028e95fa8a0ae8565056bd0ceb9bd651951c57ad76e298ae61c3a1?w=180&h=236&fit=min&auto=format' },
  { id: 19, name: 'Lightning Bac Bo', image: 'https://mediumrare.imgix.net/32d07e8f8f284324ebca4a953295e1fce88010b224e27bcac5b94f26333ab49f?w=180&h=236&fit=min&auto=format' },
  { id: 20, name: 'Dragon Tiger', image: 'https://mediumrare.imgix.net/688a5e614d80f82780905ca507649c541fe2c224811e7b540927584aa62bc303?w=180&h=236&fit=min&auto=format' },
  { id: 21, name: 'Craps', image: 'https://mediumrare.imgix.net/fe08f4fc8b44ddd370977a5ff57132af9dd195b3994cc4d5304021a0d1f82995?w=180&h=236&fit=min&auto=format' },
  { id: 22, name: 'Extreme Texas Hold\'em', image: 'https://mediumrare.imgix.net/3e9b36fab85e1ba036f71082afc7fd775b7ee9cbaf2f27286d5e4a88e6952669?w=180&h=236&fit=min&auto=format' },
  { id: 23, name: 'Red Door Roulette', image: 'https://mediumrare.imgix.net/7d2bb019f43e7b7ea913400a3dd06e4242ff7b3ad8a06cb7f599aee5da6270a6?w=180&h=236&fit=min&auto=format' },
  { id: 24, name: 'Bac Bo', image: 'https://mediumrare.imgix.net/a19e0e674bfd8cbcc8a599acabda85372d4d730036a450fc89c950909d9bf703?w=180&h=236&fit=min&auto=format' },
  { id: 25, name: 'Casino Hold\'em', image: 'https://mediumrare.imgix.net/94014cd99cc00537a3b93bd2f7fb29471075beb010d220c1e75680f3d349902f?w=180&h=236&fit=min&auto=format' },
  { id: 26, name: 'Stock Market', image: 'https://mediumrare.imgix.net/9c54ed23228c0c157092acee0f00fca550e5553549b380809db474b1e5ce8fec?w=180&h=236&fit=min&auto=format' },
  { id: 27, name: 'Crazy Time', image: 'https://mediumrare.imgix.net/3a2a9d1f841f8bed3c4a8d7c0ec66d92ffcf1a78d927414e387540fccf1ed878?w=180&h=236&fit=min&auto=format' },
  { id: 28, name: 'Cash or Crash', image: 'https://mediumrare.imgix.net/26245b612740bf827ce1994bec2d3416e3880617bd1fae2b602cbe8d8f292400?w=180&h=236&fit=min&auto=format' },
  { id: 29, name: 'Lightning Ball', image: 'https://mediumrare.imgix.net/04bad9dcb4bc78ab63f8a9851a5e924b7935495962c493f19e73b66782984e0d?w=180&h=236&fit=min&auto=format' },
  { id: 30, name: 'Crazy Pachinko', image: 'https://mediumrare.imgix.net/c1b1597bcb8c3e2510d2b034689a8570319eb205b469e76da65be12f0d08683e?w=180&h=236&fit=min&auto=format' }
];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🃏</span>
          </div>
          <h1 className="text-black text-xl font-bold">LiveCasino Games</h1>
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

export default LiveCasinoGames;