import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/lanContext";
import { Logo } from "../icons/icons";

const Header = () => {
  const { lan, setLan } = useDataContext();

  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-white">
        <div className="w-full flex justify-between items-center px-12 py-12">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex gap-4">
            {lan === "es" ? (
              <button className="font-bold hover:opacity-70 cursor-pointer" onClick={() => setLan("en")}>
                EN
              </button>
            ) : (
              <button className="font-bold hover:opacity-70 cursor-pointer" onClick={() => setLan("es")}>
                ES
              </button>
            )}
            <div className="nav-menu" onClick={OpenMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;
