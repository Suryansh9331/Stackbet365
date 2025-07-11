import React from "react";
import { ChevronLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
const MascotGames = () => {
  const games = [
    {
      id: 1,
      image:
        "https://mediumrare.imgix.net/caebb5f1f0bde973616bddedf650f0d1427da0c1b0be2c06e33719385a52af99?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 2,
      image:
        "https://mediumrare.imgix.net/32e71937e51907f599b3d819775c59ad6db923f24a1cbd6188eae6435d059b5e?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 3,
      image:
        "https://mediumrare.imgix.net/93be5043875bfe1b6ac223263ef946fc27f696a1c49101fb4af20e6321a71587?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 4,
      image:
        "https://mediumrare.imgix.net/187811f2127b2e8cdeda76c43d41218e702231683d48a1539d6bb5d33193207b?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 5,
      image:
        "https://mediumrare.imgix.net/df2e0655bd986c2a1d3a43e4ffcda001de72812b5aef43fb698edc2808387d55?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 6,
      image:
        "https://mediumrare.imgix.net/813a0a5c21e76425e9cf7e1b9157a416e74dc268e6bc6f37ef15f5252d8bada0?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 7,
      image:
        "https://mediumrare.imgix.net/038d6506b9030aa1a6d9eea692ccfef2ab900c5da4221101b6c7a69b5cd64bb5?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 8,
      image:
        "https://mediumrare.imgix.net/cd5e0127e4506bd6ef97bceecf5191ed29fe29b2c2103d68a7481b364d192daa?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 9,
      image:
        "https://mediumrare.imgix.net/05e5efaa6b4f5925932c6d435608bd2b04b13f122b354e70e2581cf8a5988843?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 10,
      image:
        "https://mediumrare.imgix.net/c4c199ca38b653faee91ec65a95ec01ee5d5763cda8c334fcc47e59aa4b18e1c?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 11,
      image:
        "https://mediumrare.imgix.net/ae1054234a8aebfd8997c0948049707ad8c555311495685c8ab9697cfb8f313b?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 12,
      image:
        "https://mediumrare.imgix.net/a14a2a5a5dfa2e778c482ece447896b3d46bca34953f9717198b90d77fa865e8?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 13,
      image:
        "https://mediumrare.imgix.net/bc8760c159005adc21cc4bec6a6a3d48bec206f9ea2c7df249063846d0edb08f?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 14,
      image:
        "https://mediumrare.imgix.net/183e2d5ed1f341df8391d613f68a428386ce26aa27278e57fd607699a21f0586?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 15,
      image:
        "https://mediumrare.imgix.net/b616f9df85bfa0d73e21eda2bfe5315cf3b5f19724cc7acb1aebaea32ad6e862?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 16,
      image:
        "https://mediumrare.imgix.net/a0770eca61d5486a7ef5ec2c73295adeb89dcf6586b581222da75b11f345d355?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 17,
      image:
        "https://mediumrare.imgix.net/9f133b2866b405b3d2102b4ac2943f4ca588f737f78f076695c39bfb20bf6565?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 18,
      image:
        "https://mediumrare.imgix.net/79f1aab73dafd2b43cdc4c7ffd3870a359c4a3940c264b37adbb6967cc9a3b67?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 19,
      image:
        "https://mediumrare.imgix.net/5a4f91281047d90dee36bd004367b73bd7bf4e327fc907d5d3757abe4f62abf6?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 20,
      image:
        "https://mediumrare.imgix.net/5d062f868666f08d043ca728ca672d28307676dd676b65862e55cabe0ab3e724?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 21,
      image:
        "https://mediumrare.imgix.net/2d39ab7c22bc8fed13974be06629999c946267c1ec682e2d494d6ce719ecaa32?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 22,
      image:
        "https://mediumrare.imgix.net/21ce6a40338583e6651cecf15bac0fca9f7103bb8c991e7b3a7c8336427147e3?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 23,
      image:
        "https://mediumrare.imgix.net/f95eecf89206a06db949c5dc8f620a59dd675f754555fc4213aa0db83507bd41?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 24,
      image:
        "https://mediumrare.imgix.net/db00089cd132b67df9f6858b3f7692bb9c7df575da67027c8d25b0cfc4c22dfb?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 25,
      image:
        "https://mediumrare.imgix.net/448f12b52bad2222527cfdbb86c272c69369539d01df861897668370cb16fa26?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 26,
      image:
        "https://mediumrare.imgix.net/bf5dccc5fa2c5a69daf8b8cffbf06998ff81bfc3b05545e44d5b29c12044d65e?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 27,
      image:
        "https://mediumrare.imgix.net/8b57c9b0e0cad73a992ef861eee5196784d9e5a298dfbe811e7793c7a6ab0d65?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 28,
      image:
        "https://mediumrare.imgix.net/73ca7c50b447324bb570226b2efe75d420ad977aaee516e6697c955e022a0de6?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 29,
      image:
        "https://mediumrare.imgix.net/018fc5652edb864d751edd14848dd34ea0caf305dea93c5dea0c43ce420d4369?w=180&h=236&fit=min&auto=format",
    },
    {
      id: 30,
      image:
        "https://mediumrare.imgix.net/5175b7af91c7d82e51d1681eb60d771f9269e1fdf82bdc0a51c328c3b49c544c?w=180&h=236&fit=min&auto=format",
    },
  ];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
            <span className="text-2xl">🧬</span>
          </div>
          <h1 className="text-black text-xl font-bold">Mascot Games</h1>
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

export default MascotGames;
