import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./Item";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Arte = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/arte/${lan}`);

  useEffect(() => {
    GsapLogo(".data-hidden-arte");
  }, []);

  return (
    <section className="px-16 pt-28 bg-secondary" id="arte">
      <div className="data-hidden-arte mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "arte" : "art"} <span className="font-extraitalic">feo</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="2" />)}</div>
      </div>
    </section>
  );
};

export default Arte;
