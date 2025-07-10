// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Sidebar from "./Components/Sidebar";
// function App() {
//   return (
//     <div>
//       <Router>
//         <Sidebar />

//         <Routes></Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/Home/Home"; // your new homepage components

function App() {

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Router>
   
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      {/* Main content that shifts based on sidebar state */}
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        } mt-16`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
