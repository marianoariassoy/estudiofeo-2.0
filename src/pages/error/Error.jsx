import Layout from "../../layout/Layout";
import { useDataContext } from "../../context/lanContext";
const About = () => {
  const { lan } = useDataContext();

  return (
    <Layout>
      <section className="px-12 pt-64 h-full flex justify-center items-center text-3xl font-bold">{lan === "es" ? "Página no encontrada :-(" : "Page not found :-("}</section>
    </Layout>
  );
};

export default About;
