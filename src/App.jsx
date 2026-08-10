import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ServicesPage from "./components/ServicesPage";


/* =========================
   HOME PAGE
========================= */

function HomePage() {
  return (
    <>
      <Header />

      <Hero />

      <TechStrip />

      <Services />

      <HowWeWork />

      <About />

      <Portfolio />

      <WhyUs />

      <Contact />

      <Footer />
    </>
  );
}


/* =========================
   APP
========================= */

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>

      {loading ? (
        <Loader
          onComplete={() => setLoading(false)}
        />
      ) : (

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<HomePage />}
          />


          {/* SERVICES PAGE */}

          <Route
            path="/services"
            element={<ServicesPage />}
          />

        </Routes>

      )}

    </BrowserRouter>
  );
}

export default App;