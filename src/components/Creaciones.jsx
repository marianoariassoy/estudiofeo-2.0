import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import icon from "../../assets/images/icon-scroll.svg";
import Item from "./ItemMain";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Creaciones = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/categorias/${lan}`);

  useEffect(() => {
    GsapLogo(".data-hidden-creaciones");
  }, []);

  return (
    <section className="px-16 pt-28 bg-secondary" id="creaciones">
      <div className="flex justify-between items-center mb-20">
        <div className="data-hidden-creaciones">
          <h1 className="font-bold text-6xl">
            {lan === "es" ? "creaciones" : "creations"} <span className="font-extraitalic">feas</span>
          </h1>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>

      <div className="items-container-main pb-14">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask={item.id} />)}</div>
      </div>
    </section>
  );
};

export default Creaciones;
