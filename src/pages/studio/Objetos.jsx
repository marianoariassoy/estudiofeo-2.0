import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Objetos = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/objetos/${lan}`);

  return (
    <section className="pt-28 bg-secondary">
      <h1 className="font-bold text-6xl mb-20">
        {lan === "es" ? "objetos" : "objects"} <span className="font-extraitalic">feos</span>
      </h1>

      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="3" />)}</div>
    </section>
  );
};

export default Objetos;
