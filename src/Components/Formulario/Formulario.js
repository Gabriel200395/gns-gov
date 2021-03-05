import { useContext } from "react";
import "./formulario.css";
import TextoContainer from "../ComponetsForm/TextoContainer";
import Input from "../ComponetsForm/Input";
import Select from "../ComponetsForm/Select";
import Button from "../ComponetsForm/Button";
import InputLarge from "../ComponetsForm/InputLarge";
// import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";

function Formulario() {
  // const { handleSubmit } = useContext(CreateContextGlobal);

  return (
    <section className="formulario">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-12">
                  <TextoContainer titulo="Selecione o layout desejado para o documento" />
                  <div className="d-flex">
                    <p className="layout-selecionado">Layout selecionado:</p>
                    <p className="pagina-simples">Página simples</p>
                    <i className="fas fa-edit ms-2 icon"></i>
                  </div>
                  <div className="col-2">
                    <button className="selecionar-layout">
                      Selecionar Layout
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <TextoContainer titulo="Tipo de papel, orientação, largura e altura" />
                  <div className="row">
                    <Select option="Papel padrão A4" />
                    <Select option="Orientação: Retrato" />
                    <Input placeholder="210,000 mm" />
                    <Input placeholder="290,000 mm" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Margem esquerda, direita, superior e inferior" />
                  <div className="row">
                    <Input placeholder="210,000 mm" />
                    <Input placeholder="210,000 mm" />
                    <Input placeholder="210,000 mm" />
                    <Input placeholder="210,000 mm" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Tipo de papel, orientação, largura e altura" />
                  <div className="row">
                    <Button des="sim" />
                    <Button des="não" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Quantidade prevista de páginas" />
                  <div className="row">
                    <InputLarge placeholder="150" type="number" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Quantidade de colunas por página e espaçamento entre colunas" />
                  <div className="row">
                    <Input placeholder="2" />
                    <Input placeholder="2.500 mm" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Qual será altura das linhas e o espaçamento entrelinhas?" />
                  <div className="row">
                    <Input placeholder="2.500 mm" />
                    <Input placeholder="1.500 mm" />
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
                  <TextoContainer titulo="Será necessário o uso de sangrias?" />
                  <div className="row">
                    <Button des="sim" />
                    <Button des="não" />
                  </div>
                </div>

                <div className="col-12">
                  <TextoContainer titulo="Sangria esquerda, direita, superior e inferior" />
                  <div className="row">
                    <Input placeholder="20,000 mm" />
                    <Input placeholder="0,000 mm" />
                    <Input placeholder="0,000 mm" />
                    <Input placeholder="0,000 mm" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
