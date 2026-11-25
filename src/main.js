import { gsap } from "gsap"

const button = document.querySelector(".ca-novedades__button")
const cards = document.querySelectorAll(".ca-newItem")

const cardAnimation = gsap.fromTo(
  cards,
  { xPercent: 100, x: 40, autoAlpha: 0 },
  {
    xPercent: 0,
    x: 0,
    autoAlpha: 1,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
    paused: true,
  }
);

let isOpen = false;
button.setAttribute("aria-expanded", "false");

button.addEventListener("click", () => {
  isOpen = !isOpen;
  button.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    cardAnimation.play();
  } else {
    cardAnimation.reverse();
  }
});