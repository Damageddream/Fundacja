import React, { useState } from "react";
import Jumbotron from "../Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Ofundacji = () => {
  const opis = {
    title: "Fundacja Rozwoju Edukacji i Społecznej Kreatywności",
    photo: "src",
  };

  //variables with content of page
  const oNas = <p>o fundacji</p>;

  const historia = <p>historia</p>;

  const rada = <p>rada i zarząd</p>;

  const zespol = <p>zespol</p>;

  //Changes between contents
  const [content, setOpis] = useState(oNas);

  //Setting className to active or ''
  const [isActiveh, setIsActiveh] = useState(false);
  const [isActiveo, setIsActiveo] = useState(false);
  const [isActiver, setIsActiver] = useState(false);
  const [isActivez, setIsActivez] = useState(false);

  //seeting one of list items as active and rest as inactive
  const historiaHandler = () => {
    setOpis(historia);
    setIsActiveh(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const radaHandler = () => {
    setOpis(rada);
    setIsActiver(true);
    setIsActiveh(false);
    setIsActivez(false);
    setIsActiveo(false);
  };
  const zespolHandler = () => {
    setOpis(zespol);
    setIsActivez(true);
    setIsActiver(false);
    setIsActiveh(false);
    setIsActiveo(false);
  };

  const oNasHandler = () => {
    setOpis(oNas);
    setIsActiveo(true);
    setIsActiver(false);
    setIsActivez(false);
    setIsActiveh(false);
  };
  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col></Col>
        <Col className="mt-5">
          <ListGroup as="ul">
            <ListGroup.Item
              as="li"
              onClick={oNasHandler}
              className={
                isActiveo ? "list-group-item active" : "list-group-item"
              }
            >
              O nas
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              onClick={historiaHandler}
              className={
                isActiveh ? "list-group-item active" : "list-group-item"
              }
            >
              Historia Fundacji
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              onClick={radaHandler}
              className={
                isActiver ? "list-group-item active" : "list-group-item"
              }
            >
              Rada i Zarząd
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              onClick={zespolHandler}
              className={
                isActivez ? "list-group-item active" : "list-group-item"
              }
            >
              Zespół
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className="mt-5">
          {content}
        </Col>
      </Row>
    </div>
  );
};

export default Ofundacji;
