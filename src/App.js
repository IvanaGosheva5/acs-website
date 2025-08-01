import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <main>
        <Home />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
