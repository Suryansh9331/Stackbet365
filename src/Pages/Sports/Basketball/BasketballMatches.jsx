import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BarChart3, TrendingUp, Clock, Play, Users, Star, Globe, Wifi, Signal } from 'lucide-react';
import Footer from '../../../Components/Footer';


const Basketball = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedSections, setExpandedSections] = useState({
    usa: true,
    mexico: false,
    puerto_rico: false,
    venezuela: false,
    brazil: false,
    china: false,
    international: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const matchData = {
    usa: {
      name: "USA",
      flag: "🇺🇸",
      count: 15,
      leagues: [
        {
          name: "WNBA",
          matches: [
            {
              date: "Fri, Jul 11 5:00 AM",
              team1: "Washington Mystics",
              team2: "Las Vegas Aces",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.57",
              score2: "2.26",
              spread: "+18",
              status: "Winner (Incl. Overtime)",
              live: true,
              viewers: "12.5K",
              quarter: "Q4 - 2:45",
              liveScore: { team1: 78, team2: 82 }
            },
            {
              date: "Sat, Jul 12 5:00 AM",
              team1: "Indiana Fever",
              team2: "Atlanta Dream",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "2.10",
              score2: "1.72",
              spread: "+1",
              status: "Winner",
              live: false,
              viewers: "8.2K",
              quarter: "Starting Soon"
            },
            {
              date: "Sat, Jul 12 7:30 AM",
              team1: "Seattle Storm",
              team2: "Connecticut Sun",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.83",
              score2: "1.95",
              spread: "+1",
              status: "Winner",
              live: false,
              viewers: "15.7K",
              quarter: "Pre-Game"
            }
          ]
        },
        {
          name: "NBA Summer League",
          matches: [
            {
              date: "Fri, Jul 11 8:00 PM",
              team1: "Lakers",
              team2: "Warriors",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.45",
              score2: "2.85",
              spread: "+12",
              status: "Winner",
              live: true,
              viewers: "45.2K",
              quarter: "Q2 - 8:23",
              liveScore: { team1: 42, team2: 38 }
            },
            {
              date: "Sat, Jul 12 6:00 PM",
              team1: "Celtics",
              team2: "Heat",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.92",
              score2: "1.88",
              spread: "+2",
              status: "Winner",
              live: false,
              viewers: "22.8K",
              quarter: "Tonight"
            }
          ]
        }
      ]
    },
    mexico: {
      name: "Mexico",
      flag: "🇲🇽",
      count: 6,
      leagues: [
        {
          name: "Liga Nacional de Baloncesto Profesional",
          matches: [
            {
              date: "Fri, Jul 11 9:00 PM",
              team1: "Aztecas",
              team2: "Panteras",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.65",
              score2: "2.20",
              spread: "+8",
              status: "Winner",
              live: true,
              viewers: "3.4K",
              quarter: "Q3 - 5:12",
              liveScore: { team1: 58, team2: 61 }
            }
          ]
        }
      ]
    },
    puerto_rico: {
      name: "Puerto Rico",
      flag: "🇵🇷",
      count: 3,
      leagues: [
        {
          name: "Baloncesto Superior Nacional",
          matches: [
            {
              date: "Sat, Jul 12 7:00 PM",
              team1: "Cangrejeros",
              team2: "Vaqueros",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.75",
              score2: "2.05",
              spread: "+5",
              status: "Winner",
              live: false,
              viewers: "2.1K",
              quarter: "Tomorrow"
            }
          ]
        }
      ]
    },
    venezuela: {
      name: "Venezuela",
      flag: "🇻🇪",
      count: 2,
      leagues: [
        {
          name: "Liga Profesional de Baloncesto",
          matches: [
            {
              date: "Sun, Jul 13 6:00 PM",
              team1: "Trotamundos",
              team2: "Gladiadores",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.55",
              score2: "2.45",
              spread: "+15",
              status: "Winner",
              live: false,
              viewers: "1.8K",
              quarter: "Sunday"
            }
          ]
        }
      ]
    },
    brazil: {
      name: "Brazil",
      flag: "🇧🇷",
      count: 4,
      leagues: [
        {
          name: "Novo Basquete Brasil",
          matches: [
            {
              date: "Fri, Jul 11 10:00 PM",
              team1: "Flamengo",
              team2: "Corinthians",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.38",
              score2: "3.10",
              spread: "+18",
              status: "Winner",
              live: true,
              viewers: "8.9K",
              quarter: "Q1 - 9:45",
              liveScore: { team1: 15, team2: 12 }
            }
          ]
        }
      ]
    },
    china: {
      name: "China",
      flag: "🇨🇳",
      count: 8,
      leagues: [
        {
          name: "Chinese Basketball Association",
          matches: [
            {
              date: "Sat, Jul 12 2:00 PM",
              team1: "Beijing Ducks",
              team2: "Shanghai Sharks",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.62",
              score2: "2.25",
              spread: "+9",
              status: "Winner",
              live: false,
              viewers: "18.3K",
              quarter: "Tomorrow 2PM"
            }
          ]
        }
      ]
    },
    international: {
      name: "International",
      flag: "🌍",
      count: 5,
      leagues: [
        {
          name: "EuroLeague",
          matches: [
            {
              date: "Sat, Jul 12 4:00 PM",
              team1: "Real Madrid",
              team2: "Barcelona",
              team1Logo: "🏀",
              team2Logo: "🏀",
              score1: "1.78",
              score2: "2.02",
              spread: "+3",
              status: "Winner",
              live: false,
              viewers: "25.6K",
              quarter: "El Clasico Tonight"
            }
          ]
        }
      ]
    }
  };

  const CountrySection = ({ countryKey, data }) => {
    const isExpanded = expandedSections[countryKey];
    
    return (
      <div className="mb-2 bg-slate-800 rounded-lg overflow-hidden shadow-lg">
        <div 
          className="flex items-center justify-between p-3 md:p-4 bg-slate-800 hover:bg-slate-700 cursor-pointer transition-all duration-200"
          onClick={() => toggleSection(countryKey)}
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl md:text-2xl">{data.flag}</span>
            <span className="text-white font-medium text-sm md:text-base">{data.name}</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="bg-slate-700 text-white px-2 py-1 rounded text-xs md:text-sm font-medium">
              {data.count}
            </span>
            {isExpanded ? 
              <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-slate-400" /> : 
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            }
          </div>
        </div>
        
        {isExpanded && data.leagues.length > 0 && (
          <div className="space-y-2 pb-2">
            {data.leagues.map((league, leagueIndex) => (
              <div key={leagueIndex} className="mx-2 md:mx-4">
                <div className="flex items-center justify-between p-2 md:p-3 bg-slate-700 rounded-lg mb-2">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-medium text-sm md:text-base">{league.name}</span>
                  </div>
                  <ChevronUp className="w-4 h-4 text-slate-400" />
                </div>
                
                {league.matches.map((match, matchIndex) => (
                  <div key={matchIndex} className="bg-slate-900 rounded-lg p-3 md:p-4 mb-2 border border-slate-700 hover:border-slate-600 transition-all duration-200">
                    {/* Match Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 space-y-2 md:space-y-0">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-xs md:text-sm">{match.date}</span>
                        {match.live && (
                          <div className="flex items-center space-x-1">
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
                              LIVE
                            </span>
                            <Wifi className="w-3 h-3 text-green-400 animate-pulse" />
                          </div>
                        )}
                        <div className="flex items-center space-x-1 text-slate-400">
                          <Users className="w-3 h-3" />
                          <span className="text-xs">{match.viewers}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Signal className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-xs md:text-sm">{match.quarter}</span>
                        <BarChart3 className="w-4 h-4 text-slate-400" />
                        <TrendingUp className="w-4 h-4 text-slate-400" />
                      </div>
                    </div>
                    
                    {/* Live Score Display */}
                    {match.live && match.liveScore && (
                      <div className="bg-slate-800 rounded-lg p-2 mb-3 border border-green-600">
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 text-xs font-medium">LIVE SCORE</span>
                          <div className="flex space-x-4">
                            <span className="text-white font-bold">{match.liveScore.team1}</span>
                            <span className="text-slate-400">-</span>
                            <span className="text-white font-bold">{match.liveScore.team2}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Teams and Odds */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
                      {/* Teams */}
                      <div className="lg:col-span-5">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <span className="text-base md:text-lg">{match.team1Logo}</span>
                            <span className="text-white font-medium text-sm md:text-base truncate">{match.team1}</span>
                          </div>
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <span className="text-base md:text-lg">{match.team2Logo}</span>
                            <span className="text-white font-medium text-sm md:text-base truncate">{match.team2}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Odds */}
                      <div className="lg:col-span-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center">
                            <div className="bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors text-white px-2 md:px-3 py-2 rounded mb-1">
                              <span className="font-medium text-xs md:text-sm">{match.team1}</span>
                            </div>
                            <div className="bg-slate-800 hover:bg-slate-700 cursor-pointer transition-colors text-white px-2 md:px-3 py-2 rounded">
                              <span className="font-medium text-xs md:text-sm">{match.team2}</span>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="bg-slate-700 hover:bg-blue-600 cursor-pointer transition-colors text-blue-400 hover:text-white px-2 md:px-3 py-2 rounded mb-1">
                              <span className="font-bold text-xs md:text-sm">{match.score1}</span>
                            </div>
                            <div className="bg-slate-700 hover:bg-blue-600 cursor-pointer transition-colors text-blue-400 hover:text-white px-2 md:px-3 py-2 rounded">
                              <span className="font-bold text-xs md:text-sm">{match.score2}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Spread */}
                      <div className="lg:col-span-2 text-center">
                        <div className="bg-green-600 hover:bg-green-500 cursor-pointer transition-colors text-white px-2 md:px-3 py-2 rounded">
                          <span className="font-bold text-sm md:text-base">{match.spread}</span>
                        </div>
                      </div>
                      
                      {/* Play Button */}
                      <div className="lg:col-span-1 flex justify-center">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Match Status */}
                    <div className="mt-3 pt-3 border-t border-slate-700">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                        <span className="text-slate-400 text-xs md:text-sm">{match.status}</span>
                        <div className="flex space-x-2">
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-xs transition-colors">
                            Stats
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-xs transition-colors">
                            H2H
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-xs transition-colors">
                            More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 p-3 md:p-4 border-b border-slate-700 sticky top-0 z-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <span className="text-white font-bold text-lg md:text-xl">All Basketball</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">Live</span>
            </div>
          </div>
          
          {/* Current Time */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300 text-xs md:text-sm">
                {formatDate(currentTime)} | {formatTime(currentTime)}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 px-3 py-1 rounded text-xs md:text-sm">
              Display
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 px-3 py-1 rounded text-xs md:text-sm flex items-center">
              Standard
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 px-3 py-1 rounded text-xs md:text-sm">
              Market
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 px-3 py-1 rounded text-xs md:text-sm flex items-center">
              Winner
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-slate-800 p-2 md:p-3 border-b border-slate-700">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4 text-xs md:text-sm">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>12 Live Matches</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-400">
            <Users className="w-4 h-4" />
            <span>156.8K Total Viewers</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-4 h-4" />
            <span>28 Featured Games</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400">
            <TrendingUp className="w-4 h-4" />
            <span>Hot: Lakers vs Warriors</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-2 md:p-4 max-w-7xl mx-auto">
        <div className="space-y-2 md:space-y-3">
          {Object.entries(matchData).map(([key, data]) => (
            <CountrySection key={key} countryKey={key} data={data} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800 p-3 md:p-4 border-t border-slate-700 mt-8">
        <div className="text-center text-slate-400 text-xs md:text-sm">
          <p>Live odds and scores updated every 30 seconds</p>
          <p className="mt-1">Responsible Gaming | 18+ | Terms Apply</p>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Basketball;