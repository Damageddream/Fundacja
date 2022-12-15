import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plik from "./Dodaj do wydarzenia/Plik";
import Obraz from "./Dodaj do wydarzenia/Obraz";
import UsunWydarzenie from "./Dodaj do wydarzenia/UsunWydarzenie";
import EdytujWydarzenie from "./Dodaj do wydarzenia/EdytujWydarzenie";
import DownloadFile from "./Dodaj do wydarzenia/DownloadFile";
import draftToHtml from "draftjs-to-html";
import Galeria from "./Dodaj do wydarzenia/Galeria";

const WydarzenieOsobno = () => {
  let navigate = useNavigate();

  const location = useLocation();
  const [aktualnosci, setNewAktualnosci] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  //setting text editor into html
  const content = { __html: draftToHtml(aktualnosci.content) };

  useEffect(() => {
    getAktulanosci();
  }, []);

  let locationId = location.pathname.slice(-1);
  function deleteAktualnosci() {
    axios({
      method: "DELETE",
      url: `/api/aktualnoscis/${location.state}/`,
    }).then(() => {
      navigate("/aktualnosci");
    });
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
      <Col md='4' sm='4' lg='2' className=" ms-3 mt-5 d-flex flex-column align-items-left">
        <Plik wydarzenie={locationId} />
        <Obraz wydarzenie={locationId} />
        <EdytujWydarzenie
          className="mb-2"
          wydarzenie={locationId}
          title={aktualnosci.title}
          title_image={aktualnosci.title_image}
          content_preview={aktualnosci.content_preview}
          content={aktualnosci.content}
        />
        <UsunWydarzenie wydarzenie={locationId} />
      </Col>
      <Col className="d-flex flex-column align-items-center">
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
        <Row>Dodane:{Moment(aktualnosci.date).format("DD.MM.YYYY")}</Row>
        <Row>
          <div dangerouslySetInnerHTML={content}></div>
        </Row>
        <Row>
          <Galeria wydarzenie={locationId} />
        </Row>
      </Col>
      <Col md='4' sm='4' lg='2' className=" ms-3 d-flex flex-column align-items-left justify-content-center">
        <DownloadFile wydarzenie={locationId} />
      </Col>
    </Row>
  );
};

export default WydarzenieOsobno;
