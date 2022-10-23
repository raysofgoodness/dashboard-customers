import { gsap } from "gsap";

export const animationSidebar = () => {
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');
  const tl = gsap.timeline();

  tl.pause();
  tl.to("#top-stroke", 0.5, {y: 10});
  tl.to("#bot-stroke", 0.5, {y: -10}, "-=0.5");
  tl.to("#burger", 1, {rotation: -360}, "-=0.5");
  tl.to('#top-stroke', 0.5, {rotation: -45, transformOrigin:"50% 50%"}, "-=0.5" );
  tl.to('#bot-stroke', 0.5, {rotation: 45, transformOrigin:"50% 50%"}, "-=1");
  tl.to('#mid-stroke', 0.5, {rotation: 45, transformOrigin:"50% 50%"}, "-=1" );

  let clicked = false;

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active');

    if (!clicked) {
      tl.play();
      clicked = true;
    } else {
      tl.reverse();
      clicked = false;
    }
  });
};
