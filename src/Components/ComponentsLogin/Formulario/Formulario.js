import "./form.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Formulario() {
  const [password, setPassword] = useState(false);

  function handleInput() {
    setPassword(!password);
  }

  return (
    <section>
      <div className="container page-login">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="col-md-12 col-sm-12 content-form">
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
                      className="input-usuario"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="label">Senha</label>
                    <div className="input-icone">
                      <input
                        type={password ? "text" : "password"}
                        placeholder="Sua senha entre 8 e 16 digitos"
                        className="input "
                      />
                      <i
                        className={password ? "fas fa-eye-slash" : "fas fa-eye"}
                        onClick={handleInput}
                      ></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a className="link" href="/tes">
                      Esqueceu a senha?
                    </a>
                    <a className="link" href="/tes">
                      Primeiro acesso?
                    </a>
                  </div>
                  <Link to="/bem-vindo" style={{ textDecoration: "none" }}>
                    <button className="entrar  col-sm-12">Entrar</button>
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
