import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Kontakt = () => {
  return (
    <Row>
      <iframe
        title="fundacja"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.4265278881666!2d22.932276699248796!3d54.10189596808322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e103d51a31d91f%3A0xaee2efb2565b9545!2zxbthYmth!5e0!3m2!1sen!2spl!4v1666521180233!5m2!1sen!2spl"
        width="auto"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
        Dane
        </Col>
        <Col className="d-flex justify-content-center mt-5">
        </Col>
      </Row>
    </Row>
  );
};

export default Kontakt;
