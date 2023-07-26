import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Efimeros = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/efimeros/${lan}`);

  return (
    <section className="pt-28 bg-secondary">
      <h1 className="font-bold text-6xl mb-20">
        {lan === "es" ? "efímeros" : "ephemeral"} <span className="font-extraitalic">& feos</span>
      </h1>

      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="5" />)}</div>
    </section>
  );
};

export default Efimeros;
