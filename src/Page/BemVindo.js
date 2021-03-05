import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import Menus from "../Components/Menus/Menus";
import Texto from "../Components/ComponentsBemVindo/Texto/Texto";
import ContentPages from "../Components/ComponentsBemVindo/ContentPages/ContentPages";
import { useEffect } from "react";

function BemVindo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Navbar />
      <Menus menuItem="Bem-vindo" />
      <Texto />
      <ContentPages />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default BemVindo;
