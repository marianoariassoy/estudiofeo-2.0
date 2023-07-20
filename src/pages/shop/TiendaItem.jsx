import { Link } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";

const TiendaItem = ({ data }) => {
  return (
    <article className="aspect-square object-cover overflow-hidden relative">
      <Link to={`/shop/${data.id}`} className="absolute z-20 w-full h-full top-0 p-6 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-end">
        <div className="text-white text-xl w-full">
          <h3>{data.title}</h3>
          <h3 className="font-bold">{data.subtitle}</h3>
        </div>
      </Link>
      <ImageComponent src={`${data.image}`} alt={data.title} />
    </article>
  );
};

export default TiendaItem;
