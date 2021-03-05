import "./footer.css";

function Footer() {
  return (
    <section className="rodape">
      <div className="container">
        <div className="row">
          <div className="col-6 midias-sociais">
            <span className="ms-3 redes-sociais-titulo">REDES SOCIAIS</span>
            <ul className=" d-flex ps-0">
              <li>
                <a
                  href="https://www.facebook.com/govbrdigital"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/pt-br/orgaos-do-governo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/digitalgov.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/egovbr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
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
