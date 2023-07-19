import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import { menu } from "../../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FEO</title>
        <meta
          name="description"
          content="Imaginemos.
Mundos que sean mezclas geniales de arte y funcionalidad estructural donde se entrelazan inextricablemente. Una razón proyectual capaz de conjugar la inspiración artística con las normativas funcionales. Mundos en el que los proyectistas, a través de líneas que trazan movimientos de pura expresividad, infundan en la materia del objeto su energía vital, la propia, y que ella se exprese en su forma. Arte aplicado a la industria, poesía utilitaria."
        />
        <meta property="og:title" content="FEO" />
        <meta property="og:url" content="https://estudiofeo.com" />
        <meta property="og:image" content="https://www.estudiofeo.com/assets/images/feo.jpg" />
        <meta property="og:image:alt" content="Estudio Feo" />
      </Helmet>
      <Layout>
        <section className="w-full h-screen px-12 pt-32 bg-gray-400 flex items-end pb-20">
          <div className="flex flex-col gap-y-2">
            {menu.map((item) => (
              <Link to={item.url} className="text-white text-6xl font-bold hover:text-black" key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
