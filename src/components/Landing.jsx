import { Link } from "react-router-dom";
import { useDataContext } from "../context/lanContext";
import ImageComponent from "./ImageComponent";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import TextHTML from "../hooks/useHTML";

const Landing = ({ id, section }) => {
  const { lan } = useDataContext();

  const { data, loading } = useFetch(`/landings/${lan}/${id}`);

  return (
    <section>
      <div className="galeria-item">
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
              <Link to={`/${section}/${id}`} className="hover:opacity-80 transition-all">
                <ImageComponent src={`${data[0].image}`} />
              </Link>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Landing;
