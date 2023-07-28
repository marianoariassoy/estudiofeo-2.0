import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

const TiendaItem = ({ data, section }) => {
  return (
    <article className="aspect-square object-cover overflow-hidden relative">
      <Link
        to={`/${section}/${data.id}`}
        className="absolute z-20 w-full h-full top-0 p-6 transition-all opacity-100 lg:opacity-0 hover:opacity-100 hover:backdrop-blur-md flex flex-col justify-end"
      >
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
