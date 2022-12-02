import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const Register = () => {

    // states for password, email and username to create User
    const [form, setForm] = useState({
        password: '',
        username: '',
        email: '',
    })

    // handlers for password, email and username to create User
    const handleUsername = (e) => {
        setForm({
            ...form,
            username: e.target.value,
        })
    }

    const handleEmail = (e) => {
        setForm({
            ...form,
            email: e.target.value,
        })
    }

    const handlePassword = (e) => {
        setForm({
            ...form,
            password: e.target.value,
        })
    }




    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nazwa uzytkownika</Form.Label>
                    <Form.Control type="text" placeholder="Nazwa uzytkownika" onChange={(e) => {
                        handleUsername(e);
                    }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Podaj email" onChange={(e) => {
                        handleEmail(e);
                    }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="Hasło" onChange={(e) => {
                        handlePassword(e);
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Zarejestruj się
                </Button>
                <Button variant="secondary">
                    Wróć
                </Button>
            </Form>
        </>
    )
}

export default Register