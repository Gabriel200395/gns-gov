import React from "react";
import "./menu-nova-edicao.css";
function MenuNovaEdicao() {
  return (
    <section>
      <div className="container ">
        <div className="row content-border">
          <div className="col-12 d-flex align-items-center justify-content-center flex-column">
            <img className="page-imagem" src="./img/Vector.png" />
            <h1 className="mt-5 titulo">Nova Edição</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="d-flex flex-column align-items-center">
            <span className="round-nova">1</span>
            <p></p>
          </div>
          <div className="col-6 border-menu"></div>
          <div className="d-flex flex-column align-items-center">
            <span className="round-two-nova">2</span>
            <p></p>
          </div>
        </div>
        <div className="texto-border">
          <p className="nova-edicao">Nova Edição</p>
          <p className="revisao-finalizacao">Revisão e finalização</p>
        </div>
      </div>
    </section>
  );
}

export default MenuNovaEdicao;
