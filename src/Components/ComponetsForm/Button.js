import "../../Components/Formulario/formulario.css";
function Button({ des }) {
  return (
    <div className="col-2 me-md-4 me-xxl-0">
      <button className="button">{des}</button>
    </div>
  );
}

export default Button;
