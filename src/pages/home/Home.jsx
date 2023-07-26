import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import { menu } from "../../data/data";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";

const Home = () => {
  const { lan } = useDataContext();

  return (
    <Layout>
      <section className="w-full h-screen px-12 pt-32 bg-gray-400 flex items-end pb-20">
        <Helmet>
          <title>FEO</title>
        </Helmet>
        <div className="flex flex-col gap-y-2">
          {menu.slice(0, 3).map((item) => (
            <Link to={item.url} className="text-white text-6xl font-bold hover:text-black" key={item.id}>
              {lan === "es" ? item.title : item.title_eng}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
