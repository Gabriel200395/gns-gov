import TextoContainer from "../ComponetsForm/TextoContainer";
import InputLarge from "../ComponetsForm/InputLarge";
import Button from "../ComponetsForm/Button";

function FormularioRevisao() {
  return (
    <div className="container" style={{ marginBottom: "60px" }}>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="row">
              <div className="col-12">
                <TextoContainer titulo="Quantidade prevista de páginas" />
                <div className="row">
                  <InputLarge type="date" />
                </div>
              </div>

              <div className="col-12">
                <TextoContainer titulo="Definir automaticamente numeração nas páginas?" />
                <div className="row">
                  <Button des="sim" />
                  <Button des="não" />
                </div>
              </div>

              <div className="col-12">
                <TextoContainer titulo="Quantidade prevista de páginas" />
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
