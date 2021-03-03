import React from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import MenuNovaEdicao from "../Components/MenuNovaEdicao/MenuNovaEdicao";

function NovaEdicao() {
  return (
    <section>
      <Navbar />
      <Menus />
      <MenuNovaEdicao />
    </section>
  );
}

export default NovaEdicao;
