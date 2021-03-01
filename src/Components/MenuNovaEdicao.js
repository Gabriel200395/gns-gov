import "../css/menuNovaEdiacao.css";
function MenuNovaEdicao() {
  return (
    <div className="container">
      <section className="content-nova-edicao">
        <div className="content">
          <i className="fas fa-file" id="icon"></i>
          <h1 className="titulo">Nova Ediçao</h1>
        </div>
        <div className="menu-pagina-nova-edicao">
          <span>1</span>
          <div className="border-menu"></div>
          <span>2</span>
        </div>
        <div className="numero-pagina-nova">
          <h6>Nova ediçāo</h6>
          <h6>Revisão e finalizaçāo</h6>
        </div>
      </section>
    </div>
  );
}

export default MenuNovaEdicao;
