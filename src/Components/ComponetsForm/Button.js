import "../../Components/Formulario/formulario.css";
function Button({ des }) {
  return (
    <div className="col-2 me-3">
      <button className="button">{des}</button>
    </div>
  );
}

export default Button;
