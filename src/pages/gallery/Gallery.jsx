import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Landing from "../../components/Landing";
import { useDataContext } from "../../context/lanContext";
import Tienda from "../../components/Tienda";
import { Helmet } from "react-helmet";
const Gallery = () => {
  const { lan, setSection } = useDataContext();
  const id = 131;

  useEffect(() => {
    setSection("gallery");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [setSection]);

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Galería" : "Gallery"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "galería" : "gallery"} <span className="font-extraitalic">feo</span>
        </h1>
      </section>
      <Landing id={id} section="gallery" />
      <Tienda section="gallery" title={lan === "es" ? "exposiciones" : "exhibitions"} />
    </Layout>
  );
};

export default Gallery;
