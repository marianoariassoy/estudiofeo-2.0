import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Muebles = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/muebles/${lan}`);

  useEffect(() => {
    GsapLogo(".data-hidden-muebles");
  }, []);

  return (
    <section className="px-16 pt-28 bg-secondary" id="muebles">
      <div className="data-hidden-muebles mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "muebles" : "forniture"} <span className="font-extraitalic">feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="4" />)}</div>
      </div>
    </section>
  );
};

export default Muebles;
