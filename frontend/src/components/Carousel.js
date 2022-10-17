import React, { useState } from 'react';
import "./Carousel.css";
import logo from "../images/fresk-logo.png";
import Carousel from 'react-bootstrap/Carousel';

const Carousela = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to='0' className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to='1'></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to='2'></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1>FRESK</h1>
            <p>sadondasndoausndouasnduonasoduansodnaosud</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1>asd</h1>
            <p>sadondasndoausndouasnduonasoduansodnaosud</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1>qwe</h1>
            <p>sadondasndoausndouasnduonasoduansodnaosud</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
