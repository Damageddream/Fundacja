import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Wydarzenie from "./Wydarzenie";

function ListaAktualnosci() {
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
      url: "/api/aktualnoscis/",
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
  console.log(aktualnosci);

  return (
    <div className="d-flex justify-content-center">
      <Row>
        <Col>
          {isLoading && <p>Trwa pobieranie aktualności</p>}

          {!isLoading && aktualnosci.length === 0 && !error && (
            <p>Brak Aktualności</p>
          )}

          {!isLoading && error && <p>Wystąpił błąd: {error}</p>}

          {!error &&
            aktualnosci &&
            aktualnosci.map((wydarzenie) => (
              <Wydarzenie
                key={wydarzenie.id}
                id={wydarzenie.id}
                title={wydarzenie.title}
                title_image={wydarzenie.title_image}
                content={wydarzenie.content}
                date={wydarzenie.date}
                username={wydarzenie.username}
              />
            ))}
        </Col>
      </Row>
    </div>
  );
}

export default ListaAktualnosci;
