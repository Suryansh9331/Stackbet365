import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BarChart3, TrendingUp, Clock, Play, Users, Star, Globe, Wifi, Signal, Trophy, Target, Zap, Activity } from 'lucide-react';
import Footer from '../../../Components/Footer';

const Tennis = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedSections, setExpandedSections] = useState({
    wimbledon: true,
    atp: true,
    wta: false,
    challenger: false,
    itf: false,
    davis_cup: false,
    exhibition: false
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
    wimbledon: {
      name: "Wimbledon 2025",
      flag: "🇬🇧",
      count: 18,
      logo: "🏆",
      surface: "Grass",
      leagues: [
        {
          name: "Wimbledon Championships - Men's Singles",
          matches: [
            {
              date: "Fri, Jul 11 2:00 PM",
              player1: "Novak Djokovic",
              player2: "Carlos Alcaraz",
              player1Flag: "🇷🇸",
              player2Flag: "🇪🇸",
              player1Rank: "3",
              player2Rank: "1",
              odds1: "2.15",
              odds2: "1.72",
              surface: "Grass",
              court: "Centre Court",
              status: "Live - Semi Final",
              live: true,
              viewers: "2.8M",
              round: "SF",
              set: "Set 3",
              score: "6-4, 4-6, 3-2",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 1, 
                currentSet: "3-2",
                serving: "Djokovic"
              },
              tournament: "Grand Slam",
              prize: "$1.7M",
              h2h: "Djokovic 4-3",
              lastMeeting: "French Open 2024"
            },
            {
              date: "Fri, Jul 11 4:30 PM",
              player1: "Jannik Sinner",
              player2: "Daniil Medvedev",
              player1Flag: "🇮🇹",
              player2Flag: "🇷🇺",
              player1Rank: "2",
              player2Rank: "5",
              odds1: "1.85",
              odds2: "1.95",
              surface: "Grass",
              court: "Court 1",
              status: "Live - Semi Final",
              live: true,
              viewers: "1.9M",
              round: "SF",
              set: "Set 2",
              score: "7-6, 2-3",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 0, 
                currentSet: "2-3",
                serving: "Medvedev"
              },
              tournament: "Grand Slam",
              prize: "$1.7M",
              h2h: "Sinner 6-7",
              lastMeeting: "Miami Open 2024"
            }
          ]
        },
        {
          name: "Wimbledon Championships - Women's Singles",
          matches: [
            {
              date: "Fri, Jul 11 1:00 PM",
              player1: "Iga Swiatek",
              player2: "Aryna Sabalenka",
              player1Flag: "🇵🇱",
              player2Flag: "🇧🇾",
              player1Rank: "1",
              player2Rank: "3",
              odds1: "1.68",
              odds2: "2.25",
              surface: "Grass",
              court: "Centre Court",
              status: "Completed",
              live: false,
              viewers: "2.1M",
              round: "SF",
              set: "Final",
              score: "6-3, 6-4",
              liveScore: { 
                player1Sets: 2, 
                player2Sets: 0, 
                currentSet: "Match Complete",
                serving: "N/A"
              },
              tournament: "Grand Slam",
              prize: "$1.7M",
              h2h: "Swiatek 8-4",
              lastMeeting: "Madrid Open 2024"
            },
            {
              date: "Fri, Jul 11 3:00 PM",
              player1: "Coco Gauff",
              player2: "Elena Rybakina",
              player1Flag: "🇺🇸",
              player2Flag: "🇰🇿",
              player1Rank: "2",
              player2Rank: "4",
              odds1: "2.05",
              odds2: "1.75",
              surface: "Grass",
              court: "Court 1",
              status: "Live - Semi Final",
              live: true,
              viewers: "1.7M",
              round: "SF",
              set: "Set 1",
              score: "4-5",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "4-5",
                serving: "Rybakina"
              },
              tournament: "Grand Slam",
              prize: "$1.7M",
              h2h: "Gauff 2-1",
              lastMeeting: "Cincinnati 2024"
            }
          ]
        }
      ]
    },
    atp: {
      name: "ATP Tour",
      flag: "🌍",
      count: 24,
      logo: "🎾",
      surface: "Various",
      leagues: [
        {
          name: "ATP Masters 1000 - Canadian Open",
          matches: [
            {
              date: "Fri, Jul 11 6:00 PM",
              player1: "Alexander Zverev",
              player2: "Stefanos Tsitsipas",
              player1Flag: "🇩🇪",
              player2Flag: "🇬🇷",
              player1Rank: "4",
              player2Rank: "6",
              odds1: "1.92",
              odds2: "1.88",
              surface: "Hard",
              court: "Centre Court",
              status: "Live - Quarter Final",
              live: true,
              viewers: "425K",
              round: "QF",
              set: "Set 2",
              score: "6-4, 3-4",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 0, 
                currentSet: "3-4",
                serving: "Tsitsipas"
              },
              tournament: "Masters 1000",
              prize: "$650K",
              h2h: "Zverev 7-10",
              lastMeeting: "Rome Masters 2024"
            },
            {
              date: "Fri, Jul 11 8:00 PM",
              player1: "Holger Rune",
              player2: "Taylor Fritz",
              player1Flag: "🇩🇰",
              player2Flag: "🇺🇸",
              player1Rank: "8",
              player2Rank: "7",
              odds1: "2.10",
              odds2: "1.70",
              surface: "Hard",
              court: "Stadium Court",
              status: "Starting Soon",
              live: false,
              viewers: "312K",
              round: "QF",
              set: "Warm-up",
              score: "0-0",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "0-0",
                serving: "N/A"
              },
              tournament: "Masters 1000",
              prize: "$650K",
              h2h: "Rune 1-2",
              lastMeeting: "Indian Wells 2024"
            },
            {
              date: "Fri, Jul 11 10:00 PM",
              player1: "Casper Ruud",
              player2: "Andrey Rublev",
              player1Flag: "🇳🇴",
              player2Flag: "🇷🇺",
              player1Rank: "9",
              player2Rank: "10",
              odds1: "1.78",
              odds2: "2.02",
              surface: "Hard",
              court: "Court 2",
              status: "Tonight",
              live: false,
              viewers: "285K",
              round: "QF",
              set: "Tonight 10PM",
              score: "vs",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "Tonight",
                serving: "N/A"
              },
              tournament: "Masters 1000",
              prize: "$650K",
              h2h: "Ruud 3-2",
              lastMeeting: "Barcelona 2024"
            }
          ]
        },
        {
          name: "ATP 500 - Hamburg Open",
          matches: [
            {
              date: "Fri, Jul 11 3:00 PM",
              player1: "Lorenzo Musetti",
              player2: "Sebastian Korda",
              player1Flag: "🇮🇹",
              player2Flag: "🇺🇸",
              player1Rank: "15",
              player2Rank: "18",
              odds1: "1.65",
              odds2: "2.20",
              surface: "Clay",
              court: "Centre Court",
              status: "Live - Semi Final",
              live: true,
              viewers: "178K",
              round: "SF",
              set: "Set 3",
              score: "6-3, 4-6, 2-1",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 1, 
                currentSet: "2-1",
                serving: "Musetti"
              },
              tournament: "ATP 500",
              prize: "$325K",
              h2h: "Musetti 2-0",
              lastMeeting: "Monte Carlo 2024"
            },
            {
              date: "Fri, Jul 11 5:00 PM",
              player1: "Tommy Paul",
              player2: "Francisco Cerundolo",
              player1Flag: "🇺🇸",
              player2Flag: "🇦🇷",
              player1Rank: "12",
              player2Rank: "27",
              odds1: "1.55",
              odds2: "2.45",
              surface: "Clay",
              court: "Court 1",
              status: "Live - Semi Final",
              live: true,
              viewers: "145K",
              round: "SF",
              set: "Set 1",
              score: "3-2",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "3-2",
                serving: "Paul"
              },
              tournament: "ATP 500",
              prize: "$325K",
              h2h: "Paul 1-1",
              lastMeeting: "Buenos Aires 2024"
            }
          ]
        }
      ]
    },
    wta: {
      name: "WTA Tour",
      flag: "🌍",
      count: 16,
      logo: "🎾",
      surface: "Various",
      leagues: [
        {
          name: "WTA 1000 - Canadian Open",
          matches: [
            {
              date: "Fri, Jul 11 7:00 PM",
              player1: "Jessica Pegula",
              player2: "Marketa Vondrousova",
              player1Flag: "🇺🇸",
              player2Flag: "🇨🇿",
              player1Rank: "5",
              player2Rank: "8",
              odds1: "1.82",
              odds2: "1.98",
              surface: "Hard",
              court: "Centre Court",
              status: "Live - Quarter Final",
              live: true,
              viewers: "298K",
              round: "QF",
              set: "Set 2",
              score: "6-2, 2-3",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 0, 
                currentSet: "2-3",
                serving: "Vondrousova"
              },
              tournament: "WTA 1000",
              prize: "$415K",
              h2h: "Pegula 3-1",
              lastMeeting: "US Open 2024"
            },
            {
              date: "Fri, Jul 11 9:00 PM",
              player1: "Qinwen Zheng",
              player2: "Liudmila Samsonova",
              player1Flag: "🇨🇳",
              player2Flag: "🇷🇺",
              player1Rank: "7",
              player2Rank: "14",
              odds1: "1.75",
              odds2: "2.05",
              surface: "Hard",
              court: "Stadium Court",
              status: "Tonight",
              live: false,
              viewers: "234K",
              round: "QF",
              set: "Tonight 9PM",
              score: "vs",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "Tonight",
                serving: "N/A"
              },
              tournament: "WTA 1000",
              prize: "$415K",
              h2h: "Zheng 2-0",
              lastMeeting: "Beijing 2024"
            }
          ]
        },
        {
          name: "WTA 500 - Berlin Open",
          matches: [
            {
              date: "Fri, Jul 11 4:00 PM",
              player1: "Beatriz Haddad Maia",
              player2: "Elise Mertens",
              player1Flag: "🇧🇷",
              player2Flag: "🇧🇪",
              player1Rank: "11",
              player2Rank: "23",
              odds1: "1.62",
              odds2: "2.28",
              surface: "Grass",
              court: "Centre Court",
              status: "Live - Semi Final",
              live: true,
              viewers: "156K",
              round: "SF",
              set: "Set 1",
              score: "5-4",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "5-4",
                serving: "Haddad Maia"
              },
              tournament: "WTA 500",
              prize: "$285K",
              h2h: "Haddad Maia 1-0",
              lastMeeting: "Eastbourne 2023"
            }
          ]
        }
      ]
    },
    challenger: {
      name: "ATP Challenger",
      flag: "🌎",
      count: 12,
      logo: "🎾",
      surface: "Various",
      leagues: [
        {
          name: "Challenger - Amersfoort",
          matches: [
            {
              date: "Fri, Jul 11 2:30 PM",
              player1: "Tallon Griekspoor",
              player2: "Botic van de Zandschulp",
              player1Flag: "🇳🇱",
              player2Flag: "🇳🇱",
              player1Rank: "45",
              player2Rank: "52",
              odds1: "1.88",
              odds2: "1.92",
              surface: "Clay",
              court: "Centre Court",
              status: "Live - Final",
              live: true,
              viewers: "45K",
              round: "F",
              set: "Set 3",
              score: "6-4, 3-6, 4-3",
              liveScore: { 
                player1Sets: 1, 
                player2Sets: 1, 
                currentSet: "4-3",
                serving: "Griekspoor"
              },
              tournament: "Challenger 125",
              prize: "$18K",
              h2h: "Griekspoor 2-1",
              lastMeeting: "Rotterdam 2024"
            }
          ]
        },
        {
          name: "Challenger - Poznan",
          matches: [
            {
              date: "Fri, Jul 11 11:00 AM",
              player1: "Kamil Majchrzak",
              player2: "Thiago Agustin Tirante",
              player1Flag: "🇵🇱",
              player2Flag: "🇦🇷",
              player1Rank: "187",
              player2Rank: "156",
              odds1: "2.15",
              odds2: "1.72",
              surface: "Clay",
              court: "Court 1",
              status: "Completed",
              live: false,
              viewers: "12K",
              round: "SF",
              set: "Final",
              score: "6-7, 6-3, 6-4",
              liveScore: { 
                player1Sets: 2, 
                player2Sets: 1, 
                currentSet: "Match Complete",
                serving: "N/A"
              },
              tournament: "Challenger 75",
              prize: "$11K",
              h2h: "First Meeting",
              lastMeeting: "N/A"
            }
          ]
        }
      ]
    },
    itf: {
      name: "ITF Tournaments",
      flag: "🌐",
      count: 8,
      logo: "🎾",
      surface: "Various",
      leagues: [
        {
          name: "ITF W75 - Contrexeville",
          matches: [
            {
              date: "Fri, Jul 11 10:00 AM",
              player1: "Chloe Paquet",
              player2: "Diane Parry",
              player1Flag: "🇫🇷",
              player2Flag: "🇫🇷",
              player1Rank: "125",
              player2Rank: "89",
              odds1: "2.25",
              odds2: "1.65",
              surface: "Clay",
              court: "Court 1",
              status: "Live - Quarter Final",
              live: true,
              viewers: "8K",
              round: "QF",
              set: "Set 2",
              score: "4-6, 3-2",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 1, 
                currentSet: "3-2",
                serving: "Paquet"
              },
              tournament: "ITF W75",
              prize: "$12K",
              h2h: "Paquet 0-2",
              lastMeeting: "Lyon 2023"
            }
          ]
        }
      ]
    },
    davis_cup: {
      name: "Davis Cup",
      flag: "🏆",
      count: 6,
      logo: "🏆",
      surface: "Various",
      leagues: [
        {
          name: "Davis Cup Group Stage",
          matches: [
            {
              date: "Sat, Jul 12 10:00 AM",
              player1: "Spain",
              player2: "Netherlands",
              player1Flag: "🇪🇸",
              player2Flag: "🇳🇱",
              player1Rank: "Team",
              player2Rank: "Team",
              odds1: "1.45",
              odds2: "2.75",
              surface: "Hard",
              court: "Davis Cup Arena",
              status: "Tomorrow",
              live: false,
              viewers: "125K",
              round: "Group",
              set: "Tomorrow 10AM",
              score: "vs",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "Tomorrow",
                serving: "N/A"
              },
              tournament: "Davis Cup",
              prize: "National Pride",
              h2h: "Spain 8-4",
              lastMeeting: "Davis Cup 2022"
            }
          ]
        }
      ]
    },
    exhibition: {
      name: "Exhibition Matches",
      flag: "🎪",
      count: 4,
      logo: "⭐",
      surface: "Various",
      leagues: [
        {
          name: "Legends Exhibition",
          matches: [
            {
              date: "Fri, Jul 11 7:30 PM",
              player1: "Roger Federer",
              player2: "Rafael Nadal",
              player1Flag: "🇨🇭",
              player2Flag: "🇪🇸",
              player1Rank: "Legend",
              player2Rank: "Legend",
              odds1: "1.95",
              odds2: "1.85",
              surface: "Hard",
              court: "Exhibition Arena",
              status: "Tonight - Exhibition",
              live: false,
              viewers: "1.2M",
              round: "EXH",
              set: "Tonight 7:30PM",
              score: "vs",
              liveScore: { 
                player1Sets: 0, 
                player2Sets: 0, 
                currentSet: "Tonight",
                serving: "N/A"
              },
              tournament: "Exhibition",
              prize: "For Charity",
              h2h: "Nadal 24-16",
              lastMeeting: "Laver Cup 2022"
            }
          ]
        }
      ]
    }
  };

  const TournamentSection = ({ tournamentKey, data }) => {
    const isExpanded = expandedSections[tournamentKey];
    
    return (
      <div className="mb-3 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
        <div 
          className="flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 cursor-pointer transition-all duration-300"
          onClick={() => toggleSection(tournamentKey)}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl">{data.flag}</span>
              <span className="text-xl md:text-2xl">{data.logo}</span>
            </div>
            <div>
              <span className="text-white font-bold text-base md:text-lg">{data.name}</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-slate-300 text-xs md:text-sm">{data.surface} Courts</span>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <span className="text-slate-300 text-xs md:text-sm">{data.count} Matches</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
              {data.count}
            </span>
            {isExpanded ? 
              <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-slate-400" /> : 
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
            }
          </div>
        </div>
        
        {isExpanded && data.leagues.length > 0 && (
          <div className="space-y-3 p-3">
            {data.leagues.map((league, leagueIndex) => (
              <div key={leagueIndex} className="bg-slate-900 rounded-xl p-4 border border-slate-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-white font-bold text-base md:text-lg">{league.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300 text-sm">{league.matches.length} matches</span>
                  </div>
                </div>
                
                {league.matches.map((match, matchIndex) => (
                  <div key={matchIndex} className="bg-slate-800 rounded-xl p-4 md:p-5 mb-3 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:shadow-lg">
                    {/* Match Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 space-y-3 lg:space-y-0">
                      <div className="flex items-center space-x-3 flex-wrap">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm md:text-base font-medium">{match.date}</span>
                        {match.live && (
                          <div className="flex items-center space-x-2">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                              🔴 LIVE
                            </span>
                            <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
                            <Activity className="w-4 h-4 text-red-400 animate-pulse" />
                          </div>
                        )}
                        <div className="flex items-center space-x-2 text-slate-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">{match.viewers}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded-full">
                          <Target className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300 text-sm">{match.court}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded-full">
                          <span className="text-slate-300 text-sm">{match.surface}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Score Display */}
                    {match.live && match.liveScore && (
                      <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-3 mb-4 border border-green-600">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400 text-sm font-bold">LIVE SCORE</span>
                            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <span className="text-white font-bold text-lg">Sets: {match.liveScore.player1Sets}</span>
                            </div>
                            <div className="text-center">
                              <span className="text-slate-400 text-lg">-</span>
                            </div>
                            <div className="text-center">
                              <span className="text-white font-bold text-lg">{match.liveScore.player2Sets}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="text-yellow-400 font-bold text-lg">{match.liveScore.currentSet}</span>
                          <span className="text-slate-300 text-sm ml-2">• {match.liveScore.serving} serving</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Players and Match Details */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
                      {/* Players */}
                      <div className="xl:col-span-5">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{match.player1Flag}</span>
                              <div>
                                <span className="text-white font-bold text-sm md:text-base">{match.player1}</span>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-slate-300 text-xs">#{match.player1Rank}</span>
                                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                  <span className="text-slate-300 text-xs">{match.tournament}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors text-white px-3 py-1 rounded font-bold text-sm">
                                {match.odds1}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{match.player2Flag}</span>
                              <div>
                                <span className="text-white font-bold text-sm md:text-base">{match.player2}</span>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-slate-300 text-xs">#{match.player2Rank}</span>
                                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                  <span className="text-slate-300 text-xs">{match.tournament}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="bg-blue-600 hover:bg-blue-500 cursor-pointer transition-colors text-white px-3 py-1 rounded font-bold text-sm">
                                {match.odds2}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Match Score */}
                      <div className="xl:col-span-4">
                        <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                          <div className="text-center mb-3">
                            <span className="text-slate-400 text-sm font-medium">Current Score</span>
                          </div>
                          <div className="text-center">
                            <span className="text-white font-bold text-lg md:text-xl">{match.score}</span>
                          </div>
                          <div className="text-center mt-2">
                            <span className="text-slate-400 text-sm">{match.set}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Match Info */}
                      <div className="xl:col-span-3">
                        <div className="space-y-2">
                          <div className="bg-slate-700 p-2 rounded text-center">
                            <span className="text-white font-bold text-sm">{match.round}</span>
                          </div>
                          <div className="bg-green-600 hover:bg-green-500 cursor-pointer transition-colors p-2 rounded text-center">
                            <span className="text-white font-bold text-sm">{match.prize}</span>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-colors w-full">
                            <Play className="w-4 h-4 mx-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Match Stats */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-900 p-3 rounded-lg">
                          <div className="text-slate-400 text-xs mb-1">Head to Head</div>
                          <div className="text-white text-sm font-bold">{match.h2h}</div>
                        </div>
                        <div className="bg-slate-900 p-3 rounded-lg">
                          <div className="text-slate-400 text-xs mb-1">Last Meeting</div>
                          <div className="text-white text-sm font-bold">{match.lastMeeting}</div>
                        </div>
                        <div className="bg-slate-900 p-3 rounded-lg">
                          <div className="text-slate-400 text-xs mb-1">Status</div>
                          <div className="text-white text-sm font-bold">{match.status}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <div className="flex space-x-2">
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm transition-colors">
                            📊 Stats
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm transition-colors">
                            🎯 H2H
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm transition-colors">
                            📈 Form
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm transition-colors">
                            🎾 Live
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-1 rounded text-xs transition-colors">
                            ⭐ Favorite
                          </button>
                          <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded text-xs transition-colors">
                            📺 Watch
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 md:p-6 border-b border-slate-600 sticky top-0 z-50 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-xl md:text-2xl">Tennis Live</span>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">68 Live Matches</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Time */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
              <Globe className="w-5 h-5 text-slate-400" />
              <span className="text-slate-300 text-sm md:text-base font-medium">
                {formatDate(currentTime)} | {formatTime(currentTime)}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-sm font-medium">
              🎾 All Courts
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
              🏆 Grand Slams
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-sm font-medium">
              📊 Markets
            </button>
            <button className="text-slate-300 hover:text-white transition-colors bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-full text-sm font-medium flex items-center">
              💰 Odds
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 border-b border-slate-600">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 text-sm">
          <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold">68 Live Matches</span>
          </div>
          <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-bold">12.4M Total Viewers</span>
          </div>
          <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold">18 Grand Slam Matches</span>
          </div>
          <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-bold">Hot: Djokovic vs Alcaraz</span>
          </div>
          <div className="flex items-center space-x-3 bg-slate-700 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-bold">88 Active Tournaments</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6 max-w-8xl mx-auto">
        <div className="space-y-4">
          {Object.entries(matchData).map(([key, data]) => (
            <TournamentSection key={key} tournamentKey={key} data={data} />
          ))}
        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-t border-slate-600 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-slate-400 text-sm mb-2">🔄 Updates</div>
              <div className="text-white font-bold">Live scores updated every 15 seconds</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-2">⚡ Performance</div>
              <div className="text-white font-bold">Real-time odds and statistics</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-2">🛡️ Responsibility</div>
              <div className="text-white font-bold">18+ | Gamble Responsibly</div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-600 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Tennis Live - All matches, odds, and statistics are updated in real-time
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Terms & Conditions | Privacy Policy | Responsible Gaming
            </p>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  );
};

export default Tennis;