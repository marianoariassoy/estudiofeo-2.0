import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Efimeros = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/efimeros/${lan}`);

  useEffect(() => {
    GsapLogo(".data-hidden-efimeros");
  }, []);

  return (
    <section className="px-16 pt-28 bg-secondary" id="efimeros">
      <div className="data-hidden-efimeros mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "efímeros" : "ephemeral"} <span className="font-extraitalic">& feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="5" />)}</div>
      </div>
    </section>
  );
};

export default Efimeros;
