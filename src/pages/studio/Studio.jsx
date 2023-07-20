import Layout from "../../layout/Layout";
import Landing from "./Landing";
import Creaciones from "./Creaciones";
import Espacios from "./Espacios";
import Arte from "./Arte";
import Objetos from "./Objetos";
import Muebles from "./Muebles";
import Efimeros from "./Efimeros";
import Alianzas from "./Alianzas";

const Studio = () => {
  return (
    <Layout>
      <Landing />
      <Creaciones />
      <Espacios />
      <Arte />
      <Objetos />
      <Muebles />
      <Efimeros />
      <Alianzas />
    </Layout>
  );
};

export default Studio;
