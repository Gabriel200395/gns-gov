import "./revisao-finalizacao.css";
import { Link } from "react-router-dom";
function MenuFinalizacao() {
  return (
    <section>
      <div className="container ">
        <div className="row content-border">
          <div className="col-12 d-flex align-items-center justify-content-center flex-column">
            <img
              className="page-imagem-finalizar"
              src="./img/Vector.png"
              alt="imagem"
            />
            <h1 className="titulo">Nova edição</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center wizard">
          <div className="d-flex flex-column align-items-center">
            <Link to="/nova-edicao" className="round">
              1
            </Link>
            <p></p>
          </div>
          <div className="col-6 border-menu-finalizar"></div>
          <div className="d-flex flex-column align-items-center">
            <span className="round-two">2</span>
            <p></p>
          </div>
        </div>
        <div className="texto-border">
          <p className="nova-edicao-finalizar">Nova Edição</p>
          <p className="revisao-menu-finalizacao">Revisão e finalização</p>
        </div>
      </div>
    </section>
  );
}

export default MenuFinalizacao;
