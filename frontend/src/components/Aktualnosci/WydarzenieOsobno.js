import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WydarzenieOsobno = () => {



  const location = useLocation()
  const [aktualnosci, setNewAktualnosci] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getAktulanosci();
  }, []);

  function getAktulanosci() {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `/api/aktualnoscis/${location.state}/`,
    })
      .then((response) => {
        const data = response.data;
        setNewAktualnosci(data);

      })
      .catch((error) => {
        if (error.response) {
          setError(error.response);
          setError(error.response.status);
          setError(error.response.headers);
        }
      });
    setIsLoading(false);
  }
  return (
    <Row>
      <Col className='d-flex flex-column align-items-center'>
        <Row>
          <img
            className="newsPhoto"
            src={aktualnosci.title_image}
            alt={aktualnosci.title}
          />
        </Row>
        <Row>
          {aktualnosci.title}
        </Row>
        <Row>
          {aktualnosci.username}
          {Moment(aktualnosci.date).format("DD.MM.YYYY")}
        </Row>
        <Row>
          <div dangerouslySetInnerHTML={{ __html: aktualnosci.content }} />
        </Row>
      </Col>
    </Row>
  )
}

export default WydarzenieOsobno