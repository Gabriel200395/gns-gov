import "../../Components/Formulario/formulario.css";

function TextoContainer({ titulo }) {
  return (
    <div className="d-flex align-items-center">
      <h4 className="titulo-form">{titulo}</h4>
      <i className="fa fa-question-circle mt-2 ms-1" id="question"></i>
    </div>
  );
}

export default TextoContainer;
