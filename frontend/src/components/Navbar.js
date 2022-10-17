import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-white bg-white">
      <a className="navbar-brand bg-white" href="#">
        <img
          src={require("./images/fresk-logo-beznapi.png")}
          width="100"
          height="auto"
          className="d-inline-block align-top"
          alt="logo fresk"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-dark"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Strona główna <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Aktualności
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              O Fundacji
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Co robimy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gdzie działamy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Kontakt
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
