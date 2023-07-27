import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Landing from "../../components/Landing";
import { useDataContext } from "../../context/lanContext";
import { Helmet } from "react-helmet";
const About = () => {
  const { lan, setSection } = useDataContext();
  const id = 77;

  useEffect(() => {
    setSection("about");
    window.scrollTo(0, 0);
  }, [setSection]);

  return (
    <Layout>
      <Helmet>
        <title>{lan === "es" ? "Nosotros" : "About"} FEO</title>
      </Helmet>
      <section className="px-12 pt-32 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "nosotros" : "about"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to={`/about/${id}`} className="border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white">
              {lan === "es" ? "VER MÁS" : "MORE"}
            </Link>
          </div>
        </div>
      </section>
      <Landing id={id} section="about" />
    </Layout>
  );
};

export default About;
