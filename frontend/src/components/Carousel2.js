import React, { useState } from 'react';
import "./Carousel.css";
import logo from "../images/fresk-logo.png";
import  eu from "../images/eu.jpg";
import  kurs from "../images/kurs.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Carousel2 = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            id="logo"
            className="d-block"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="kurs"
            className="d-block"
            src={kurs}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="eu"
            className="d-block"
            src={eu}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default Carousel2;
