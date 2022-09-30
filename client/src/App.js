import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import GoingToPage from "./pages/GoingTo";
import MyProfilePage from "./pages/MyProfile";
import SignInUpPage from "./pages/SignInUp";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/goingto" element={<GoingToPage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/signinup" element={<SignInUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
