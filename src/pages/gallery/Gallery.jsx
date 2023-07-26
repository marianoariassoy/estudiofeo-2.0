import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Landing from "../../components/Landing";
import { useDataContext } from "../../context/lanContext";
import Tienda from "../../components/Tienda";
import { Helmet } from "react-helmet";
const Gallery = () => {
  const { lan } = useDataContext();
  const id = 131;

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Galería" : "Gallery"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "galería" : "gallery"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to={`/gallery/${id}`} className="border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white">
              {lan === "es" ? "VER MÁS" : "MORE"}
            </Link>
          </div>
        </div>
      </section>
      <Landing id={id} section="gallery" />
      <Tienda section="gallery" title={lan === "es" ? "exposiciones" : "exhibitions"} />
    </Layout>
  );
};

export default Gallery;
