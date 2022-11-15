import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


const Projekty = () => {
    return (
        <Row>
            <Col>
            Prowadzenie projektów: logistyka, organizacja, przygotowanie dokumentacji....
            </Col>
            <Col>
            Aktualnie realizujemy projekty: 
            <ul>
                <li>
                    żłobki
                </li>
                <li>
                    TWiM:
                    Barman
                    barista
                    Event-Manager
                </li>
            </ul>
            </Col>
        </Row>
    )
}

export default Projekty