import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import Menus from "../Components/Menus/Menus";

function BemVindo() {
  return (
    <section>
      <Navbar />
      <Menus />

      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default BemVindo;
