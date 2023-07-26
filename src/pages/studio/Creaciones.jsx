import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./ItemMain";
import { IconScroll } from "../../icons/icons";
import { categories } from "../../data/data";

const Creaciones = () => {
  const { lan } = useDataContext();

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
  }, []);

  return (
    <section className="px-12 pt-28 bg-secondary">
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

      <div className="flex flex-wrap gap-y-8 justify-center">{categories && categories.map((item) => <Item key={item.id} data={item} />)}</div>
    </section>
  );
};

export default Creaciones;
