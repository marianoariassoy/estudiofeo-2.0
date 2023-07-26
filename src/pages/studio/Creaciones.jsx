import { useEffect, useState } from "react";
import { useDataContext } from "../../context/lanContext";
import Item from "./ItemMain";
import { IconScroll } from "../../icons/icons";
import { categories } from "../../data/data";
import List from "./List";

const Creaciones = () => {
  const { lan } = useDataContext();
  const [categorie, setCategorie] = useState(0);

  useEffect(() => {
    if (categorie === 0) return;
    const targetElement = document.querySelector("#list");
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth",
    });
  }, [categorie]);

  return (
    <section className="px-12 py-28 bg-secondary">
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

      <div className="flex flex-wrap gap-y-8 justify-center">
        {categories.map((item) => (
          <Item key={item.id} data={item} categorie={categorie} setCategorie={setCategorie} />
        ))}
      </div>

      <List categorie={categorie} />
    </section>
  );
};

export default Creaciones;
