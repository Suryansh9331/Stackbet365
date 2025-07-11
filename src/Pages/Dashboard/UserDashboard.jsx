// import React from "react";
// import { useAuth } from "../../Hooks/useAuth";
// import {
//   LogOut,
//   Wallet,
//   User,
//   Trophy,
//   Gift,
//   Activity,
//   TrendingUp,
//   Shield,
//   Star,
//   Coins,
// } from "lucide-react";

// const Dashboard = () => {
//   const { user, logout } = useAuth();

//   if (!user) return <p className="text-center mt-20 text-lg">Please log in to view your dashboard.</p>;

//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-6 space-y-10">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-4">
//         <div className="flex items-center space-x-4">
//           <img
//             src={user.avatar}
//             alt="avatar"
//             className="w-20 h-20 rounded-full border-4 border-purple-600 shadow-md"
//           />
//           <div>
//             <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
//             <p className="text-gray-600">Level 12 | Trusted Player</p>
//           </div>
//         </div>
//         <button
//           onClick={logout}
//           className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg transition-all mt-4 md:mt-0"
//         >
//           <LogOut className="w-5 h-5" /> Logout
//         </button>
//       </div>

//       {/* Wallet & Bonus */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-4">
//           <Wallet className="w-10 h-10 text-purple-600" />
//           <div>
//             <p className="text-sm text-gray-500">Wallet Balance</p>
//             <h2 className="text-3xl font-bold text-gray-800">200 BTC</h2>
//             <p className="text-green-500 font-medium">+5.3% today</p>
//           </div>
//         </div>
//         <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl text-white p-6 flex items-center justify-between shadow-lg">
//           <div>
//             <h2 className="text-xl font-bold mb-1">🎁 Welcome Bonus</h2>
//             <p>You’ve received 200 BTC to get started.</p>
//           </div>
//           <Gift className="w-10 h-10" />
//         </div>
//         <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-2xl p-6 flex items-center gap-4">
//           <Star className="w-10 h-10 text-yellow-500" />
//           <div>
//             <p className="text-sm text-gray-600">First Deposit Offer</p>
//             <h3 className="text-lg font-bold">🔥 Get 2X Balance</h3>
//           </div>
//         </div>
//       </div>

//       {/* Betting Activity */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-xl shadow">
//           <div className="flex items-center gap-3 mb-4">
//             <Trophy className="w-6 h-6 text-purple-600" />
//             <h3 className="text-xl font-semibold">Recent Bets</h3>
//           </div>
//           <ul className="space-y-3 text-gray-700 text-sm">
//             <li>🎲 JetX – Bet 0.1 BTC – <span className="text-green-600 font-medium">+0.5 BTC</span></li>
//             <li>🛩️ Aviator – Bet 0.2 BTC – <span className="text-red-500 font-medium">-0.2 BTC</span></li>
//             <li>⚽ FootballX – Bet 0.3 BTC – <span className="text-green-600 font-medium">+0.7 BTC</span></li>
//             <li>🎈 Balloon – Bet 0.15 BTC – <span className="text-red-500 font-medium">-0.1 BTC</span></li>
//           </ul>
//         </div>
//         <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-xl shadow">
//           <div className="flex items-center gap-3 mb-4">
//             <User className="w-6 h-6 text-gray-600" />
//             <h3 className="text-xl font-semibold">Profile Overview</h3>
//           </div>
//           <ul className="text-sm space-y-2">
//             <li><strong>Name:</strong> {user.name}</li>
//             <li><strong>Email:</strong> {user.email}</li>
//             <li><strong>Phone:</strong> {user.phone}</li>
//             <li><strong>Address:</strong> {user.address}</li>
//             <li><strong>Account Status:</strong> Verified ✅</li>
//             <li><strong>Last Login:</strong> 5 mins ago</li>
//           </ul>
//         </div>
//       </div>

//       {/* Statistics */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-gray-100 p-5 rounded-lg shadow flex items-center gap-4">
//           <Activity className="text-purple-600 w-6 h-6" />
//           <div>
//             <p className="text-sm text-gray-600">Total Bets</p>
//             <h4 className="text-lg font-bold">127</h4>
//           </div>
//         </div>
//         <div className="bg-gray-100 p-5 rounded-lg shadow flex items-center gap-4">
//           <Coins className="text-yellow-500 w-6 h-6" />
//           <div>
//             <p className="text-sm text-gray-600">Total Winnings</p>
//             <h4 className="text-lg font-bold">6.9 BTC</h4>
//           </div>
//         </div>
//         <div className="bg-gray-100 p-5 rounded-lg shadow flex items-center gap-4">
//           <TrendingUp className="text-green-500 w-6 h-6" />
//           <div>
//             <p className="text-sm text-gray-600">Win Ratio</p>
//             <h4 className="text-lg font-bold">68%</h4>
//           </div>
//         </div>
//         <div className="bg-gray-100 p-5 rounded-lg shadow flex items-center gap-4">
//           <Shield className="text-blue-500 w-6 h-6" />
//           <div>
//             <p className="text-sm text-gray-600">Security Level</p>
//             <h4 className="text-lg font-bold">High</h4>
//           </div>
//         </div>
//       </div>

//       {/* Promotion CTA */}
//       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between shadow-xl mt-6">
//         <div>
//           <h2 className="text-2xl font-bold mb-1">🚀 Level Up Your Game</h2>
//           <p className="text-sm">Earn XP with every bet and unlock new levels, avatars & rewards!</p>
//         </div>
//         <button className="mt-4 md:mt-0 bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100">
//           Explore Rewards
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from "react";
// import { useAuth } from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";
// import {
//   LogOut,
//   Wallet,
//   User,
//   Trophy,
//   Gift,
//   Activity,
//   TrendingUp,
//   Shield,
//   Star,
//   Coins,
//   Clock,
//   BarChart2,
//   HelpCircle,
//   Bell,
//   Settings,
//   CreditCard,
//   ShieldCheck,
//   Zap,
//   Award,
//   ChevronRight,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Lock,
// } from "lucide-react";

// const Dashboard = () => {
//   const { user, logout } = useAuth();

//   // Promotional offers data
//   const offers = [
//     {
//       id: 1,
//       title: "First Deposit Bonus",
//       description: "Get 200% bonus on your first deposit up to 5 BTC",
//       icon: <Star className="w-5 h-5 text-yellow-500" />,
//       timeLeft: "2 days left",
//       link: "/promo/first-deposit",
//     },
//     {
//       id: 2,
//       title: "Weekly Reload",
//       description: "50% bonus on every deposit this week",
//       icon: <Zap className="w-5 h-5 text-blue-500" />,
//       timeLeft: "3 days left",
//       link: "/promo/weekly-reload",
//     },
//     {
//       id: 3,
//       title: "VIP Special",
//       description: "Exclusive 100% cashback for VIP members",
//       icon: <Award className="w-5 h-5 text-purple-500" />,
//       timeLeft: "VIP only",
//       link: "/vip/benefits",
//     },
//   ];

//   if (!user) return <p className="text-center mt-20 text-lg">Please log in to view your dashboard.</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
//         <div className="flex items-center space-x-4 mb-4 md:mb-0">
//           <div className="relative">
//             <img
//               src={user.avatar}
//               alt="avatar"
//               className="w-16 h-16 rounded-full border-2 border-gray-300"
//             />
//             <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
//           </div>
//           <div>
//             <h1 className="text-xl font-semibold">{user.name}</h1>
//             <p className="text-sm text-gray-600 flex items-center">
//               <ShieldCheck className="w-3 h-3 mr-1 text-blue-500" />
//               Verified Account
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100">
//             <Bell className="w-5 h-5 text-gray-600" />
//           </Link>
//           <Link to="/settings" className="p-2 rounded-full hover:bg-gray-100">
//             <Settings className="w-5 h-5 text-gray-600" />
//           </Link>
//           <button
//             onClick={logout}
//             className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm"
//           >
//             <LogOut className="w-4 h-4" /> Sign Out
//           </button>
//         </div>
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="space-y-6">
//           {/* Wallet Card */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="font-medium flex items-center">
//                 <Wallet className="w-5 h-5 mr-2 text-gray-700" />
//                 Wallet Balance
//               </h3>
//             </div>
//             <div className="p-4">
//               <div className="flex justify-between items-end mb-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Available Balance</p>
//                   <h2 className="text-2xl font-bold">200 BTC</h2>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-500">Today's Change</p>
//                   <p className="text-green-500 font-medium">+5.3%</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <Link
//                   to="/deposit"
//                   className="bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-3 rounded-lg text-sm font-medium"
//                 >
//                   Deposit
//                 </Link>
//                 <Link
//                   to="/withdraw"
//                   className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-3 rounded-lg text-sm font-medium border border-gray-300"
//                 >
//                   Withdraw
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Promotional Offers */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="font-medium flex items-center">
//                 <Gift className="w-5 h-5 mr-2 text-gray-700" />
//                 Active Offers
//               </h3>
//             </div>
//             <div className="p-4 space-y-4">
//               {offers.map((offer) => (
//                 <Link
//                   to={offer.link}
//                   key={offer.id}
//                   className="block border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
//                 >
//                   <div className="flex items-start">
//                     <div className="bg-gray-100 p-2 rounded-lg mr-3">
//                       {offer.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900">{offer.title}</h4>
//                       <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
//                       <div className="flex justify-between items-center mt-2">
//                         <span className="text-xs text-gray-500">{offer.timeLeft}</span>
//                         <span className="text-xs font-medium text-blue-600">View Details</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Middle Column */}
//         <div className="space-y-6">
//           {/* User Profile Details */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="font-medium flex items-center">
//                 <User className="w-5 h-5 mr-2 text-gray-700" />
//                 Profile Information
//               </h3>
//             </div>
//             <div className="p-4">
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <User className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Full Name</p>
//                     <p className="font-medium">{user.name}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <Mail className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Email Address</p>
//                     <p className="font-medium">{user.email}</p>
//                     <p className="text-xs text-green-500 mt-1 flex items-center">
//                       <ShieldCheck className="w-3 h-3 mr-1" />
//                       Verified
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <Phone className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Phone Number</p>
//                     <p className="font-medium">{user.phone || "Not provided"}</p>
//                     {!user.phone && (
//                       <Link
//                         to="/profile/verify-phone"
//                         className="text-xs text-blue-500 hover:underline"
//                       >
//                         Add phone number
//                       </Link>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <MapPin className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Address</p>
//                     <p className="font-medium">
//                       {user.address || "Not provided"}
//                     </p>
//                     {!user.address && (
//                       <Link
//                         to="/profile/add-address"
//                         className="text-xs text-blue-500 hover:underline"
//                       >
//                         Add address
//                       </Link>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <Calendar className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Account Created</p>
//                     <p className="font-medium">{user.joinDate || "Jan 15, 2023"}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
//                     <Lock className="w-5 h-5 text-gray-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Security</p>
//                     <p className="font-medium">Two-factor authentication: {user.twoFactor ? "Enabled" : "Disabled"}</p>
//                     <Link
//                       to="/security"
//                       className="text-xs text-blue-500 hover:underline"
//                     >
//                       {user.twoFactor ? "Manage security" : "Enable 2FA"}
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <Link
//                 to="/profile/edit"
//                 className="mt-6 w-full inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium"
//               >
//                 Edit Profile Information
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6">
//           {/* Account Stats */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="font-medium flex items-center">
//                 <Activity className="w-5 h-5 mr-2 text-gray-700" />
//                 Account Statistics
//               </h3>
//             </div>
//             <div className="p-4">
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Bets</p>
//                     <p className="font-medium">127</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">Win Rate</p>
//                     <p className="font-medium text-green-500">68%</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Deposits</p>
//                     <p className="font-medium">15.2 BTC</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">Total Withdrawals</p>
//                     <p className="font-medium">8.7 BTC</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-gray-500">Current Streak</p>
//                     <p className="font-medium">5 days</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">VIP Level</p>
//                     <p className="font-medium text-purple-500">Level 12</p>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-gray-200">
//                   <Link
//                     to="/stats"
//                     className="text-sm font-medium text-blue-600 hover:underline flex items-center"
//                   >
//                     View full statistics <ChevronRight className="w-4 h-4 ml-1" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Promotional Banner */}
//           <Link
//             to="/promo/first-deposit"
//             className="block bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-sm overflow-hidden text-white"
//           >
//             <div className="p-5">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">🎉 Welcome Bonus!</h3>
//                   <p className="text-sm opacity-90">Get 200% on your first deposit</p>
//                 </div>
//                 <div className="bg-white bg-opacity-20 p-2 rounded-lg">
//                   <Gift className="w-6 h-6" />
//                 </div>
//               </div>
//               <div className="mt-4 flex items-center justify-between text-xs">
//                 <div className="flex items-center">
//                   <Clock className="w-3 h-3 mr-1" /> Limited time offer
//                 </div>
//                 <div className="bg-white text-blue-600 py-1 px-3 rounded-full font-bold">
//                   CLAIM NOW
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {/* Weekly Promo Banner */}
//           <Link
//             to="/promo/weekly-offer"
//             className="block bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg shadow-sm overflow-hidden text-white"
//           >
//             <div className="p-5">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">🔥 Weekly Special</h3>
//                   <p className="text-sm opacity-90">50% reload bonus every Friday</p>
//                 </div>
//                 <div className="bg-white bg-opacity-20 p-2 rounded-lg">
//                   <Zap className="w-6 h-6" />
//                 </div>
//               </div>
//               <div className="mt-4 flex items-center justify-between text-xs">
//                 <div className="flex items-center">
//                   <Clock className="w-3 h-3 mr-1" /> Ends in 2 days
//                 </div>
//                 <div className="bg-white text-purple-600 py-1 px-3 rounded-full font-bold">
//                   LEARN MORE
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* Pop-up Ad (would normally be conditionally rendered) */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
//           <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
//             <div className="flex justify-between items-center">
//               <h3 className="font-bold text-lg">🚀 Exclusive Offer!</h3>
//               <button className="text-white opacity-80 hover:opacity-100">
//                 &times;
//               </button>
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="flex items-start mb-4">
//               <div className="bg-orange-100 p-3 rounded-full mr-4">
//                 <Star className="w-6 h-6 text-orange-500" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg mb-1">First Deposit Bonus</h4>
//                 <p className="text-gray-600">
//                   Get 200% bonus on your first deposit! Minimum deposit 0.1 BTC.
//                   Max bonus 5 BTC.
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-3">
//               <Link
//                 to="/deposit"
//                 className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg font-medium"
//               >
//                 Deposit Now
//               </Link>
//               <Link
//                 to="/promo/terms"
//                 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 px-4 rounded-lg font-medium"
//               >
//                 Terms
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import {
  LogOut,
  Wallet,
  User,
  Trophy,
  Gift,
  Activity,
  TrendingUp,
  Shield,
  Star,
  Coins,
  Clock,
  BarChart2,
  HelpCircle,
  Bell,
  Settings,
  CreditCard,
  ShieldCheck,
  Zap,
  Award,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Gamepad2,
  Dice5,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import WelcomeBonusPopup from "./WelcomeBonus";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [showAd, setShowAd] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    games: false,
    transactions: false,
    rewards: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Promotional offers data
  const offers = [
    {
      id: 1,
      title: "First Deposit Bonus",
      description: "Get 200% bonus on your first deposit up to 5 BTC",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      timeLeft: "2 days left",
      link: "/deposite-page",
      terms:
        "Min. deposit 0.01 BTC. Wagering requirement 30x. Valid for 7 days.",
    },
    {
      id: 2,
      title: "Weekly Reload",
      description: "50% bonus on every deposit this week",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      timeLeft: "3 days left",
      link: "/deposite-page",
      terms: "Available every Friday. Max bonus 2 BTC. 25x wagering.",
    },
    {
      id: 3,
      title: "VIP Special",
      description: "Exclusive 100% cashback for VIP members",
      icon: <Award className="w-5 h-5 text-purple-500" />,
      timeLeft: "VIP only",
      link: "/deposite-page",
      terms: "For VIP Level 5+. Cashback paid in BTC. Max $500 per week.",
    },
  ];

  // Games data
  const games = [
    {
      id: 1,
      name: "Dice Royale",
      category: "Dice",
      popularity: "High",
      icon: <Dice5 className="w-5 h-5 text-red-500" />,
      link: "/casino/slotsGames",
    },
    {
      id: 2,
      name: "Poker Masters",
      category: "Poker",
      popularity: "Medium",
      icon: <Dice5 className="w-5 h-5 text-red-500" />,
      link: "/casino/miniGames",
    },
    {
      id: 3,
      name: "Slot O'Fun",
      category: "Slots",
      popularity: "Very High",
      icon: <Dice5 className="w-5 h-5 text-red-500" />,
      link: "/casino/LiveCasinoGames",
    },
    {
      id: 4,
      name: "Blackjack Pro",
      category: "Card",
      popularity: "High",
      icon: <CreditCard className="w-5 h-5 text-purple-500" />,
      link: "/casino/mascotGames",
    },
  ];

  // Recent transactions
  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "0.5 BTC",
      status: "Completed",
      date: "10 min ago",
      icon: <TrendingUp className="w-4 h-4 text-green-500" />,
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: "0.2 BTC",
      status: "Pending",
      date: "1 hour ago",
      icon: <TrendingUp className="w-4 h-4 text-red-500" />,
    },
    {
      id: 3,
      type: "Bet Won",
      amount: "0.15 BTC",
      status: "Completed",
      date: "3 hours ago",
      icon: <Coins className="w-4 h-4 text-yellow-500" />,
    },
    {
      id: 4,
      type: "Bonus",
      amount: "0.05 BTC",
      status: "Completed",
      date: "Yesterday",
      icon: <Gift className="w-4 h-4 text-blue-500" />,
    },
  ];

  // Loyalty rewards
  const rewards = [
    {
      id: 1,
      name: "Daily Login",
      points: 10,
      claimed: true,
      icon: <Calendar className="w-4 h-4 text-green-500" />,
    },
    {
      id: 2,
      name: "Weekly Streak",
      points: 50,
      claimed: false,
      icon: <Activity className="w-4 h-4 text-blue-500" />,
    },
    {
      id: 3,
      name: "High Roller",
      points: 100,
      claimed: false,
      icon: <Coins className="w-4 h-4 text-yellow-500" />,
    },
    {
      id: 4,
      name: "Referral Bonus",
      points: 25,
      claimed: false,
      icon: <User className="w-4 h-4 text-purple-500" />,
    },
  ];

  if (!user)
    return (
      <p className="text-center mt-20 text-lg">
        Please log in to view your dashboard.
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-6 space-y-6 lg:px-10  px-2 md:px-6 py-4  lg:mt-4 md:mt-30  sm:mt-40 mt-30 ">
      {/* Header */}
      <WelcomeBonusPopup />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">{user.name}</h1>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600 flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1 text-blue-500" />
                Verified Account
              </p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                VIP Level 1
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Link
              to="/notifications"
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </Link>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <Link to="/settings" className="p-2 rounded-full hover:bg-gray-100">
            <Settings className="w-5 h-5 text-gray-600" />
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Wallet Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-gray-700" />
                Wallet Balance
              </h3>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm text-gray-500">Available Balance</p>
                  <h2 className="text-2xl font-bold">200 BTC</h2>
                  <p className="text-xs text-gray-500 mt-1">≈ $5,420,000</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Today's Change</p>
                  <p className="text-green-500 font-medium flex items-center">
                    +5.3% <TrendingUp className="w-4 h-4 ml-1" />
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Link
                  to="/deposite-page"
                  className="bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-3 rounded-lg text-sm font-medium"
                >
                  Deposit
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-3 rounded-lg text-sm font-medium border border-gray-300"
                >
                  Withdraw
                </Link>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Deposit Limit: $10,000/day</span>
                <span>Withdrawal Fee: 0.0005 BTC</span>
              </div>
            </div>
          </div>

          {/* Games Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div
              className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("games")}
            >
              <h3 className="font-medium flex items-center">
                <Gamepad2 className="w-5 h-5 mr-2 text-gray-700" />
                Popular Games
              </h3>
              {expandedSections.games ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {expandedSections.games && (
              <div className="p-4 space-y-3">
                {games.map((game) => (
                  <Link
                    to={game.link}
                    key={game.id}
                    className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-100 p-2 rounded-lg mr-3">
                        {game.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {game.name}
                        </h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {game.category}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              game.popularity === "Very High"
                                ? "bg-green-100 text-green-800"
                                : game.popularity === "High"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {game.popularity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/casino/originals"
                  className="mt-3 w-full inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium"
                >
                  View All Games
                </Link>
              </div>
            )}
          </div>

          {/* Promotional Offers */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium flex items-center">
                <Gift className="w-5 h-5 mr-2 text-gray-700" />
                Active Offers
              </h3>
            </div>
            <div className="p-4 space-y-4">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      {offer.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {offer.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {offer.description}
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        <p>{offer.terms}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          {offer.timeLeft}
                        </span>
                        <Link
                          to={offer.link}
                          className="text-xs font-medium text-blue-600 hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* User Profile Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-700" />
                Profile Information
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Full Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="font-medium">{user.email}</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Verified
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone Number</p>
                    <p className="font-medium">
                      {user.phone || "Not provided"}
                    </p>
                    {!user.phone && (
                      <Link
                        to="/profile/verify-phone"
                        className="text-xs text-blue-500 hover:underline"
                      >
                        Add phone number
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Address</p>
                    <p className="font-medium">
                      {user.address || "Not provided"}
                    </p>
                    {!user.address && (
                      <Link
                        to="/profile/add-address"
                        className="text-xs text-blue-500 hover:underline"
                      >
                        Add address
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Account Created</p>
                    <p className="font-medium">
                      {user.joinDate || "Jan 15, 2023"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Lock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Security</p>
                    <p className="font-medium">
                      Two-factor authentication:{" "}
                      {user.twoFactor ? "Enabled" : "Disabled"}
                    </p>
                    <Link
                      to="/security"
                      className="text-xs text-blue-500 hover:underline"
                    >
                      {user.twoFactor ? "Manage security" : "Enable 2FA"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div
              className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("transactions")}
            >
              <h3 className="font-medium flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-gray-700" />
                Recent Transactions
              </h3>
              {expandedSections.transactions ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {expandedSections.transactions && (
              <div className="p-4">
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="mr-3">{tx.icon}</div>
                        <div>
                          <p className="font-medium">{tx.type}</p>
                          <p className="text-xs text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-medium ${
                            tx.type.includes("Withdrawal")
                              ? "text-red-500"
                              : tx.type.includes("Bet Won") ||
                                tx.type.includes("Bonus")
                              ? "text-green-500"
                              : "text-gray-800"
                          }`}
                        >
                          {tx.amount}
                        </p>
                        <p
                          className={`text-xs ${
                            tx.status === "Completed"
                              ? "text-green-500"
                              : "text-yellow-500"
                          }`}
                        >
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/deposite-page"
                  className="mt-4 w-full inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium"
                >
                  View All Transactions
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Account Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium flex items-center">
                <Activity className="w-5 h-5 mr-2 text-gray-700" />
                Account Statistics
              </h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total Bets</p>
                    <p className="font-medium">127</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Win Rate</p>
                    <p className="font-medium text-green-500">68%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total Deposits</p>
                    <p className="font-medium">15.2 BTC</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total Withdrawals</p>
                    <p className="font-medium">8.7 BTC</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Current Streak</p>
                    <p className="font-medium">5 days</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">VIP Level</p>
                    <p className="font-medium text-purple-500">Level 12</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total Winnings</p>
                    <p className="font-medium text-green-500">42.5 BTC</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Loyalty Points</p>
                    <p className="font-medium text-yellow-500">1,250</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/sports/liveBetting"
                    className="text-sm font-medium text-blue-600 hover:underline flex items-center"
                  >
                    View full statistics{" "}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div
              className="p-4 border-b border-gray-200 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("rewards")}
            >
              <h3 className="font-medium flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-gray-700" />
                Loyalty Rewards
              </h3>
              {expandedSections.rewards ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {expandedSections.rewards && (
              <div className="p-4">
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>650/1000 points</span>
                    <span>Next level: Gold</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {rewards.map((reward) => (
                    <div
                      key={reward.id}
                      className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="mr-3">{reward.icon}</div>
                        <div>
                          <p className="font-medium">{reward.name}</p>
                          <p className="text-xs text-gray-500">
                            {reward.points} points
                          </p>
                        </div>
                      </div>
                      <button
                        className={`text-xs py-1 px-3 rounded-full ${
                          reward.claimed
                            ? "bg-gray-100 text-gray-800 cursor-default"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                        }`}
                        disabled={reward.claimed}
                      >
                        {reward.claimed ? "Claimed" : "Claim"}
                      </button>
                    </div>
                  ))}
                </div>
                <Link
                  to="/deposite-page"
                  className="mt-4 w-full inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium"
                >
                  View All Rewards
                </Link>
              </div>
            )}
          </div>

          {/* Promotional Banner */}
          <Link
            to="/deposite-page"
            className="block bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-sm overflow-hidden text-white"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">🎉 Welcome Bonus!</h3>
                  <p className="text-sm opacity-90">
                    Get 200% on your first deposit
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Gift className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Limited time offer
                </div>
                <Link to = "/deposite-page">
                  {" "}
                  <div className="bg-white text-blue-600 py-1 px-3 rounded-full font-bold">
                    CLAIM NOW
                  </div>
                </Link>
              </div>
            </div>
          </Link>

          {/* Weekly Promo Banner */}
          <Link
            to="/deposite-page"
            className="block bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg shadow-sm overflow-hidden text-white"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg mb-1">🔥 Weekly Special</h3>
                  <p className="text-sm opacity-90">
                    50% reload bonus every Friday
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Ends in 2 days
                </div>
               <Link to = "/deposite-page">
                <div className="bg-white text-purple-600 py-1 px-3 rounded-full font-bold">
                  LEARN MORE
                </div>
              </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Pop-up Ad */}
      {/* {showAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">🚀 Exclusive Offer!</h3>
                <button 
                  className="text-white opacity-80 hover:opacity-100"
                  onClick={() => setShowAd(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Star className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">First Deposit Bonus</h4>
                  <p className="text-gray-600">
                    Get 200% bonus on your first deposit! Minimum deposit 0.1 BTC.
                    Max bonus 5 BTC. T&C apply.
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-500 mt-2 space-y-1">
                    <li>Minimum deposit: 0.1 BTC</li>
                    <li>30x wagering requirement</li>
                    <li>Valid for 7 days after activation</li>
                    <li>Max bonus amount: 5 BTC</li>
                  </ul>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  to="/deposit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg font-medium"
                >
                  Deposit Now
                </Link>
                <Link
                  to="/promo/terms"
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center py-2 px-4 rounded-lg font-medium"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Footer />
    </div>
  );
};

export default Dashboard;
