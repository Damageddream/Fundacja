import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/fresk-logo-beznapi.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../sass/components/navbar.css";
import { NavLink } from 'react-router-dom';

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
                        <NavLink to='/' className='nav-linky'>Strona Główna</NavLink>
                        <NavLink to='/aktualnosci' className='nav-linky'>Aktualności</NavLink>
                        <NavLink to='/ofundacji' className='nav-linky'>O Fundacji</NavLink>
                        <NavLink to='/corobimy' className='nav-linky'>Co robimy</NavLink>
                        <NavLink to='/kontakt' className='nav-linky'>Kontakt</NavLink>

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