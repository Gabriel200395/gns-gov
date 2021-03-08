import React, { useContext } from "react";
import "./drop.css";
import { CreateContextGlobal } from "../../GlobalContext/GlobalContex";
function Drop() {
  const { open, dropMenu } = useContext(CreateContextGlobal);

  return (
    <div className="container">
      <div className="row" style={{ flexDirection: "column-reverse" }}>
        <div id="myLinks" style={{ display: open ? "none" : "block" }}>
          <div className="drop-menu">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span onClick={dropMenu}>
            {open ? (
              <i id="drop" className="fa fa-bars"></i>
            ) : (
              <i id="drop" class="fas fa-times"></i>
            )}
          </span>
          <h4 className="imprensa-nacional ms-2">Imprensa Nacional</h4>
        </div>
      </div>
    </div>
  );
}

export default Drop;
