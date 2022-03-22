import "./App.scss";
import "./Components/Fonts/Fonts.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Provider as LanguageProvider } from "./Components/Context/LanguagesContext";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";

function All() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/explore" element={"Explore"} />
          <Route path="/notifications" element={"Notifications"} />
          <Route path="/messages" element={"Messages"} />
          <Route path="/bookmarks" element={"Bookmarks"} />
          <Route path="/lists" element={"Lists"} />
          <Route path="/more" element={"More"} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default All;
