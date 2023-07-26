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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Layout>
      <section className="relative aspect-video mt-32">
        <Helmet>
          <title>FEO</title>
        </Helmet>

        <div className="absolute w-screen h-screen px-12">
          <div className="absolute bottom-48 flex flex-col gap-y-2 z-10">
            {menu.slice(0, 3).map((item) => (
              <Link to={item.url} className="text-white text-6xl font-bold hover:text-black" key={item.id}>
                {lan === "es" ? item.title : item.title_eng}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-screen bg-black">{isLoading ? <BeatLoader /> : <img src={src} className="fade-in h-full w-full object-cover" />}</div>
      </section>
    </Layout>
  );
};

export default Home;
