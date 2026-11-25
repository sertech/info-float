import { gsap } from "gsap"

const button = document.querySelector(".ca-novedades__button")
const cards = document.querySelectorAll(".ca-newItem")

button.addEventListener("click", () => {
  gsap.fromTo(
    cards,
    { xPercent: 100, x: 40, autoAlpha: 0 },
    {
      xPercent: 0,
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
    }
  );
});