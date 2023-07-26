import Item from "./Item";
import { useDataContext } from "../../context/lanContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Alianzas = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/alianzas/${lan}`);

  return (
    <section className="pt-28 bg-secondary">
      <h1 className="font-bold text-6xl mb-20">
        {lan === "es" ? "alianzas" : "aliances"} <span className="font-extraitalic">feas</span>
      </h1>

      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="6" />)}</div>
    </section>
  );
};

export default Alianzas;
