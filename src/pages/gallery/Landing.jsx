import { Link } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import TextHTML from "../../hooks/useHTML";
import Loader from "../../components/Loader";

const Galeria = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/galeria/${lan}`);
  const { data: dataTextos, loading: loadingTextos } = useFetch(`/post/${lan}/131`);

  return (
    <>
      <section className="px-12 pt-36 pb-10" id="galeria">
        <div className="flex justify-between items-center">
          <div className="data-hidden-galeria">
            <h1 className="font-bold text-6xl">
              {lan === "es" ? "galería" : "galery"} <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <Link to="/gallery/131" className="border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white">
              {lan === "es" ? "VER MÁS" : "MORE"}
            </Link>
          </div>
        </div>
      </section>

      <section className="data-light-galeria galeria-item">
        {loading ? (
          <Loader />
        ) : (
          data &&
          dataTextos && (
            <article className="galeria-item grid lg:grid-cols-2">
              <div className="bg-black p-12 text-secondary flex flex-col justify-between aspect-square lg:aspect-auto">
                <div>
                  <h3 className="text-xl">{data[0].subtitle}</h3>
                  <h1 className="text-6xl lg:text-7xl font-bold mb-8">{data[0].title}</h1>
                </div>
                <div className="font-bold">
                  <h2 className="mb-4">{dataTextos[0].title}</h2>
                  <TextHTML text={dataTextos[0].text} />
                </div>
              </div>
              <div className="overflow-hidden aspect-square lg:aspect-auto">
                <Link to={`/gallery/131`} className="hover:opacity-80 transition-all">
                  <ImageComponent src={`${dataTextos[0].image}`} />
                </Link>
              </div>
            </article>
          )
        )}
      </section>
    </>
  );
};

export default Galeria;
