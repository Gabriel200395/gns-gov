import "../../Components/Formulario/formulario.css";
import ReactTooltip from "react-tooltip";

function TextoContainer({ titulo }) {
  return (
    <div className="d-flex align-items-center">
      <h4 className="titulo-form">{titulo}</h4>
      <i
        data-tip="hello world"
        className="fa fa-question-circle mt-2 ms-1"
        id="question"
      ></i>
      <ReactTooltip />
    </div>
  );
}

export default TextoContainer;
