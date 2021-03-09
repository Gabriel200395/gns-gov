import { useContext, useState } from "react";
import "../../Components/Formulario/formulario.css";
import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

function Button() {
  const { active, handleActive } = useContext(CreateContextGlobal);

  return (
    <div className="row">
      <div className="col-2">
        <button
          className={`button ${active === "btn-1" ? "button-active" : ""}  `}
          onClick={() => handleActive("btn-1")}
        >
          Sim
        </button>
      </div>
      <div className="col-2">
        <button
          className={`button ${active === "btn-2" ? "button-active" : ""}  `}
          onClick={() => handleActive("btn-2")}
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default Button;
