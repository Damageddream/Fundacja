import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../Jumbotron";

const CoRobimy = () => {
  const opis = {
    title: "Projekty i Usługi",
    photo: "src",
  };
  return (
    <div>
      <Jumbotron title={opis.title} photo={opis.photo} />
      <Row>
                <Col><p>Duis voluptate esse in ad est ipsum cupidatat. Magna consectetur proident sint consequat et. Non fugiat commodo irure ex et dolore eu. Pariatur sunt id id ipsum. Deserunt laboris anim aute est aute sit sunt pariatur in officia nostrud dolore sunt.</p></Col>
                <Col><p>Magna enim enim nulla id amet sit. Laboris nostrud laboris labore irure ea dolore nostrud irure aute. Labore culpa est aliqua occaecat. Do aliqua duis voluptate sit aliqua ea irure dolore minim incididunt consectetur. Incididunt occaecat veniam enim amet ipsum esse sint aliquip sint deserunt ullamco ex sint ut. Aliquip consectetur sunt culpa mollit magna ad.

                    Ullamco in consequat nostrud eu reprehenderit esse id voluptate nostrud irure ullamco dolor. Elit sunt nisi cillum sunt. Incididunt pariatur laboris sunt labore est eiusmod tempor laborum in non et. Adipisicing sint ea dolore nulla voluptate deserunt cupidatat excepteur enim.

                    Elit tempor nisi est anim aliquip nostrud qui. Id est fugiat minim enim fugiat amet exercitation. Minim ex qui ut aute aliqua occaecat tempor elit. Exercitation laborum adipisicing aliquip reprehenderit proident eiusmod aliquip. Reprehenderit nostrud deserunt minim veniam ipsum sit. Anim anim labore irure ipsum non incididunt qui consequat incididunt aliqua minim occaecat consectetur. Incididunt sit minim cupidatat dolore sint in.

                    Adipisicing tempor veniam reprehenderit Lorem culpa ullamco. Et ad cillum eu ipsum commodo aute elit duis ex fugiat aute minim. Ex consectetur non commodo anim aute sint magna id velit mollit est ullamco nulla. Tempor voluptate veniam cupidatat aliquip esse exercitation nulla est culpa minim tempor irure. Aute do ad elit mollit quis magna elit incididunt duis.</p></Col>
                <Col><p>Ipsum adipisicing deserunt minim aute ad Lorem anim deserunt elit in exercitation non tempor. Sint velit quis ullamco ut tempor reprehenderit incididunt eiusmod pariatur exercitation. Anim ex occaecat adipisicing duis elit pariatur id reprehenderit nisi voluptate deserunt Lorem sit sit. Nostrud fugiat excepteur culpa nostrud magna tempor elit mollit consectetur sit ad. Ipsum excepteur eu laboris eiusmod voluptate reprehenderit in est deserunt pariatur officia laborum. Culpa ea eiusmod mollit elit est sit adipisicing consectetur ipsum do deserunt magna non est.</p></Col>
            </Row>
    </div>
  );
};

export default CoRobimy;
