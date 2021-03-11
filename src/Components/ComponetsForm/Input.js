import { useState } from "react";
import "../../Components/Formulario/formulario.css";
function Input({ placeholder, ...props }) {
  const [estado, setEstado] = useState("");

  function handleChange({ target }) {
    setEstado(target.value);
  }

  function incremento() {
    setEstado(Number(estado) + 1);
  }

  function decremente() {
    setEstado(Number(estado) - 1);
  }

  return (
    <div className="col-2 input-number">
      <input
        type="number"
        placeholder={placeholder}
        value={estado}
        className="form-control"
        onChange={handleChange}
        {...props}
      />
      <button onClick={incremento}>
        <i className="fas  fa-chevron-up"></i>
      </button>
      <button onClick={decremente}>
        <i className="fas  fa-chevron-down"></i>
      </button>
    </div>
  );
}

export default Input;
