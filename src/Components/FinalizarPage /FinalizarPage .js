// import { useContext } from "react";
// import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

import "./finalizar.css";
function FinalizarPage() {
  return (
    <section>
      <div className="container">
        <div className="row menu-border">
          <div className="col-6">
            <div className="d-flex">
              <p className="texto-cancelar">Voltar e Editar</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <button className="avançar">Finalizar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalizarPage;
