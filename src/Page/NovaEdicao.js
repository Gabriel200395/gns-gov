import React from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import MenuNovaEdicao from "../Components/MenuNovaEdicao/MenuNovaEdicao";
import Formulario from "../Components/Formulario/Formulario";

function NovaEdicao() {
  return (
    <section>
      <Navbar />
      <Menus />
      <MenuNovaEdicao />
      <Formulario />
    </section>
  );
}

export default NovaEdicao;
