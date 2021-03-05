import React from "react";
import "./navbar.css";
import Drop from "../Drop/Drop";

function Navbar() {
  return (
    <section className="box-content-navbar">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <span className="navbar-brand">
            <img
              className="me-2 mb-1"
              src="./img/Brasil_Cidadao_logo 1.png"
              alt="imagem"
            />
            Secretaria-Geral da Presidência da República
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-0 d-flex align-items-center mb-0 mb-lg-0">
              <li className="nav-item menu-item">
                <a
                  className="nav-link nav-item menu-item"
                  aria-current="page"
                  href="https://www.gov.br/pt-br/orgaos-do-governo"
                >
                  Órgãos do Governo
                </a>
              </li>
              <li className="nav-item menu-item">
                <a
                  className="nav-link"
                  href="https://www.gov.br/acessoainformacao/pt-br"
                >
                  Acesso à Informação
                </a>
              </li>
              <li className="nav-item menu-item">
                <a
                  className="nav-link"
                  href="http://www4.planalto.gov.br/legislacao/"
                >
                  Legislação
                </a>
              </li>
              <li className="nav-item menu-item">
                <a
                  className="nav-link"
                  href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
                >
                  Acessibilidade
                </a>
              </li>
              <li className="nav-item menu-item">
                <span className="nav-link">
                  <i className="fas fa-adjust"></i>
                </span>
              </li>
              <li className="nav-item menu-item">
                <span className="nav-link">
                  <i className="fas fa-headset"></i>
                </span>
              </li>
              <li className="menu-item">
                <a href="https://contas.acesso.gov.br/" className="nav-link">
                  <img src="./img/Avatar.png" height="40" alt="imagem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drop />
    </section>
  );
}

export default Navbar;
