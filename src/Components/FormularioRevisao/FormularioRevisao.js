import TextoContainer from "../ComponetsForm/TextoContainer";
import InputLarge from "../ComponetsForm/InputLarge";
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
          <form onClick={handleSubmit}>
            <div className="row">
              <div className="col-12 espacamento-container">
                <TextoContainer titulo="Data de publicação" />
                <div className="row">
                  <InputLarge type="date" />
                </div>
              </div>

              <div className="col-12 espacamento-container">
                <TextoContainer titulo="Definir como edição modelo?" />
                <div className="row">
                  <Button />
                </div>
              </div>

              <div className="col-12 espacamento-container ">
                <TextoContainer titulo="Nome da edição" />
                <div className="row">
                  <InputLarge placeholder="Modelo exemplo" type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioRevisao;
