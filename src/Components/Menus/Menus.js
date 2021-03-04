import React from "react";

function Menus() {
  return (
    <section>
      <div className="container content-border-menu">
        <nav
          className="mt-3 "
          // style="--bs-breadcrumb-divider: '>';"
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item " aria-current="page">
              <i className="fas fa-home" id="home"></i>
            </li>
            <li className="breadcrumb-item " aria-current="page">
              Nome da plataforma
            </li>
            <li className="breadcrumb-item ">Nova edição</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default Menus;
