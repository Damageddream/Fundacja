import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Obraz(props) {
  // Show - Hide - Modal on WydarzenieOsobno component
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state for Form - form - storing form data, and isLoading - display when data is loading, error - handling errors
  const [form, setForm] = useState({
    image: '',
    wydarzenie: props.wydarzenie
  })
  const [errors, setErrors] = useState()
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    let newImage = {...form};
    newImage['image'] = e.target.files[0];
    setForm(newImage)
  }

  // 
  let formForm = new FormData();
  formForm.append('image', form.image)
  formForm.append('wydarzenie', form.wydarzenie)

  //Submit and create image in galery
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault()
      axios({
        method: "POST",
        url: "/api/photos/",
        data: formForm,
        headers: {
            "Content-Type": "multipart/form-data",
        },
      }).catch((error) => {
        setErrors(error);
      })
    
    setIsLoading(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dodaj zdjęcia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Galeria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Dodaj zdjęcia do galerii</Form.Label>
                <Form.Control 
                type="file" 
                multiple 
                accept="image/jpeg,image/png,image/gif"
                name='image'
                onChange={(e) => {handleImageChange(e)}}
                isInvalid={!!errors}/>
                <Form.Control.Feedback type='invalid'>
                    {errors}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Dodaj zdjęcia
              </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Obraz;
