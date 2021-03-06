import "./avancar-page.css";
import { Link } from "react-router-dom";
function AvancaPage() {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center menu-border-avanca-page">
          <div className="col-6 ps-0">
            <div className="d-flex rodape-avanca">
              <Link to="/bem-vindo">
                <button className="cancelar">Cancelar</button>
              </Link>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end pe-0">
            <Link to="/nova-edicao-avancar">
              <button className="avançar">Avançar</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvancaPage;
