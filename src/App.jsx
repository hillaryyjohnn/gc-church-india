import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery/Gallery";
import Testimonies from "./pages/Testimonies";
import Crusades from "./pages/Crusades";
import Videos from "./pages/Videos";
import Sow from "./pages/Sow";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/crusades" element={<Crusades />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/sow" element={<Sow />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;