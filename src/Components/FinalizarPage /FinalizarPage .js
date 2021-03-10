// import { useContext } from "react";
// import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

import { Link } from "react-router-dom";
import "./finalizar.css";
function FinalizarPage() {
  return (
    <section>
      <div className="container">
        <div className="row  align-items-center menu-border">
          <div className="col-6 ps-0">
            <div className="d-flex rodape-avanca">
              <Link to="/nova-edicao">
                <button className="voltar">Voltar e editar</button>
              </Link>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end pe-0">
            <button className="avançar">Finalizar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalizarPage;
