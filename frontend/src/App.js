import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer";
import Carousel2 from "./components/Carousel2";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel2 />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
