import "./avancar-page.css";

function AvancaPage() {
  return (
    <section>
      <div className="container">
        <div className="row menu-border">
          <div className="col-6">
            <div className="d-flex">
              <p className="texto-cancelar">cancelar</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <button className="avançar">Avançar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvancaPage;
