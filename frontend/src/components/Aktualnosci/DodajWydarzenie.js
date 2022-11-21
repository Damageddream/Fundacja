import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import RichText from "../Utilities/RichText";
import '../Utilities/RichText.css'


const DodajWydarzenie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dodaj Wydarzenie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Dodaj Wydarzenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='addwydarzenie'>
            <Form.Group className="mb-3">
              <Form.Label>Tytuł</Form.Label>
              <Form.Control type="text" placeholder="Wprowadź tytuł..." />
            </Form.Group>
            <Form.Group controlId="formFileSingle" className="mb-3">
              <Form.Label>Dodaj zdjęcia do galerii</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/jpeg,image/png,image/gif"
                name='image' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Zapowiedź</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Napisz zapowiedź..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Napisz tekst wydarzenia</Form.Label>
              <RichText />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type='submit' form='addwydarzenie'>
            Dodaj wydarzenie
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DodajWydarzenie;
