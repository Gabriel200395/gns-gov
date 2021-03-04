import React from "react";
import "./formulario.css";
import TextoContainer from "../ComponetsForm/TextoContainer";
function Formulario() {
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
                    <p className="layout-selecionado">Layout selecionado: </p>
                    <p className="pagina-simples">Página simples</p>
                    <i className="fas fa-edit ms-1 icon"></i>
                  </div>

                  <div className="col-2">
                    <button className="selecionar-layout">
                      Selecionar Layout
                    </button>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <h4 className="titulo-form">
                      Tipo de papel, orientação, largura e altura
                    </h4>
                    <i
                      className="fa fa-question-circle mt-2 ms-1"
                      id="question"
                    ></i>
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <select
                        className="form-select font"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <select
                        selected
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        placeholder="210,000 mm"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        placeholder="210,000 mm"
                        id="inputPassword6"
                        className="form-control "
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <h4 className="titulo-form">
                    Considerar primeira página como capa ?
                  </h4>
                  <div className="row">
                    <div className="col-2">
                      <button className="button">sim</button>
                    </div>
                    <div className="col-2">
                      <button className="button ms-2">não</button>
                    </div>
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
