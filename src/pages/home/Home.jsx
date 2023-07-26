import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import { menu } from "../../data/data";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const { lan } = useDataContext();
  const [isLoading, setIsLoading] = useState(true);
  const src = "./assets/images/bg-home.jpg";

  useEffect(() => {
    window.scrollTo(0, 0);
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Layout>
      <section className="w-full h-screen px-12 pt-32   flex items-end pb-20">
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

        <div className="absolute top-0 left-0 -z-10 w-full h-full bg-black">{isLoading ? <BeatLoader /> : <img src={src} className="fade-in h-full w-full object-cover" />}</div>
      </section>
    </Layout>
  );
};

export default Home;
