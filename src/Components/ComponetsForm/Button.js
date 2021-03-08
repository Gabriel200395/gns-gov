import "../../Components/Formulario/formulario.css";
function Button({ des }) {
  return (
    <div className="col-2">
      <button className="button">{des}</button>
    </div>
  );
}

export default Button;
