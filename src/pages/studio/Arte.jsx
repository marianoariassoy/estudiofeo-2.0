import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Arte = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/arte/${lan}`);

  return (
    <section className="pt-28 bg-secondary">
      <h1 className="font-bold text-6xl mb-20">
        {lan === "es" ? "arte" : "art"} <span className="font-extraitalic">feo</span>
      </h1>

      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="2" />)}</div>
    </section>
  );
};

export default Arte;
