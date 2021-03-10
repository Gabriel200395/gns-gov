import React from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import FinalizarPage from "../Components/FinalizarPage /FinalizarPage ";
import MenuFinalizacao from "../Components/MenuFinalizacao/MenuFinalizacao";
import SobreSistema from "../Components/SobreSistema/SobreSistema";
import FormularioRevisao from "../Components/FormularioRevisao/FormularioRevisao";
import { useEffect } from "react";

function RevisaoFinalizacao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Navbar />
      <Menus menuItem="Nova edição" />
      <MenuFinalizacao />
      <SobreSistema />
      <FormularioRevisao />
      <FinalizarPage />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default RevisaoFinalizacao;
