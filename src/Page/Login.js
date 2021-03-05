import { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import SubRodape from "../Components/SubRodape/SubRodape";
import Informacao from "../Components/Informacao/Informacao";
import NavbarLogin from "../Components/ComponentsLogin/NavbarLogin/NavbarLogin";
import Formulario from "../Components/ComponentsLogin/Formulario/Formulario";

function Login() {
  return (
    <section>
      <NavbarLogin />
      <Formulario />
      <Informacao />
      <Footer />
      <SubRodape />
    </section>
  );
}

export default Login;
