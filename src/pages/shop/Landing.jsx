import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import TextHTML from "../../hooks/useHTML";

const Landing = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/tienda/${lan}`);

  return (
    <>
      <section className="px-12 pt-36 pb-10" id="estudio">
        <div className="data-hidden-estudio flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "tienda" : "shop"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to="/shop/130" className="border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white">
              {lan === "es" ? "VER MÁS" : "MORE"}
            </Link>
          </div>
        </div>
      </section>

      <section className="data-light-estudio galeria-item">
        {loading ? (
          <Loader />
        ) : (
          <article className="galeria-item grid lg:grid-cols-2">
            <div className="bg-black p-12 text-secondary flex flex-col justify-between aspect-square lg:aspect-auto">
              <div>
                <h3 className="text-xl">{data[0].subtitle}</h3>
                <h1 className="text-6xl lg:text-7xl font-bold mb-8">{data[0].title}</h1>
              </div>
              <div>
                <div className="font-bold mb-8">
                  <TextHTML text={data[0].text} />
                </div>
              </div>
            </div>
            <div className="overflow-hidden aspect-square lg:aspect-auto">
              <Link to={`/shop/${data[0].id}`} className="hover:opacity-80 transition-all">
                <ImageComponent src={`${data[0].image}`} />
              </Link>
            </div>
          </article>
        )}
      </section>
    </>
  );
};

export default Landing;
