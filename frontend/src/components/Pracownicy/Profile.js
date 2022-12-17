import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "../Jumbotron";
import Register from "./Register.js";

const Profil = () => {
  // data for jumbotron on top
  const opis = {
    title: "Profil",
    photo: "",
  };

  //Setting className to active or ''
  const [isActiveh, setIsActiveh] = useState(false);
  const [isActiveo, setIsActiveo] = useState(true);


  //seeting one of list items as active and rest as inactive
  const wiadomosciHandler = () => {
    setIsActiveh(true);
    setIsActiveo(false);
  };


  const registerHandler = () => {
    setIsActiveo(true);
    setIsActiveh(false);
  };
  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row className="justify-content-center">
        <Col className="mt-5 ms-5">
          <ListGroup as="ul">
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              as="li"
              onClick={registerHandler}
              className={
                isActiveo ? "list-group-item active" : "list-group-item"
              }
            >
              Wiadomości
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              as="li"
              onClick={wiadomosciHandler}
              className={
                isActiveh ? "list-group-item active" : "list-group-item"
              }
            >
              Zarejestruj użytkownika
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className="mt-5">
          <div className="text-center">
            {isActiveo && (
              <h4>FUNDACJA ROZWOJU EDUKACJI I SPOŁECZNEJ KREATYWNOŚCI</h4>
            )}
          </div>
          <div>
            {isActiveo && (
              <p className="text-center">
                Nullam at arcu viverra, gravida urna vitae, posuere urna. In hac
                habitasse platea dictumst. Maecenas sit amet nisi et libero
                consequat finibus. Maecenas quam erat, efficitur vel aliquam at,
                finibus ut neque. Vivamus in urna accumsan, semper metus ac,
                sollicitudin ligula. Phasellus sodales eget urna quis gravida.
                Praesent id ligula quam. Aenean commodo eu orci sit amet
                sollicitudin. Suspendisse potenti. Integer eu lectus bibendum,
                consequat nisl ut, rhoncus purus. Vivamus erat magna,
                pellentesque eget augue a, pharetra laoreet leo. Maecenas eu
                tellus magna. Vestibulum ut eros vel est accumsan finibus.
                Aliquam tincidunt dignissim leo, laoreet blandit orci pulvinar
                a. Vivamus dapibus gravida lectus, pulvinar egestas turpis
                mollis at. Fusce iaculis a sem non bibendum.
              </p>
            )}
          </div>
          <div className="text-center">{isActiveh && <h4>Zarejestruj</h4>}</div>
          <div>
            {isActiveh && (
                <Register />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profil;
