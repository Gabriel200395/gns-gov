function InputLarge({ placeholder, type, ...props }) {
  return (
    <div className="col-3">
      <input
        type={type}
        placeholder={placeholder}
        id="inputPassword6"
        className="form-control"
        aria-describedby="passwordHelpInline"
        {...props}
      />
    </div>
  );
}

export default InputLarge;
