import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/lanContext";
import { menu } from "../data/data";

const MenuPages = () => {
  const { lan } = useDataContext();

  return (
    <div className="nav fixed px-12 w-full h-screen z-30 bg-white">
      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menu.map((item) => (
            <li key={item.id} className={item.id === 3 ? "mb-12" : ""}>
              <NavLink to={item.url} className="menu-link">
                {lan === "es" ? item.title : item.title_eng}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuPages;
