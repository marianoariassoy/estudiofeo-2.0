import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Landing from "../../components/Landing";
import Tienda from "../../components/Tienda";
import { useDataContext } from "../../context/lanContext";
import { Helmet } from "react-helmet";

const Shop = () => {
  const { lan } = useDataContext();
  const id = 130;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Tienda" : "Shop"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "tienda" : "shop"} <span className="font-extraitalic">feo</span>
        </h1>
      </section>
      <Landing id={id} section="shop" />
      <Tienda section="shop" title={lan === "es" ? "catálogo" : "catalogue"} />
    </Layout>
  );
};

export default Shop;
