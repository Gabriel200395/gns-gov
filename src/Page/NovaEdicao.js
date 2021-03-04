import { useContext } from "react";
import Menus from "../Components/Menus/Menus";
import Navbar from "../Components/Navbar/Navbar";
import MenuNovaEdicao from "../Components/MenuNovaEdicao/MenuNovaEdicao";
import Formulario from "../Components/Formulario/Formulario";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import AvancaPage from "../Components/AvancaPage/AvancaPage";
import RevisaoFinalizacao from "../Page/RevisaoFinalizacao";
import { CreateContextGlobal } from "../GlobalContext/GlobalContex";
function NovaEdicao() {
  const { page } = useContext(CreateContextGlobal);

  return (
    <section>
      {page ? (
        <>
          <Navbar />
          <Menus />
          <MenuNovaEdicao />
          <Formulario />
          <AvancaPage />
          <Informacao />
          <Footer />
          <SubRodape />
        </>
      ) : (
        <RevisaoFinalizacao />
      )}
    </section>
  );
}

export default NovaEdicao;
