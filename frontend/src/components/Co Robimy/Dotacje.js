import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import eu from "../../images/eu.jpg";

const Dotacje = () => {
  // data for jumbotron
  const opis = {
    title: "Projekty",
    photo: eu,
  };
  return (
    <>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col>Pozyskiwanie</Col>
        <Col>
          Gdzie można szukać
          <ul>
            <li>jakaś strona</li>
            <li>inna strona</li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Dotacje;
