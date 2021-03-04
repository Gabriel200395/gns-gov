import "../../Components/Formulario/formulario.css";
function Input({ placeholder, ...props }) {
  return (
    <div className="col-2">
      <input
        type="number"
        placeholder={placeholder}
        id="inputPassword6"
        className="form-control"
        aria-describedby="passwordHelpInline"
        {...props}
      />
    </div>
  );
}

export default Input;