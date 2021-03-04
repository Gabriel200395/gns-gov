import "./footer.css";

function Footer() {
  return (
    <section className="rodape">
      <div className="container">
        <div className="row">
          <div className="col-6 midias-sociais">
            <span className="ms-3 redes-sociais-titulo">Redes Sociais</span>
            <ul className=" d-flex ps-0">
              <li>
                <a
                  className="fab fa-facebook-f"
                  href="https://www.facebook.com/govbrdigital"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-twitter"
                  href="https://twitter.com/DigitalGovBr"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-instagram"
                  href="https://www.instagram.com/digitalgov.br/"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-youtube"
                  href="https://www.youtube.com/user/egovbr"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
          <div className="col-6 images-gov">
            <div className="d-flex justify-content-end">
              <img src="./img/acesso-informacao.png" alt="imagem" />
              <img src="./img/patria.png" alt="imagem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
