import React from "react";
import "../../sass/components/karta.css";
const Karta = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-user-circle" aria-hidden="true">
                <img
                  className="imgkarta"
                  src={props.foto}
                  alt="Second slide"
                />
              </i>
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <h3>{props.title}</h3>
            <p>{props.opis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karta;
