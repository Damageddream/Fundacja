import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import kursy from "../../images/kurs.jpg";

const Projekty = () => {
  // data for jumbotron
  const opis = {
    title: "Kursy",
    photo: kursy,
  };
  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col>
          Prowadzenie projektów: logistyka, organizacja, przygotowanie
          dokumentacji....
        </Col>
        <Col>
          Aktualnie realizujemy projekty:
          <ul>
            <li>żłobki</li>
            <li>TWiM: Barman barista Event-Manager</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Projekty;
