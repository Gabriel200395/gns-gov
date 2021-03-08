import "./content-pages.css";
import { Link } from "react-router-dom";
function ContentPages() {
  return (
    <section>
      <div className="container pages">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-2  container-nova-edicao">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="page-icon"
                  src="./img/Vector.png"
                  alt="imagem"
                />
                <Link to="/nova-edicao" style={{ textDecoration: "none" }}>
                  <h4 className="titulo-nova-edicao">Nova edição</h4>
                </Link>
              </div>
            </div>
            <div className="col-2 edicao-modelo">
              <div className="d-flex flex-column align-items-center">
                <img
                  className="page-icon"
                  src="./img/Vector1.png"
                  alt="imagem"
                />
                <h4 className="titulo-edicao-modelo">
                  Edição a partir de modelo
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentPages;
