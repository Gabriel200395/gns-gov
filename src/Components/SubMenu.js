import "../css/subMenu.css";
function SubMenu() {
  return (
    <div className="container">
      <div className="row">
        <div className="icons">
          <i className="fas fa-home" id="home"></i>
          <i className="fas fa-chevron-right" id="right-icon"></i>
          <p>Nome da plataforma</p>
          <i className="fas fa-chevron-right" id="right-icon"></i>
          <p> Nova edição</p>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
