import React from "react";
import "./navbar.css";

function NavbarLogin() {
  return (
    <section className="box-content-navbar">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="navbar-brand d-flex flex-column align-md-center flex-md-row">
            <img
              className="me-2 mb-0 col-3"
              src="./img/Brasil_Cidadao_logo 1.png"
              alt="imagem"
            />
            <span className="mt-2">
              Secretaria-Geral da Presidência da República
            </span>
          </div>
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
              <li className="nav-item">
                <a
                  className="nav-link menu-item"
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
                <button className="nav-link button-cta">
                  <i className="fas fa-user me-2"></i>
                  Entrar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center">
            <h4 className="imprensa-nacional ms-2">Imprensa Nacional</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarLogin;
