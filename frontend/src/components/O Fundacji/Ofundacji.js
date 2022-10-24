import React from "react";
import Jumbotron from "../Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Ofundacji = () => {
  const opis = {
    title: "Fundacja Rozwoju Edukacji i Społecznej Kreatywności",
    photo: "src",
  };
  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
        <Col className='mt-5'>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              O nas
            </ListGroup.Item>
            <ListGroup.Item as="li">Historia Fundacji</ListGroup.Item>
            <ListGroup.Item as="li">
              Rada i Zarząd
            </ListGroup.Item>
            <ListGroup.Item as="li">Zespół</ListGroup.Item>
            <ListGroup.Item as="li">Statut</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={8} className='mt-5'>
          <p>
            Magna enim enim nulla id amet sit. Laboris nostrud laboris labore
            irure ea dolore nostrud irure aute. Labore culpa est aliqua
            occaecat. Do aliqua duis voluptate sit aliqua ea irure dolore minim
            incididunt consectetur. Incididunt occaecat veniam enim amet ipsum
            esse sint aliquip sint deserunt ullamco ex sint ut. Aliquip
            consectetur sunt culpa mollit magna ad. Ullamco in consequat nostrud
            eu reprehenderit esse id voluptate nostrud irure ullamco dolor. Elit
            sunt nisi cillum sunt. Incididunt pariatur laboris sunt labore est
            eiusmod tempor laborum in non et. Adipisicing sint ea dolore nulla
            voluptate deserunt cupidatat excepteur enim. Elit tempor nisi est
            anim aliquip nostrud qui. Id est fugiat minim enim fugiat amet
            exercitation. Minim ex qui ut aute aliqua occaecat tempor elit.
            Exercitation laborum adipisicing aliquip reprehenderit proident
            eiusmod aliquip. Reprehenderit nostrud deserunt minim veniam ipsum
            sit. Anim anim labore irure ipsum non incididunt qui consequat
            incididunt aliqua minim occaecat consectetur. Incididunt sit minim
            cupidatat dolore sint in. Adipisicing tempor veniam reprehenderit
            Lorem culpa ullamco. Et ad cillum eu ipsum commodo aute elit duis ex
            fugiat aute minim. Ex consectetur non commodo anim aute sint magna
            id velit mollit est ullamco nulla. Tempor voluptate veniam cupidatat
            aliquip esse exercitation nulla est culpa minim tempor irure. Aute
            do ad elit mollit quis magna elit incididunt duis.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Ofundacji;
