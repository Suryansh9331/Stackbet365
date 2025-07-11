// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Sidebar from "./Components/Sidebar";
// import HomePage from "./Pages/Home/Home"; // your new homepage components
// import Original from "./Pages/Casino/Original/Original";
// import Crash from "./Pages/Casino/CrashGames/Crash";
// import LiveCasino from "./Pages/Casino/LiveCasino/LIveCasino";
// import Slots from "./Pages/Casino/Slots/Slots";
// import Mini from "./Pages/Casino/Mini/Mini";
// import Spribe from "./Pages/Casino/Spribe/Spribe";
// import Mascot from "./Pages/Casino/Mascot/Mascot";
// import ScrollToTop from "./Components/Scrolltotop";
// import LiveBetting from "./Pages/Sports/LiveBetting/LiveBatting";
// import Basketball from "./Pages/Sports/Basketball/BasketballMatches";
// import Tennis from "./Pages/Sports/Football.jsx/Tennis";
// import TermsAndConditions from "./Pages/Terms/Terms";
// import PrivacyPolicy from "./Pages/PrivacyPolicy/Privacy";
// import FAQ from "./Pages/FAQ/Questions";
// import AboutUs from "./Pages/About/About";

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   return (
//     <Router>
//       <ScrollToTop/>
//       <Sidebar
//         isSidebarCollapsed={isSidebarCollapsed}
//         setIsSidebarCollapsed={setIsSidebarCollapsed}
//       />

//       {/* Main content that shifts based on sidebar state */}
//       <div
//         className={`transition-all duration-300 ${
//           isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
//         } mt-16 `}
//       >
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/casino/originals" element={<Original />} />
//           <Route path="/casino/CrashGames" element={<Crash />} />
//           <Route path="/casino/LiveCasinoGames" element={<LiveCasino />} />
//           <Route path="/casino/slotsGames" element={<Slots />} />
//           <Route path="/casino/miniGames" element={<Mini/>} />
//           <Route path="/casino/spribeGames" element={<Spribe />} />
//           <Route path="/casino/mascotGames" element={<Mascot />} />

//           <Route path="/sports/liveBetting" element={<LiveBetting/>} />
//           <Route path="/sports/basketball" element={<Basketball/>} />
//           <Route path="/sports/tennis" element={<Tennis/>} />
//           {/* Add other routes here */}
//           <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
//           <Route path="/Privacy-policy" element={<PrivacyPolicy/>} />
//           <Route path="/frequently-asked-Question" element={<FAQ/>} />
//           <Route path="/About-us" element={<AboutUs/>} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/Home/Home";
import Original from "./Pages/Casino/Original/Original";
import Crash from "./Pages/Casino/CrashGames/Crash";
import LiveCasino from "./Pages/Casino/LiveCasino/LIveCasino";
import Slots from "./Pages/Casino/Slots/Slots";
import Mini from "./Pages/Casino/Mini/Mini";
import Spribe from "./Pages/Casino/Spribe/Spribe";
import Mascot from "./Pages/Casino/Mascot/Mascot";
import ScrollToTop from "./Components/Scrolltotop";
import LiveBetting from "./Pages/Sports/LiveBetting/LiveBatting";
import Basketball from "./Pages/Sports/Basketball/BasketballMatches";
import Tennis from "./Pages/Sports/Football.jsx/Tennis";
import TermsAndConditions from "./Pages/Terms/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy/Privacy";
import FAQ from "./Pages/FAQ/Questions";
import AboutUs from "./Pages/About/About";

import { AuthProvider } from "./Context/AuthContext";
import { useAuth } from "./Hooks/useAuth"; //Hook error resolved
import ProtectedRoute from "./Components/ProtectedRoutes";
import AuthModal from "./Components/AuthModel";
import Dashboard from "./Pages/Dashboard/UserDashboard";
import DepositOfferPopup from "./Components/2xBonus";

function AppRoutes() {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  const protectedRoutes = [
    "/casino/originals",
    "/casino/CrashGames",
    "/casino/LiveCasinoGames",
    "/casino/slotsGames",
    "/casino/miniGames",
    "/casino/spribeGames",
    "/casino/mascotGames",
    "/sports/liveBetting",
    "/sports/basketball",
    "/sports/tennis",
  ];

  const isProtected = protectedRoutes.includes(location.pathname);

  if (isProtected && !user) {
    setTimeout(() => setShowAuthModal(true), 0);
  }

  return (
    <>
    <DepositOfferPopup/>
      <ScrollToTop />
     <Sidebar/>

      <div
        className={`transition-all duration-300 ${
          false ? "lg:ml-16" : "lg:ml-64"
        } mt-16`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/casino/originals"
            element={
              <ProtectedRoute>
                <Original />
              </ProtectedRoute>
            }
          />
          <Route path="/casino/CrashGames" element={<ProtectedRoute><Crash /></ProtectedRoute>} />
          <Route path="/casino/LiveCasinoGames" element={<ProtectedRoute><LiveCasino /></ProtectedRoute>} />
          <Route path="/casino/slotsGames" element={<ProtectedRoute><Slots /></ProtectedRoute>} />
          <Route path="/casino/miniGames" element={<ProtectedRoute><Mini /></ProtectedRoute>} />
          <Route path="/casino/spribeGames" element={<ProtectedRoute><Spribe /></ProtectedRoute>} />
          <Route path="/casino/mascotGames" element={<ProtectedRoute><Mascot /></ProtectedRoute>} />
          <Route path="/sports/liveBetting" element={<ProtectedRoute><LiveBetting /></ProtectedRoute>} />
          <Route path="/sports/basketball" element={<ProtectedRoute><Basketball /></ProtectedRoute>} />
          <Route path="/sports/tennis" element={<ProtectedRoute><Tennis /></ProtectedRoute>} />
         
          <Route path="/user-dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/frequently-asked-Question" element={<FAQ />} />
          <Route path="/About-us" element={<AboutUs />} />
        </Routes>
      </div>

      <AuthModal isOpen={showAuthModal} closeModal={() => setShowAuthModal(false)} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
