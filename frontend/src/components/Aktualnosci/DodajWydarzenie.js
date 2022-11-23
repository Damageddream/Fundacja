import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import RichText from "../Utilities/RichText";
import '../Utilities/RichText.css'


const DodajWydarzenie = () => {

  //state for showing - hidding modal
  const [show, setShow] = useState(false);
  //functions for showing - hidding modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state for storing data from form before submit 'on change'
  const [form, setForm] = useState({
    poster:'',
    title:'',
    title_image:'',
    content:'',
    content_preview:'',
    date:'',
    archived:'',
  })

  

  //catching data from onchange - title and updating form
  const handleTitleChange = (e) => {
    setForm({
      ...form,
      title: e.target.value
    })
  }
  //catching data from onchange - title_image and updating form
  const handleTitle_imageChange = (e) => {
    setForm({
      ...form,
      title_image: e.target.value
    })
  }
  //catching data from onchange - content and updating form
  //catching data from onchange - content_preview and updating form
  //catching data from onchange - date and updating form
  //catching data from onchange - archived and updating form
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
          <Form id='addwydarzenie'>
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
          </Form>
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
