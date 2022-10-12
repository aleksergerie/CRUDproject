import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import GoingToPage from "./pages/GoingTo";
import MyProfilePage from "./pages/MyProfile";
import SignInUpPage from "./pages/SignInUp";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  const [userId, setUserId] = useState();

  return (
    <div>
      <MainNavigation />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage userId={userId} />} />
        <Route path="/goingto" element={<GoingToPage userId={userId} />} />
        <Route path="/myprofile" element={<MyProfilePage userId={userId} />} />
        <Route
          path="/signinup"
          element={<SignInUpPage setUserId={setUserId} userId={userId} />}
        />
      </Routes>
    </div>
  );
}

export default App;
