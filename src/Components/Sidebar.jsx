// // import React, { useState } from "react";
// // import {
// //   Menu,
// //   X,
// //   Dice1,
// //   Zap,
// //   Trophy,
// //   Users,
// //   Gamepad2,
// //   Target,
// //   Sparkles,
// //   Gift,
// //   User,
// //   ChevronRight,
// // } from "lucide-react";
// // import { Link } from "react-router-dom"; // ✅ Added

// // const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const casinoItems = [
// //     { name: "Originals", icon: Dice1, path: "/casino/originals" },
// //     { name: "Crash Games", icon: Zap, path: "/casino/CrashGames" },
// //     { name: "Live Casino", icon: Users, path: "/casino/LiveCasinoGames" },
// //     { name: "Slots", icon: Target, path: "/casino/slotsGames" },
// //     { name: "Mini Games", icon: Gamepad2, path: "/casino/miniGames" },
// //     { name: "Spribe Games", icon: Sparkles, path: "/casino/spribeGames" },
// //     { name: "Mascot Games", icon: Gift, path: "/casino/mascotGames" },
// //   ];

// //   const sportsItems = [
// //     { name: "Live Betting", icon: Zap, path: "/sports/liveBetting" },

// //     { name: "Basketball", icon: Target, path: "/sports/basketball" },
// //     { name: "Tennis", icon: Gamepad2, path: "/sports/tennis" },
// //   ];

// //   const toggleSidebar = () => {
// //     setIsSidebarCollapsed(!isSidebarCollapsed);
// //   };

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   const Logo = ({ collapsed = false }) => (
// //     <Link to="/" className="no-underline">
// //       <div className="flex items-center space-x-3 cursor-pointer">
// //         <div className="w-10 h-10 bg-[#9810FA] rounded-xl flex items-center justify-center shadow-lg">
// //           <Dice1 className="w-6 h-6 text-white" />
// //         </div>
// //         {!collapsed && (
// //           <div className="flex flex-col">
// //             <div className="flex items-baseline space-x-0">
// //               <span className="text-xl font-bold text-gray-800 tracking-tight">
// //                 Stack
// //               </span>

// //               <span className="text-lg font-normal text-[#9810FA] ml-0.5">
// //                 365
// //               </span>
// //             </div>
// //             <span className="text-xs text-gray-500 font-medium tracking-wide">
// //               Casino & Sports
// //             </span>
// //           </div>
// //         )}
// //       </div>
// //     </Link>
// //   );

// //   const NavSection = ({ title, items, collapsed = false }) => (
// //     <div className="mb-6">
// //       {!collapsed && (
// //         <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
// //           {title}
// //         </h3>
// //       )}
// //       <div className="space-y-1">
// //         {items.map((item) => (
// //           <Link
// //             key={item.name}
// //             to={item.path}
// //             className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
// //               collapsed ? "justify-center" : ""
// //             }`}
// //             onClick={() => setIsMobileMenuOpen(false)}
// //           >
// //             <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
// //             {!collapsed && (
// //               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
// //                 {item.name}
// //               </span>
// //             )}
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   const DesktopTopbar = () => (
// //     <div
// //       className={`hidden lg:block fixed top-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
// //         isSidebarCollapsed ? "left-16" : "left-64"
// //       }`}
// //     >
// //       <div className="flex items-center justify-end px-6 py-3 h-16">
// //         <div className="flex items-center space-x-4">
// //           <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium">
// //             Login
// //           </button>
// //           <button className="px-4 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
// //             Sign Up
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const MobileTopbar = () => (
// //     <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
// //       <div className="flex items-center justify-between px-4 py-3">
// //         <Logo />
// //         <div className="flex items-center space-x-2">
// //           <div className="hidden sm:flex items-center space-x-3">
// //             <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm">
// //               Login
// //             </button>
// //             <button className="px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm">
// //               Sign Up
// //             </button>
// //           </div>
// //           <button
// //             onClick={toggleMobileMenu}
// //             className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //           >
// //             {isMobileMenuOpen ? (
// //               <X className="w-6 h-6" />
// //             ) : (
// //               <Menu className="w-6 h-6" />
// //             )}
// //           </button>
// //         </div>
// //       </div>
// //       <div className="sm:hidden border-t border-gray-100 px-4 py-2">
// //         <div className="flex items-center justify-center space-x-3">
// //           <button className="flex-1 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm text-center">
// //             Login
// //           </button>
// //           <button className="flex-1 px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm text-center">
// //             Sign Up
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const DesktopSidebar = () => (
// //     <div
// //       className={`hidden lg:block fixed top-0 left-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${
// //         isSidebarCollapsed ? "w-16" : "w-64"
// //       }`}
// //     >
// //       <div className="flex flex-col h-full">
// //         <div
// //           className={`flex items-center p-4 border-b border-gray-200 ${
// //             isSidebarCollapsed ? "justify-center" : "justify-between"
// //           }`}
// //         >
// //           <Logo collapsed={isSidebarCollapsed} />
// //           {!isSidebarCollapsed && (
// //             <button
// //               onClick={toggleSidebar}
// //               className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //             >
// //               <Menu className="w-5 h-5" />
// //             </button>
// //           )}
// //           {isSidebarCollapsed && (
// //             <button
// //               onClick={toggleSidebar}
// //               className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //             >
// //               <ChevronRight className="w-4 h-4" />
// //             </button>
// //           )}
// //         </div>

// //         <div className="flex-1 overflow-y-auto p-4 space-y-6">
// //           <NavSection
// //             title="Casino"
// //             items={casinoItems}
// //             collapsed={isSidebarCollapsed}
// //           />
// //           <NavSection
// //             title="Sports"
// //             items={sportsItems}
// //             collapsed={isSidebarCollapsed}
// //           />
// //         </div>

// //         <div className="border-t border-gray-200 p-4">
// //           {!isSidebarCollapsed && (
// //             <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
// //               General
// //             </h3>
// //           )}
// //           <Link
// //             to="/account"
// //             className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
// //               isSidebarCollapsed ? "justify-center" : ""
// //             }`}
// //           >
// //             <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
// //             {!isSidebarCollapsed && (
// //               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
// //                 Account
// //               </span>
// //             )}
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const MobileSidebar = () => (
// //     <>
// //       {isMobileMenuOpen && (
// //         <div
// //           className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
// //           onClick={toggleMobileMenu}
// //         />
// //       )}

// //       <div
// //         className={`lg:hidden fixed left-0 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out w-64 ${
// //           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
// //         } ${"top-16 sm:top-16 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4rem)]"}`}
// //       >
// //         <div className="flex flex-col h-full">
// //           <div className="flex-1 overflow-y-auto p-4 space-y-6">
// //             <NavSection title="Casino" items={casinoItems} collapsed={false} />
// //             <NavSection title="Sports" items={sportsItems} collapsed={false} />
// //           </div>

// //           <div className="border-t border-gray-200 p-4">
// //             <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
// //               General
// //             </h3>
// //             <Link
// //               to="/account"
// //               className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm"
// //               onClick={() => setIsMobileMenuOpen(false)}
// //             >
// //               <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
// //               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
// //                 Account
// //               </span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );

// //   return (
// //     <div className="bg-gray-50">
// //       <MobileTopbar />
// //       <DesktopTopbar />
// //       <DesktopSidebar />
// //       <MobileSidebar />
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   Dice1,
//   Zap,
//   Trophy,
//   Users,
//   Gamepad2,
//   Target,
//   Sparkles,
//   Gift,
//   User,
//   ChevronRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../Hooks/useAuth"; // ✅ Import auth

// const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user } = useAuth(); // ✅ Get user

//   const casinoItems = [
//     { name: "Originals", icon: Dice1, path: "/casino/originals" },
//     { name: "Crash Games", icon: Zap, path: "/casino/CrashGames" },
//     { name: "Live Casino", icon: Users, path: "/casino/LiveCasinoGames" },
//     { name: "Slots", icon: Target, path: "/casino/slotsGames" },
//     { name: "Mini Games", icon: Gamepad2, path: "/casino/miniGames" },
//     { name: "Spribe Games", icon: Sparkles, path: "/casino/spribeGames" },
//     { name: "Mascot Games", icon: Gift, path: "/casino/mascotGames" },
//   ];

//   const sportsItems = [
//     { name: "Live Betting", icon: Zap, path: "/sports/liveBetting" },
//     { name: "Basketball", icon: Target, path: "/sports/basketball" },
//     { name: "Tennis", icon: Gamepad2, path: "/sports/tennis" },
//   ];

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const Logo = ({ collapsed = false }) => (
//     <Link to="/" className="no-underline">
//       <div className="flex items-center space-x-3 cursor-pointer">
//         <div className="w-10 h-10 bg-[#9810FA] rounded-xl flex items-center justify-center shadow-lg">
//           <Dice1 className="w-6 h-6 text-white" />
//         </div>
//         {!collapsed && (
//           <div className="flex flex-col">
//             <div className="flex items-baseline space-x-0">
//               <span className="text-xl font-bold text-gray-800 tracking-tight">
//                 Stack
//               </span>
//               <span className="text-lg font-normal text-[#9810FA] ml-0.5">
//                 365
//               </span>
//             </div>
//             <span className="text-xs text-gray-500 font-medium tracking-wide">
//               Casino & Sports
//             </span>
//           </div>
//         )}
//       </div>
//     </Link>
//   );

//   const NavSection = ({ title, items, collapsed = false }) => (
//     <div className="mb-6">
//       {!collapsed && (
//         <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
//           {title}
//         </h3>
//       )}
//       <div className="space-y-1">
//         {items.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
//               collapsed ? "justify-center" : ""
//             }`}
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
//             {!collapsed && (
//               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
//                 {item.name}
//               </span>
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );

//   const DesktopTopbar = () => (
//     <div
//       className={`hidden lg:block fixed top-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
//         isSidebarCollapsed ? "left-16" : "left-64"
//       }`}
//     >
//       <div className="flex items-center justify-end px-6 py-3 h-16">
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <div className="flex items-center space-x-2">
//               <img
//                 src={user.avatar}
//                 alt={user.name}
//                 className="w-8 h-8 rounded-full object-cover"
//               />
//               <span className="text-gray-800 font-medium">{user.name}</span>
//             </div>
//           ) : (
//             <>
//               <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium">
//                 Login
//               </button>
//               <button className="px-4 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
//                 Sign Up
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const MobileTopbar = () => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const handleLogout = () => {
//       // ✅ You can update this according to your logout logic
//       console.log("User logged out");
//       setShowDropdown(false);
//     };

//     return (
//       <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
//         <div className="flex items-center justify-between px-4 py-3">
//           <Logo />
//           <div className="flex items-center space-x-3 relative">
//             {user ? (
//               <div className="relative">
//                 <button
//                   className="flex items-center space-x-2"
//                   onClick={() => setShowDropdown(!showDropdown)}
//                 >
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <span className="text-gray-800 font-medium text-sm hidden xs:inline">
//                     {user.name}
//                   </span>
//                 </button>

//                 {/* Dropdown */}
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-50">
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm">
//                   Login
//                 </button>
//                 <button className="px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm">
//                   Sign Up
//                 </button>
//               </>
//             )}

//             <button
//               onClick={toggleMobileMenu}
//               className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Buttons for very small screens (Login/Signup only if not logged in) */}
//         {!user && (
//           <div className="sm:hidden border-t border-gray-100 px-4 py-2">
//             <div className="flex items-center justify-center space-x-3">
//               <button className="flex-1 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm text-center">
//                 Login
//               </button>
//               <button className="flex-1 px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm text-center">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const DesktopSidebar = () => (
//     <div
//       className={`hidden lg:block fixed top-0 left-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${
//         isSidebarCollapsed ? "w-16" : "w-64"
//       }`}
//     >
//       <div className="flex flex-col h-full">
//         <div
//           className={`flex items-center p-4 border-b border-gray-200 ${
//             isSidebarCollapsed ? "justify-center" : "justify-between"
//           }`}
//         >
//           <Logo collapsed={isSidebarCollapsed} />
//           {!isSidebarCollapsed && (
//             <button
//               onClick={toggleSidebar}
//               className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               <Menu className="w-5 h-5" />
//             </button>
//           )}
//           {isSidebarCollapsed && (
//             <button
//               onClick={toggleSidebar}
//               className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           )}
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 space-y-6">
//           <NavSection
//             title="Casino"
//             items={casinoItems}
//             collapsed={isSidebarCollapsed}
//           />
//           <NavSection
//             title="Sports"
//             items={sportsItems}
//             collapsed={isSidebarCollapsed}
//           />
//         </div>

//         <div className="border-t border-gray-200 p-4">
//           {!isSidebarCollapsed && (
//             <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
//               General
//             </h3>
//           )}
//           <Link
//             to="/account"
//             className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
//               isSidebarCollapsed ? "justify-center" : ""
//             }`}
//           >
//             <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
//             {!isSidebarCollapsed && (
//               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
//                 Account
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   const MobileSidebar = () => (
//     <>
//       {isMobileMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
//           onClick={toggleMobileMenu}
//         />
//       )}

//       <div
//         className={`lg:hidden fixed left-0 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out w-64 ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } top-16 sm:top-16 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4rem)]`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex-1 overflow-y-auto p-4 space-y-6">
//             <NavSection title="Casino" items={casinoItems} collapsed={false} />
//             <NavSection title="Sports" items={sportsItems} collapsed={false} />
//           </div>

//           <div className="border-t border-gray-200 p-4">
//             <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
//               General
//             </h3>
//             <Link
//               to="/account"
//               className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
//               <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
//                 Account
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <div className="bg-gray-50">
//       <MobileTopbar />
//       <DesktopTopbar />
//       <DesktopSidebar />
//       <MobileSidebar />
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import React, { useState } from "react";
import {
  Menu,
  X,
  Dice1,
  Zap,
  Trophy,
  Users,
  Gamepad2,
  Target,
  Sparkles,
  Gift,
  User,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const casinoItems = [
    { name: "Originals", icon: Dice1, path: "/casino/originals" },
    { name: "Crash Games", icon: Zap, path: "/casino/CrashGames" },
    { name: "Live Casino", icon: Users, path: "/casino/LiveCasinoGames" },
    { name: "Slots", icon: Target, path: "/casino/slotsGames" },
    { name: "Mini Games", icon: Gamepad2, path: "/casino/miniGames" },
    { name: "Spribe Games", icon: Sparkles, path: "/casino/spribeGames" },
    { name: "Mascot Games", icon: Gift, path: "/casino/mascotGames" },
  ];

  const sportsItems = [
    { name: "Live Betting", icon: Zap, path: "/sports/liveBetting" },
    { name: "Basketball", icon: Target, path: "/sports/basketball" },
    { name: "Tennis", icon: Gamepad2, path: "/sports/tennis" },
  ];

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  const Logo = ({ collapsed = false }) => (
    <Link to="/" className="no-underline">
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-10 h-10 bg-[#9810FA] rounded-xl flex items-center justify-center shadow-lg">
          <Dice1 className="w-6 h-6 text-white" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-0">
              <span className="text-xl font-bold text-gray-800 tracking-tight">
                Stack
              </span>
              <span className="text-lg font-normal text-[#9810FA] ml-0.5">
                365
              </span>
            </div>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              Casino & Sports
            </span>
          </div>
        )}
      </div>
    </Link>
  );

  const NavSection = ({ title, items, collapsed = false }) => (
    <div className="mb-6">
      {!collapsed && (
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
              collapsed ? "justify-center" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            {!collapsed && (
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );

  const DesktopTopbar = () => (
    <div
      className={`hidden lg:block fixed top-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
        isSidebarCollapsed ? "left-16" : "left-64"
      }`}
    >
      <div className="flex items-center justify-end px-6 py-3 h-16 relative">
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2 relative">
              <button
                onClick={() => navigate("/account")}
                className="flex items-center space-x-2"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-800 font-medium text-sm max-w-[120px] truncate">
                  {user.name}
                </span>
              </button>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-12 w-40 bg-white border border-gray-200 rounded shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                Login
              </button>
              <button className="px-4 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 font-medium">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // const MobileTopbar = () => (
  //   <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
  //     <div className="flex items-center justify-between px-4 py-3">
  //       <Logo />
  //       <div className="flex items-center space-x-2 relative">
  //         {user ? (
  //           <div className="flex items-center space-x-2">
  //             <button
  //               onClick={() => navigate("/account")}
  //               className="flex items-center space-x-2"
  //             >
  //               <img
  //                 src={user.avatar}
  //                 alt={user.name}
  //                 className="w-8 h-8 rounded-full object-cover"
  //               />
  //               <span className="text-gray-800 font-medium text-sm max-w-[80px] truncate">
  //                 {user.name}
  //               </span>
  //             </button>
  //             <div className="relative">
  //               <button
  //                 onClick={() => setShowDropdown((prev) => !prev)}
  //                 className="p-1 rounded hover:bg-gray-100"
  //               >
  //                 <ChevronDown className="w-4 h-4 text-gray-700" />
  //               </button>
  //               {showDropdown && (
  //                 <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
  //                   <button
  //                     onClick={handleLogout}
  //                     className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
  //                   >
  //                     Logout
  //                   </button>
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         ) : (
  //           <>
  //             <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
  //               Login
  //             </button>
  //             <button className="px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 text-sm">
  //               Sign Up
  //             </button>
  //           </>
  //         )}
  //         <button
  //           onClick={toggleMobileMenu}
  //           className="p-2 rounded-lg hover:bg-gray-100 transition"
  //         >
  //           {isMobileMenuOpen ? (
  //             <X className="w-6 h-6" />
  //           ) : (
  //             <Menu className="w-6 h-6" />
  //           )}
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  const MobileTopbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); // ensure useAuth hook is correctly used
    const [showDropdown, setShowDropdown] = useState(false);

    return (
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex flex-col px-4 py-3 space-y-3">
          {/* Logo Row */}
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Auth/User Row */}
          <div className="flex items-center justify-between flex-wrap">
            {user ? (
              <div className="flex items-center space-x-2 w-full">
                <button
                  onClick={() => navigate("/account")}
                  className="flex items-center space-x-2 flex-grow"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm truncate max-w-[100px]">
                    {user.name}
                  </span>
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <ChevronDown className="w-4 h-4 text-gray-700" />
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-50">
                      <button
                        onClick={logout}
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between space-x-3 w-full">
                <button className="flex-1 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Login
                </button>
                <button className="flex-1 px-3 py-2 text-white bg-[#9810FA] rounded-lg hover:bg-indigo-700 text-sm">
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const DesktopSidebar = () => (
    <div
      className={`hidden lg:block fixed top-0 left-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div
          className={`flex items-center p-4 border-b border-gray-200 ${
            isSidebarCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <Logo collapsed={isSidebarCollapsed} />
          {!isSidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          {isSidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <NavSection
            title="Casino"
            items={casinoItems}
            collapsed={isSidebarCollapsed}
          />
          <NavSection
            title="Sports"
            items={sportsItems}
            collapsed={isSidebarCollapsed}
          />
        </div>

        <div className="border-t border-gray-200 p-4">
          {!isSidebarCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              General
            </h3>
          )}
          <Link
            to="/account"
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
              isSidebarCollapsed ? "justify-center" : ""
            }`}
          >
            <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            {!isSidebarCollapsed && (
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                Account
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );

  const MobileSidebar = () => (
    <>
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        className={`lg:hidden fixed left-0 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out w-64 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } top-16 sm:top-16 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4rem)]`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <NavSection title="Casino" items={casinoItems} collapsed={false} />
            <NavSection title="Sports" items={sportsItems} collapsed={false} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              General
            </h3>
            <Link
              to="/account"
              className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                Account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  // DesktopSidebar, MobileSidebar unchanged — not shown here to stay concise

  return (
    <div className="bg-gray-50">
      <MobileTopbar />
      <DesktopTopbar />
      <DesktopSidebar />
      <MobileSidebar />
      {/* Include DesktopSidebar and MobileSidebar components here */}
    </div>
  );
};

export default Sidebar;
