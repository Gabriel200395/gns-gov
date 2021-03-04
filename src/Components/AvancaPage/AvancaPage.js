import { useContext } from "react";
import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

import "./avancar-page.css";
function AvancaPage() {
  const { mudarPage } = useContext(CreateContextGlobal);

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
            <button className="avançar" onClick={mudarPage}>
              Avançar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvancaPage;
