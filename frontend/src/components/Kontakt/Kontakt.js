import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
        <Col className="mt-5 ms-5 ps-5">
          <Row className="justify-content-center">
                <Col>
                  <h4 className='mb-3'>Dane</h4>
                  
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 className='mb-3 fw-bold'>Fundacja Rozwoju Edukacji i Społecznej Kreatywności</h6>
                  <p><div className='fw-bold'>Adres</div> Noniewicza 34 lok.4 16-400 Suwałki</p>
                  <p><div className='fw-bold'>Mail</div> kontakt.fresk@gmail.com</p>
                  <p><div className='fw-bold'>Telefon</div> 661 300 803</p>
                  <p><div className='fw-bold'>NIP</div> 6572174750</p>
                  <p><div className='fw-bold'>REGON</div> 383642931</p>
                  <p><div className='fw-bold'>KRS</div> 0000790916</p>
                  <p><div className='fw-bold'>Numer konta</div> </p>

                </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-center mt-5" >
          <Form className="w-75">
            <h4 className='mb-3'>Skontakuj się z nami</h4>

            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Wpisz email...." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nazwa">
              <Form.Label>Imię i nazwisko / nazwa organizacji</Form.Label>
              <Form.Control type="text" placeholder="Nazwa..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tekst">
              <Form.Label>Treść</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Wyślij
            </Button>
          </Form>

        </Col>
      </Row>
    </Row>
  );
};

export default Kontakt;
