import React from 'react';

const RecentWinners = () => {
  const winners = [
    { name: "Benjamin A.", amount: "39.82", gameImage: "https://papacasino777.com/img/thumbnails/FortuneCarnivalBonanza.png" },
    { name: "Grace Stew.", amount: "55.76", gameImage: "https://papacasino777.com/img/thumbnails/SugarFiesta.png" },
    { name: "Matthew Cl.", amount: "91.76", gameImage: "https://papacasino777.com/img/thumbnails/4000202.png" },
    { name: "Christophe.", amount: "57.88", gameImage: "https://papacasino777.com/img/thumbnails/2000003.png" },
    { name: "Henry Robe.", amount: "88.45", gameImage: "https://papacasino777.com/img/thumbnails/TowerX.png" },
    { name: "David Brow.", amount: "54.32", gameImage: "https://papacasino777.com/img/thumbnails/HelicopterX.png" },
    { name: "Lucas Sanc.", amount: "78.14", gameImage: "https://papacasino777.com/img/thumbnails/SugarFiesta.png" },
  ];

  const duplicatedWinners = [...winners, ...winners];

  return (
    <div className="bg-white` py-4">
      <div className="flex items-center gap-2 mb-3 px-4">
        <span className="text-lg">🏆</span>
        <h3 className="text-lg font-semibold text-gray-800">Recent Winners</h3>
      </div>
      
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee">
          {duplicatedWinners.map((winner, index) => (
            <div 
              key={index}
              className="flex  items-center gap-3 bg-white rounded-lg p-2 shadow-sm borr min-w-[160px] flex-shrink-0"
            >
              <img 
                src={winner.gameImage} 
                alt={`${winner.name} game`}
                className="w-12 h-12 rounded-lg flex-shrink-0 object-cover"
              />
              <div>
                <div className="text-sm font-medium text-gray-900">{winner.name}</div>
                <div className="text-lg font-bold text-green-600">${winner.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom CSS for the marquee animation
const customStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .animate-marquee {
    animation: marquee 60s linear infinite;
  }
`;

// Add custom styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = customStyles;
  document.head.appendChild(styleElement);
}

export default RecentWinners;