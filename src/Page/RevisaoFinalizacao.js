import React from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import AvancaPage from "../Components/AvancaPage/AvancaPage";
import MenuFinalizacao from "../Components/MenuFinalizacao/MenuFinalizacao";
import SobreSistema from "../Components/SobreSistema/SobreSistema";
import FormularioRevisao from "../Components/FormularioRevisao/FormularioRevisao";
function RevisaoFinalizacao() {
  return (
    <section>
      <Navbar />
      <Menus />
      <MenuFinalizacao />
      <SobreSistema />
      <FormularioRevisao />
      <AvancaPage />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default RevisaoFinalizacao;
