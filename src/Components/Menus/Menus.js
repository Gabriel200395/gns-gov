import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
function Menus({ menuItem }) {
  return (
    <section>
      <div className="container content-border-menu">
        <nav className="menu-home" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item " aria-current="page">
              <a href="/">
                <i className="fas fa-home" id="home"></i>
              </a>
            </li>
            <li className="breadcrumb-item nome-plataforma" aria-current="page">
              <Link to="/bem-vindo">Nome da plataforma</Link>
            </li>
            <li className="breadcrumb-item menu-bem-vindo">{menuItem}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Menus;
