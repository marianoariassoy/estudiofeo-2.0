import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapHeader = (data) => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo-main");
  const menu = document.querySelectorAll(".menu-main span");

  const lightTheme = () => {
    header.classList.add("text-white");
    menu[0].classList.add("bg-white");
    menu[1].classList.add("bg-white");
    menu[2].classList.add("bg-white");
    logo.src = "/assets/images/logo-white.svg";
  };

  const darkTheme = () => {
    header.classList.remove("text-white");
    menu[0].classList.remove("bg-white");
    menu[1].classList.remove("bg-white");
    menu[2].classList.remove("bg-white");
    logo.src = "/assets/images/logo.svg";
  };

  const sections = gsap.utils.toArray(data);

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top-=-80",
      end: "bottom top-=-80",
      onEnter: () => {
        lightTheme();
      },
      onLeave: () => {
        darkTheme();
      },
      onEnterBack: () => {
        lightTheme();
      },
      onLeaveBack: () => {
        darkTheme();
      },
      markers: false,
    });
  });
};

export default GsapHeader;
