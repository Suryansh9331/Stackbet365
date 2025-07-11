// import React, { useState } from "react";
// import { useAuth } from "../Hooks/useAuth";

// // ✅ YOUR LIVE SHEETDB API
// const SHEETDB_API = "https://sheetdb.io/api/v1/hu2ruifqk8tm6";

// const AuthModal = ({ isOpen, closeModal }) => {
//   const [tab, setTab] = useState("login");
//   const [form, setForm] = useState({ name: "", email: "", password: "", address: "", phone: "" });
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${SHEETDB_API}/search?email=${form.email}&password=${form.password}`
//       );
//       const data = await res.json();

//       if (data.length > 0) {
//         login(data[0]);
//         closeModal();
//       } else {
//         alert("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async () => {
//     setLoading(true);
//     try {
//       const newUser = {
//         name: form.name,
//         email: form.email,
//         password: form.password,
//         address: form.address,
//         phone: form.phone,
//         avatar: `https://i.pravatar.cc/150?u=${form.email}`,
//       };

//       await fetch(SHEETDB_API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: newUser }),
//       });

//       alert("Registered successfully! Now login.");
//       setTab("login");
//     } catch (error) {
//       console.error("Register error:", error);
//       alert("Failed to register. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in zoom-in-95 duration-200">
//         {/* Header with gradient background */}
//         <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-6 text-white">
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-bold">
//               {tab === "login" ? "Welcome Back" : "Create Account"}
//             </h2>
//             <button
//               onClick={closeModal}
//               className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <p className="text-white/90 text-sm mt-1">
//             {tab === "login" ? "Sign in to your account" : "Join us today"}
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex bg-gray-50 mx-6 mt-6 rounded-lg p-1">
//           <button
//             className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
//               tab === "login"
//                 ? "bg-white text-gray-900 shadow-sm"
//                 : "text-gray-600 hover:text-gray-900"
//             }`}
//             onClick={() => setTab("login")}
//           >
//             Login
//           </button>
//           <button
//             className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
//               tab === "register"
//                 ? "bg-white text-gray-900 shadow-sm"
//                 : "text-gray-600 hover:text-gray-900"
//             }`}
//             onClick={() => setTab("register")}
//           >
//             Register
//           </button>
//         </div>

//         {/* Form */}
//         <div className="p-6 pt-4">
//           <div className="space-y-4">
//             {tab === "register" && (
//               <div className="transform transition-all duration-300 ease-in-out">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Enter your full name"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   />
//                 </div>
//               </div>
//             )}

//             {tab === "register" && (
//               <div className="transform transition-all duration-300 ease-in-out">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
//                     value={form.phone}
//                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   />
//                 </div>
//               </div>
//             )}

//             {tab === "register" && (
//               <div className="transform transition-all duration-300 ease-in-out">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <textarea
//                     placeholder="Enter your full address"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
//                     rows="3"
//                     value={form.address}
//                     onChange={(e) => setForm({ ...form, address: e.target.value })}
//                   />
//                 </div>
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                   </svg>
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
//                   value={form.password}
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             className={`w-full mt-6 py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
//             }`}
//             onClick={tab === "login" ? handleLogin : handleRegister}
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </div>
//             ) : (
//               <span className="flex items-center justify-center">
//                 {tab === "login" ? "Sign In" : "Create Account"}
//                 <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//             )}
//           </button>

//           {/* Switch Tab */}
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               {tab === "login" ? (
//                 <>
//                   Don't have an account?{" "}
//                   <button
//                     className="text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors duration-200"
//                     onClick={() => setTab("register")}
//                   >
//                     Create one here
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   Already have an account?{" "}
//                   <button
//                     className="text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors duration-200"
//                     onClick={() => setTab("login")}
//                   >
//                     Sign in instead
//                   </button>
//                 </>
//               )}
//             </p>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-16 translate-x-16"></div>
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full translate-y-12 -translate-x-12"></div>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;
import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const SHEETDB_API = "https://sheetdb.io/api/v1/hu2ruifqk8tm6";

const AuthModal = ({ isOpen, closeModal }) => {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    address: "", 
    phone: "+1 " 
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  // Format phone number as US number
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith("+1 ")) {
      value = "+1 " + value.replace(/[^0-9]/g, "");
    }
    // Format as +1 (XXX) XXX-XXXX after 6 characters
    if (value.length > 6) {
      value = value.replace(/^(\+1\s?)(\d{3})(\d{3})(\d{4}).*/, '$1($2) $3-$4');
    }
    setForm({ ...form, phone: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${SHEETDB_API}/search?email=${form.email}&password=${form.password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        login(data[0]);
        closeModal();
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
        address: form.address,
        phone: form.phone,
        avatar: `https://i.pravatar.cc/150?u=${form.email}`,
      };

      await fetch(SHEETDB_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: newUser }),
      });

      alert("Registered successfully! Now login.");
      setTab("login");
    } catch (error) {
      console.error("Register error:", error);
      alert("Failed to register. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md relative overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-purple-600 px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {tab === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <button
              onClick={closeModal}
              className="text-white/80 hover:text-white rounded-full p-1 transition-all duration-150"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300">
          <button
            className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 ${
              tab === "login"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 ${
              tab === "register"
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {tab === "register" && (
            <div className="animate-fade-in">
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
          )}

          {tab === "register" && (
            <div className="animate-fade-in">
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (123) 456-7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200"
                value={form.phone}
                onChange={handlePhoneChange}
                maxLength="16"
              />
            </div>
          )}

          {tab === "register" && (
            <div className="animate-fade-in">
              <label className="block text-sm text-gray-600 mb-1">Address</label>
              <textarea
                placeholder="123 Main St, City, State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 resize-none"
                rows="2"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>
          )}

          <div className="animate-fade-in">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="animate-fade-in">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            className={`w-full mt-4 py-2 px-4 rounded-md font-medium text-white transition-all duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 hover:shadow-sm"
            }`}
            onClick={tab === "login" ? handleLogin : handleRegister}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : tab === "login" ? "Sign In" : "Create Account"}
          </button>

          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              {tab === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    className="text-purple-600 hover:underline"
                    onClick={() => setTab("register")}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-purple-600 hover:underline"
                    onClick={() => setTab("login")}
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;