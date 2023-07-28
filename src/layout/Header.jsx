import { Link } from "react-router-dom";
import { useDataContext } from "../context/lanContext";
import { languages } from "../data/data";
import { Logo } from "../icons/icons";

const Header = () => {
  const { lan, setLan } = useDataContext();

  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  return (
    <header className="fixed w-full top-0 z-40 bg-white">
      <div className="w-full flex justify-between items-center px-12 py-12">
        <div className="logo">
          <Link to="/" className="transition-all hover:blur-sm" aria-label="Go to home page">
            <Logo />
          </Link>
        </div>
        <div className="flex gap-4">
          {languages.map((item) => (
            <button key={item.id} className={`font-bold hover:opacity-60 cursor-pointer uppercase ${lan === item.title && "hidden"} `} onClick={() => setLan(item.title)}>
              {item.title}
            </button>
          ))}
          <div className="nav-menu" onClick={OpenMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
