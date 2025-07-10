
import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isSidebarCollapsed, setIsSidebarCollapsed }) => {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const casinoItems = [
    { name: 'Originals', icon: Dice1, path: '/casino/originals' },
    { name: 'Crash Games', icon: Zap, path: '/casino/crash' },
    { name: 'Live Casino', icon: Users, path: '/casino/live' },
    { name: 'Slots', icon: Target, path: '/casino/slots' },
    { name: 'Mini Games', icon: Gamepad2, path: '/casino/mini' },
    { name: 'Spribe Games', icon: Sparkles, path: '/casino/spribe' },
    { name: 'Mascot Games', icon: Gift, path: '/casino/mascot' },
  ];

  const sportsItems = [
    { name: 'Live Betting', icon: Zap, path: '/sports/live' },
    { name: 'Football', icon: Trophy, path: '/sports/football' },
    { name: 'Basketball', icon: Target, path: '/sports/basketball' },
    { name: 'Tennis', icon: Gamepad2, path: '/sports/tennis' },
    { name: 'Cricket', icon: Sparkles, path: '/sports/cricket' },
  ];

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Logo = ({ collapsed = false }) => (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
        <Dice1 className="w-6 h-6 text-white" />
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-0">
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              Stack
            </span>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              Bet
            </span>
            <span className="text-lg font-light text-gray-600 ml-0.5">
              365
            </span>
          </div>
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            Casino & Sports
          </span>
        </div>
      )}
    </div>
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
          <a
            key={item.name}
            href={item.path}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
              collapsed ? 'justify-center' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <item.icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            {!collapsed && (
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                {item.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );

  // Desktop Topbar Component
  const DesktopTopbar = () => (
    <div className={`hidden lg:block fixed top-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300 ${
      isSidebarCollapsed ? 'left-16' : 'left-64'
    }`}>
      <div className="flex items-center justify-end px-6 py-3 h-16">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile Topbar Component
  const MobileTopbar = () => (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      {/* Main topbar row */}
      <div className="flex items-center justify-between px-4 py-3">
        <Logo />
        <div className="flex items-center space-x-2">
          {/* Show login/signup buttons on larger mobile screens (sm and above) */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm">
              Login
            </button>
            <button className="px-3 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm">
              Sign Up
            </button>
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Secondary row for very small screens (below sm) - shows login/signup buttons */}
      <div className="sm:hidden border-t border-gray-100 px-4 py-2">
        <div className="flex items-center justify-center space-x-3">
          <button className="flex-1 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium text-sm text-center">
            Login
          </button>
          <button className="flex-1 px-3 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm text-center">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop Sidebar Component
  const DesktopSidebar = () => (
    <div className={`hidden lg:block fixed top-0 left-0 h-screen bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${
      isSidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className={`flex items-center p-4 border-b border-gray-200 ${
          isSidebarCollapsed ? 'justify-center' : 'justify-between'
        }`}>
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

        {/* Navigation */}
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

        {/* Account Section */}
        <div className="border-t border-gray-200 p-4">
          {!isSidebarCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              General
            </h3>
          )}
          <a
            href="/account"
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm ${
              isSidebarCollapsed ? 'justify-center' : ''
            }`}
          >
            <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
            {!isSidebarCollapsed && (
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                Account
              </span>
            )}
          </a>
        </div>
      </div>
    </div>
  );

  // Mobile Sidebar Component
  const MobileSidebar = () => (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed left-0 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out w-64 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } ${'top-16 sm:top-16 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4rem)]'}`}>
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <NavSection 
              title="Casino" 
              items={casinoItems} 
              collapsed={false}
            />
            <NavSection 
              title="Sports" 
              items={sportsItems} 
              collapsed={false}
            />
          </div>

          {/* Account Section */}
          <div className="border-t border-gray-200 p-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              General
            </h3>
            <a
              href="/account"
              className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-200 group border border-transparent hover:border-purple-100 hover:shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
                Account
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Topbar */}
      <MobileTopbar />

      {/* Desktop Topbar */}
      <DesktopTopbar />

      {/* Desktop Sidebar */}
      <DesktopSidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        // Desktop margins
        isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      } lg:mt-16 mt-16 sm:mt-16`}>
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Main Content Area
            </h1>
            <p className="text-gray-600 mb-4">
              This is the main content area that adjusts based on the sidebar state.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Card {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Sample content for demonstration purposes.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;