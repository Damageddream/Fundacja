import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";
import axios from "axios";
import Notes from "../Notes"

const Aktualnosci = () => {
  const opis = {
    title: "Aktualności",
    photo: "src",
  };

  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Notes />
    </div>
  );
};

export default Aktualnosci;
