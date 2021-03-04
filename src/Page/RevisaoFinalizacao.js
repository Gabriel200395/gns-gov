import React from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import MenuNovaEdicao from "../Components/MenuNovaEdicao/MenuNovaEdicao";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import AvancaPage from "../Components/AvancaPage/AvancaPage";

function RevisaoFinalizacao() {
  return (
    <section>
      <Navbar />
      <Menus />
      <MenuNovaEdicao />
      <AvancaPage />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default RevisaoFinalizacao;
