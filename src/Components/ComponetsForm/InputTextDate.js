import "../../Components/Formulario/formulario.css";

function InputTextDate({ placeholder, type, ...props }) {
  return (
    <div className="col-3 ">
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...props}
      />
    </div>
  );
}

export default InputTextDate;
