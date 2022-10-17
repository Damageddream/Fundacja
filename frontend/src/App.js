import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Carousel2 />
      <Footer />
    </div>
  );
}

export default App;
