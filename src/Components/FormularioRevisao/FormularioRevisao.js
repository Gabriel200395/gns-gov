import TextoContainer from "../ComponetsForm/TextoContainer";
import InputLarge from "../ComponetsForm/InputLarge";
import Button from "../ComponetsForm/Button";
import "./formulario-revisao.css";

function FormularioRevisao() {
  return (
    <div className="container formulario-revisao">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="row">
              <div className="col-12">
                <TextoContainer titulo="Data de publicação" />
                <div className="row">
                  <InputLarge type="date" />
                </div>
              </div>

              <div className="col-12">
                <TextoContainer titulo="Definir como edição modelo?" />
                <div className="row">
                  <Button des="sim" />
                  <Button des="não" />
                </div>
              </div>

              <div className="col-12 container-espacamento">
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
