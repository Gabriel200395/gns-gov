import "./form.css";
import { Link } from "react-router-dom";
function Formulario() {
  return (
    <section>
      <div className="container page-login">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-12 content-form">
              <div className="d-flex flex-column align-items-center">
                <img src="./img/download 2.png" alt="" />
                <h5 className="plataforma">Nome da Plataforma</h5>
                <p className="uniao">Diário Oficial da União</p>
                <form>
                  <div className="d-flex flex-column">
                    <label className="label">Usuário</label>
                    <input
                      type="text"
                      placeholder="Digite seu usuário cadastrado"
                      className="input"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="label">Senha</label>
                    <input
                      type="password"
                      placeholder="Sua senha entre 8 e 16 digitos"
                      className="input"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <a className="link" href="">
                      Esqueceu a senha?
                    </a>
                    <a className="link" href="">
                      Primeiro Acesso?
                    </a>
                  </div>
                  <Link to="/Bemvindo" style={{ textDecoration: "none" }}>
                    <button className="entrar">Entrar</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
