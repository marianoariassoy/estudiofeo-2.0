import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { menu } from "../../data/data";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";
import Layout from "../../layout/Layout";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const { lan, setSection, imageURL } = useDataContext();
  const [isLoading, setIsLoading] = useState(true);

  let imageSrc = "";
  const windowsWidth = window.innerWidth;
  if (windowsWidth < 768) {
    imageSrc = imageURL + "bg-home-portrait.jpg";
  } else {
    imageSrc = imageURL + "bg-home.jpg";
  }

  useEffect(() => {
    setSection("home");
    window.scrollTo(0, 0);

    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [setSection, imageSrc]);

  return (
    <Layout>
      <section className="relative h-screen overflow-hidden mt-32">
        <Helmet>
          <title>FEO</title>
        </Helmet>

        <div className="absolute w-screen h-screen px-12">
          <div className="absolute bottom-48 flex flex-col gap-y-2 z-10">
            {menu.slice(0, 3).map((item) => (
              <Link
                to={item.url}
                className="text-white text-6xl font-bold hover:text-black"
                key={item.id}
              >
                {lan === "es" ? item.title : item.title_eng}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
          {isLoading ? (
            <BeatLoader />
          ) : (
            <img
              src={imageSrc}
              className="fade-in h-full w-full object-cover"
              alt="Hero image"
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
