import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import ListaAktualnosci from "./ListaAktualnosci"

const Aktualnosci = () => {
  const opis = {
    title: "Aktualności",
    photo: "src",
  };

  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <a class="btn btn-primary" href="http://127.0.0.1:8000/add_wydarzenie/" role="button">Dodaj wydarzenie</a>
      <ListaAktualnosci />
    </div>
  );
};

export default Aktualnosci;
