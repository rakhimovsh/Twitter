import "./App.scss";
import "./Components/Fonts/Fonts.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Provider as LanguageProvider } from "./Components/Context/LanguagesContext";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Home/Main";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
