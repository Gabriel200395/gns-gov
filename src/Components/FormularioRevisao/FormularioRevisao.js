import TextoContainer from "../ComponetsForm/TextoContainer";
import InputTextDate from "../ComponetsForm/InputTextDate";
import Button from "../ComponetsForm/Button";
import "./formulario-revisao.css";
import { useContext } from "react";
import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

function FormularioRevisao() {
  const { handleSubmit } = useContext(CreateContextGlobal);

  return (
    <div className="container formulario-revisao">
      <div className="row">
        <div className="col-12 espacamento-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 espacamento-container">
                <TextoContainer titulo="Data de publicação" />
                <InputTextDate type="date" />
              </div>

              <div className="col-12 espacamento-container">
                <TextoContainer titulo="Definir como edição modelo?" />
                <Button />
              </div>

              <div className="col-12 espacamento-container ">
                <TextoContainer titulo="Nome da edição" />
                <InputTextDate placeholder="Modelo exemplo" type="text" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioRevisao;
