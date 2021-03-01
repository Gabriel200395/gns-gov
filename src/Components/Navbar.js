import "../css/navbar.css";

function Navbar() {
  return (
    <header className="content-nav ">
      <nav className="navbar navbar-expand-md ">
        <div className="container">
          <span className="navbar-brand" href="#">
            <img src="./img/Brasil_Cidadao_logo.png" className="me-2" />
            Secretaria-Geral da Presidência da República
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item  menu">
                <a class="nav-link active" href="#">
                  Órgãos do Governo
                </a>
              </li>
              <li className="nav-item menu">
                <a className="nav-link" href="#">
                  Acesso à Informação
                </a>
              </li>
              <li className="nav-item menu">
                <a className="nav-link" href="#">
                  Legislação
                </a>
              </li>
              <li className="nav-item menu">
                <span className="nav-link">
                  <i className="fas fa-adjust"></i>
                </span>
              </li>
              <li className="nav-item menu">
                <span className="nav-link">
                  <i class="fas fa-headset"></i>
                </span>
              </li>
              <li className="nav-item menu">
                <a href="#" className="nav-link">
                  <img src="./img/avatar.png" height="30" />
                </a>
              </li>
              {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="drop-menu">
          <i style={{ fontSize: "25px" }} className="fa fa-bars"></i>
          <span className="ms-2">Imprensa Nacional</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
