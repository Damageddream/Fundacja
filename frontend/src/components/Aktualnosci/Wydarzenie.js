import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../sass/components/wydarzenie.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Wydarzenie(props) {
  //cleaning up data formating
  const formatDate = Moment(props.date).format("DD.MM.YYYY");


  return (
    <div className="my-5">
      <Row className="newsContainer">
        <Col>
          <img
            className="newsPhoto"
            src={props.title_image}
            alt={props.title}
          />
        </Col>
        <Col>
          <Card style={{ width: "50rem", height: "400px" }} border="dark">
            <Card.Body className="d-flex flex-column">
              <Card.Title><h1>{props.title}</h1></Card.Title>
              <Card.Subtitle className="mb-2 text-muted fs-6">
                Dodane: {formatDate} przez: {props.username} 
              </Card.Subtitle>
              <Card.Text>
                {props.contentPreview}
              </Card.Text>
              <Link to={`/aktualnosci/${props.id}`} state={props.id} className="btn btn-primary mt-auto">
                Zobacz więcej
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wydarzenie;
