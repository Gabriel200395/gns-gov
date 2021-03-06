import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import MenuNovaEdicao from "../Components/MenuNovaEdicao/MenuNovaEdicao";
import Formulario from "../Components/Formulario/Formulario";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import AvancaPage from "../Components/AvancaPage/AvancaPage";
import { useEffect } from "react";

function NovaEdicao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Navbar />
      <Menus menuItem="Nova edição" />
      <MenuNovaEdicao />
      <Formulario />
      <AvancaPage />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default NovaEdicao;
