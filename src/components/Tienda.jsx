import { useDataContext } from "../context/lanContext";
import TiendaItem from "./TiendaItem";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const Tienda = ({ section, title }) => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/products/${lan}/${section}`);

  return (
    <>
      <section className="px-12 pt-20 pb-10">
        <h1 className="mb-10 font-bold text-6xl">{title}</h1>
      </section>

      <section className="galeria-container px-12 grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-6 gap-4">{loading ? <Loader /> : data.map((item) => <TiendaItem key={item.id} data={item} section={section} />)}</section>
    </>
  );
};

export default Tienda;
