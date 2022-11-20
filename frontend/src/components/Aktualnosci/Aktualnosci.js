import Jumbotron from "../Jumbotron";
import ListaAktualnosci from "./ListaAktualnosci";
import DodajWydarzenie from "./DodajWydarzenie";

const Aktualnosci = () => {
  const opis = {
    title: "Aktualności",
    photo: "src",
  };

  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <DodajWydarzenie />
      <ListaAktualnosci />
    </div>
  );
};

export default Aktualnosci;
