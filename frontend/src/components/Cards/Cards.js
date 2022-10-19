import React from "react";
import Cardy from "./Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Cardy />
        </Col>
        <Col className="d-flex justify-content-center">
          <Cardy />
        </Col>
        <Col className="d-flex justify-content-center">
          <Cardy />
        </Col>
      </Row>
    </div>
  );
};

export default Cards;