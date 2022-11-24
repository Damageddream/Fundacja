import { useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plik from "./Dodaj do wydarzenia/Plik";
import Obraz from "./Dodaj do wydarzenia/Obraz";
import UsunWydarzenie from "./Dodaj do wydarzenia/UsunWydarzenie";

const WydarzenieOsobno = () => {

  
  let navigate = useNavigate();

  const location = useLocation()
  const [aktualnosci, setNewAktualnosci] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    getAktulanosci();
  }, []);

  let locationId = location.pathname.slice(-1)
  function deleteAktualnosci() {
    axios({
      method: 'DELETE',
      url: `/api/aktualnoscis/${location.state}/`,
    })
    .then(() => {
      navigate('/aktualnosci')

    })
  }

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
      <UsunWydarzenie wydarzenie={locationId} />
      <Plik wydarzenie={locationId}/>
      <Obraz wydarzenie={locationId} />
      <Col className='d-flex flex-column align-items-center'>
        <Row>
          {Moment(aktualnosci.date).format("DD.MM.YYYY")}

        </Row>
        <Row>
        <h1>{aktualnosci.title}</h1>
        </Row>
        <Row>
          
          <img
            className="newsPhoto"
            src={aktualnosci.title_image}
            alt={aktualnosci.title}
          />
        </Row>
        <Row>
          {aktualnosci.content}
        </Row>
      </Col>
    </Row>
  )
}

export default WydarzenieOsobno