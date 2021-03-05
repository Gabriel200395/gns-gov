import "./avancar-page.css";
import { Link } from "react-router-dom";
function AvancaPage() {
  return (
    <section>
      <div className="container">
        <div className="row menu-border">
          <div className="col-6">
            <div className="d-flex">
              <p className="texto-cancelar">cancelar</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <Link to="/RevisaoFinalizacao">
              <button className="avançar">Avançar</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvancaPage;
