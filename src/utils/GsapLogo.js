import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapLogo = (data) => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  const logo = document.querySelector(".logo-main");

  const lightTheme = () => {
    logo.style.opacity = 0;
  };

  const darkTheme = () => {
    logo.style.opacity = 1;
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

export default GsapLogo;
