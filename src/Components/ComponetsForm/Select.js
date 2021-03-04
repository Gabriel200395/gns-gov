import "../../Components/Formulario/formulario.css";

function Select({ option }) {
  return (
    <div className="col-3">
      <select selected className="form-select">
        <option selected>{option}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}

export default Select;
