import { Link } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";

const TiendaItem = ({ data }) => {
  return (
    <article className="tienda-item aspect-square object-cover overflow-hidden relative">
      <Link to={`/tienda/${data.id}`} className="absolute z-20 w-full h-full top-0 p-10 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-between">
        <div>
          {data.logo ? (
            <div className="w-28">
              <ImageComponent src={`${data.logo}`} alt={data.title} />{" "}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="text-white text-xl">
          <h3>{data.title}</h3>
          <h3 className="font-bold">{data.subtitle}</h3>
        </div>
      </Link>
      <ImageComponent src={`${data.image}`} alt={data.title} />
    </article>
  );
};

export default TiendaItem;
