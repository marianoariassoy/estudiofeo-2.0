import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Espacios = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/espacios/${lan}`);

  useEffect(() => {
    GsapLogo(".data-hidden-espacios");
  }, []);

  return (
    <section className="px-16 pt-28 bg-secondary" id="espacios">
      <div className="data-hidden-espacios mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "espacios" : "spaces"} <span className="font-extraitalic">feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="1" />)}</div>
      </div>
    </section>
  );
};

export default Espacios;
