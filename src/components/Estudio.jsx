import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import TextHTML from "../../hooks/useHTML";
import GsapHeader from "../../utils/GsapHeader";
import GsapLogo from "../../utils/GsapLogo";

const Estudio = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/estudio/${lan}`);

  useEffect(() => {
    GsapHeader(".data-light-estudio");
    GsapLogo(".data-hidden-estudio");
  }, []);

  return (
    <>
      <section className="px-16 pt-28 pb-10 bg-secondary" id="estudio">
        <div className="data-hidden-estudio flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "estudio" : "studio"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to="/estudio/77" className="border-2 border-black rounded-full px-4 py-1 font-bold hover:opacity-60">
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
            <div className="bg-black p-16 text-secondary flex flex-col justify-between aspect-square lg:aspect-auto">
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
              <Link to={`/estudio/${data[0].id}`} className="hover:opacity-80">
                <ImageComponent src={`${data[0].image}`} />
              </Link>
            </div>
          </article>
        )}
      </section>
    </>
  );
};

export default Estudio;
