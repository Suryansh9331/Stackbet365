import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/Home/Home"; // your new homepage components
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

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Router>
      <ScrollToTop/>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      {/* Main content that shifts based on sidebar state */}
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        } mt-16 `}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/casino/originals" element={<Original />} />
          <Route path="/casino/CrashGames" element={<Crash />} />
          <Route path="/casino/LiveCasinoGames" element={<LiveCasino />} />
          <Route path="/casino/slotsGames" element={<Slots />} />
          <Route path="/casino/miniGames" element={<Mini/>} />
          <Route path="/casino/spribeGames" element={<Spribe />} />
          <Route path="/casino/mascotGames" element={<Mascot />} />

          <Route path="/sports/liveBetting" element={<LiveBetting/>} />
          <Route path="/sports/basketball" element={<Basketball/>} />
          <Route path="/sports/tennis" element={<Tennis/>} />
          {/* Add other routes here */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/frequently-asked-Question" element={<FAQ/>} />
          <Route path="/About-us" element={<AboutUs/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
