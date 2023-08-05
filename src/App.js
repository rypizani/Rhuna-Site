import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import Layout from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Planos from "./pages/Planos/Planos"
import NotFoundPage from "./pages/NotFound/NotFound";
import LandingPage from "./pages/Landing/Landing"
import BodyPage from "./pages/Body/Body";
import PlanetsPage from "./pages/Planets/Planets";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
function App() {
  const location = useLocation();


  useEffect(() => { window.scrollTo(0, 0); }, [location])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/plans" element={<Planos />} />
          <Route path="/service" element={<PlanetsPage />} />
          <Route path="/body/:id" element={<BodyPage />} />
          <Route path="/FAQ" element={<AboutPage />} />
          <Route path="/about" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
