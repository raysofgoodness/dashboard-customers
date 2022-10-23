import { gsap } from "gsap";

export const animationSidebar = () => {
  const wrapperBurger = document.querySelector('.burger');
  const burger = document.querySelector('#burger');
  const burgerTl = gsap.timeline();

  burgerTl.pause();
  burgerTl.to("#top-stroke", 0.5, {y: 10});
  burgerTl.to("#bot-stroke", 0.5, {y: -10}, "-=0.5");
  burgerTl.to("#burger", 1, {rotation: -360}, "-=0.5");
  burgerTl.to('#top-stroke', 0.5, {rotation: -45, transformOrigin:"50% 50%"}, "-=0.5" );
  burgerTl.to('#bot-stroke', 0.5, {rotation: 45, transformOrigin:"50% 50%"}, "-=1");
  burgerTl.to('#mid-stroke', 0.5, {rotation: 45, transformOrigin:"50% 50%"}, "-=1" );

  let clicked = false;

  wrapperBurger.addEventListener('click', () => {

    if (!clicked) {
      burgerTl.play();
      clicked = true;
    } else {
      burgerTl.reverse();
      clicked = false;
    }
  });
};
