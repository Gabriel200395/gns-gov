import { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import NavbarLogin from "../Components/ComponentsLogin/NavbarLogin/NavbarLogin";
import Formulario from "../Components/ComponentsLogin/Formulario/Formulario";
import BemVindo from "./BemVindo";
import { CreateContextGlobal } from "../GlobalContext/GlobalContex";

function Login() {
  const { page } = useContext(CreateContextGlobal);

  return (
    <section>
      {page ? (
        <>
          <NavbarLogin />
          <Formulario />
          <Informacao />
          <Footer />
          <SubRodape />
        </>
      ) : (
        <BemVindo />
      )}
    </section>
  );
}

export default Login;
