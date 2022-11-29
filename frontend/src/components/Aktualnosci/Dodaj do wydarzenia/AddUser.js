import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import RichText from "../../Utilities/RichText";
import "../../Utilities/RichText.css";
import axios from "axios";

const AddUser = (props) => {
  //state for showing - hidding modal
  const [show, setShow] = useState(false);
  //functions for showing - hidding modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //states for loading when fetching data and catching errors from fetching
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);


  //state for storing data from form before submit 'on change'
  const [form, setForm] = useState({
    username: "fresky",
    email: "fresky@example.com",
    password: "fresky123",
  });


  //passing data from form into FormData to handle image formatting
  let formForm = new FormData()
  
  formForm.append('username', form.username)
  formForm.append('email', form.email)
  formForm.append('password', form.password)

  // function for posting all data from form into backend
  const handleSubmit = () => {
    setIsLoading(true);
    axios({
      method: 'POST',
      url: '/api/register/',
      data: formForm,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).catch((error) => {
      setErrors(error)
    })

    setIsLoading(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dodaj uzytkownika
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

        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSubmit}
          >
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

export default AddUser;