import { useContext } from "react";
import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

import "./finalizar.css";
function FinalizarPage() {
  const { mudarPage } = useContext(CreateContextGlobal);

  return (
    <section>
      <div className="container">
        <div className="row menu-border">
          <div className="col-6">
            <div className="d-flex">
              <p className="texto-cancelar">Voltar e editar</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <button className="avançar" onClick={mudarPage}>
              finalizar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalizarPage;
