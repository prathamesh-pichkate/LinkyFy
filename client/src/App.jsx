import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
