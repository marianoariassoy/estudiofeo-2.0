import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Landing from "../../components/Landing";
import Creaciones from "./Creaciones";
// import Espacios from "./Espacios";
// import Arte from "./Arte";
// import Objetos from "./Objetos";
// import Muebles from "./Muebles";
// import Efimeros from "./Efimeros";
// import Alianzas from "./Alianzas";
import { useDataContext } from "../../context/lanContext";
import { Helmet } from "react-helmet";

const Studio = () => {
  const { lan } = useDataContext();
  const id = 135;

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Estudio" : "Studio"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "estudio" : "studio"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to={`/studio/${id}`} className="border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white">
              {lan === "es" ? "VER MÁS" : "MORE"}
            </Link>
          </div>
        </div>
      </section>
      <Landing id={id} section="studio" />
      <Creaciones />
      {/* <Muebles />
      <Espacios />
      <Objetos />
      <Efimeros />
      <Arte />
      <Alianzas /> */}
    </Layout>
  );
};

export default Studio;
