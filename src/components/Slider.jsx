import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { useDataContext } from "../../context/lanContext";
import "react-slideshow-image/dist/styles.css";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import GsapHeader from "../../utils/GsapHeader";

const SliderItem = ({ id, src, date, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GsapHeader(".data-light-slider");
  }, []);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative slider-home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="absolute bottom-0 z-10 text-white px-16 py-20">
            <Link to={`/novedades/${id}`} className="text-white hover:text-black">
              <h2 className="font-extraitalic text-3xl">{date}</h2>
              <h1 className="font-extrabold text-6xl">{title}</h1>
            </Link>
          </div>
          <img src={src} alt={title} className="h-full w-full object-cover" />
        </>
      )}
    </div>
  );
};

const Slider = () => {
  const { lan, imageURL } = useDataContext();
  const { data, loading } = useFetch(`/novedades/${lan}`);

  const properties = {
    arrows: false,
    transitionDuration: 600,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };

  return (
    <section className="slider-home mt-44 data-light-slider" id="novedades">
      {loading ? <Loader /> : <Slide {...properties}>{data && data.map((item) => <SliderItem key={item.id} id={item.id} src={`${imageURL}${item.image}`} date={item.date} title={item.title} />)}</Slide>}
    </section>
  );
};

export default Slider;
