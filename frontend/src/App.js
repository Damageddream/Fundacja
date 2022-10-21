import React from "react";
import Navbar2 from "./components/Navbar2";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer";
import Carousel2 from "./components/Carousel2";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Main from './components/Main page/main'
import { Link, Route, Routes } from 'react-router-dom';
import Aktualnosci from "./components/Aktualnosci/Aktualnosci";
import Kontakt from "./components/Kontakt/Kontakt";
import Ofundacji from "./components/O Fundacji/Ofundacji";




function App() {
  return (
    <div>
      <Navbar2 />
      <Carousel2 />
      <Container fluid>
        <Cards />
        <Main />
      </Container>
      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
