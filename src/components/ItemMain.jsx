import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Item = ({ data, mask }) => {
  const { imageURL } = useDataContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let items = gsap.utils.toArray(".scroll");
    items.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
      });
    });
  }, []);

  return (
    <a href={data.url} className="scroll item-mask items-center justify-center relative inline-flex">
      <div className="item-mask-txt absolute left-0 w-full z-30 px-8 opacity-0">
        <h3 className="text-xl text-center font-bold">{data.title}</h3>
      </div>

      <img src={`/assets/mask/mask-${mask}-outline.svg`} className="item-mask-image mask-outline" />
    </a>
  );
};

export default Item;
