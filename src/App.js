import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ScrollToTopFloating from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Colors from "./pages/Colors";


// Скрол най-горе при смяна на страница
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <Preloader />
      <Header />
      <main className="pt-20"> {/* отстояние за fixed Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/colors" element={<Colors />} />


        </Routes>
      </main>
      <Footer />
      <ScrollToTopFloating />
      
    </Router>
  );
}

export default App;
