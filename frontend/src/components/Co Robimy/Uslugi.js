import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import sala from "../../images/sala.jpg";

const Uslugi = () => {
  // data for jumbotron
  const opis = {
    title: "Usługi",
    photo: sala,
  };

  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col>Wynajem sali</Col>
        <Col>
          Zdjecia sali
          <ul>
            <li>zdjecie</li>
            <li>zdjecie</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Uslugi;
