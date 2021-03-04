import "./sobre-sistema.css";

function SobreSistema() {
  return (
    <div className="container" style={{ height: "600px" }}>
      <div className="row">
        <h2 className="titulo-revisao">Revisão das informações do modelo</h2>
        <div className="row">
          <div className="col-6">
            <div className="informacao-texto">
              <p>layout selecionado:</p>
              <ul>
                <li>pagina simples</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p> Tipo de papel, orientação, largura e altura:</p>
              <ul>
                <li>Papel padrão A4</li>
                <li>Orientação em Retrato</li>
                <li>Largura de 210 mm</li>
                <li>Altura de 290 mm</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>Margem esquerda, direita, superior e inferior:</p>
              <ul>
                <li>Margem esquerda: 14 mm</li>
                <li>Margem direita: 14 mm</li>
                <li>Margem superior: 14 mm</li>
                <li>Margem inferior: 14 mm</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>
                Quantidade de colunas por página e espaçamento entre colunas:
              </p>
              <ul>
                <li>Quantidade de colunas: 2</li>
                <li>Espaçamento entre colunas: 2,500 mm</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="informacao-texto">
              <p>Qual será altura das linhas e o espaçamento entrelinhas?</p>
              <ul>
                <li>Altura das linhas: 2,000 mm</li>
                <li>Espaçamento entrelinhas: 1,500 mm</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>Considerar primeira página como capa?</p>
              <ul>
                <li>sim</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>Quantidade prevista de páginas:</p>
              <ul>
                <li>150 páginas</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>Definir automaticamente numeração nas páginas?</p>
              <ul>
                <li>Sim</li>
              </ul>
            </div>

            <div className="informacao-texto">
              <p>Sangria esquerda, direita, superior e inferior:</p>
              <ul>
                <li>Sangria esquerda: 20 mm</li>
                <li>Sangria direita: 0 mm</li>
                <li>Sangria superior: 0 mm</li>
                <li>Sangria inferior: 0 mm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreSistema;
