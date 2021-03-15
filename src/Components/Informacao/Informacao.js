import "./informacao.css";

function Informacao() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex ajudar justify-content-md-end justify-content-ms-center">
            <div className="d-flex">
              <p className="texto-ajudar ms-5 ">
                Precisa de ajuda ou encontrou algum erro?
              </p>
              <i className="fas fa-headset" id="icon"></i>
              <i className="fas fa-comment" id="icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informacao;
