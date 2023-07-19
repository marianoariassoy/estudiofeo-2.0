import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Item from "./ItemMain";
import { IconScroll } from "../../icons/icons";

const Creaciones = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/categorias/${lan}`);

  useEffect(() => {
    const menuLinks = document.querySelectorAll(".scroll");

    menuLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }, [data]);

  return (
    <section className="px-12 pt-28 bg-secondary" id="creaciones">
      <div className="flex justify-between items-center mb-20">
        <div>
          <h1 className="font-bold text-6xl">
            {lan === "es" ? "creaciones" : "creations"} <span className="font-extraitalic">feas</span>
          </h1>
        </div>
        <div>
          <IconScroll />
        </div>
      </div>

      <div className="flex flex-wrap gap-y-8 justify-center">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask={item.id} />)}</div>
    </section>
  );
};

export default Creaciones;
