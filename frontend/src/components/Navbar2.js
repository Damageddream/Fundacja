import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/fresk-logo-beznapi.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../sass/components/navbar.css";

function Navbar2() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo}
                        width="auto"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex-grow-1 justify-content-evenly">
                        <a className="nav-linky" href="#pricing">Aktualności</a>
                        <a className="nav-linky" href="#pricing">O Fundacji</a>
                        <a className="nav-linky" href="#pricing">Co robimy</a>
                        <a className="nav-linky" href="#pricing">Gdzie działamy</a>
                        <a className="nav-linky" href="#pricing">Kontakt</a>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar2;