const logo = document.querySelector('#my-nav .navbar-brand');
const menu = document.querySelector('#my-nav #navbarNav');
const intro = document.querySelector('#intro .intro');
const info = document.querySelector('#intro .intro .info');

const tl = new TimelineMax();

tl.fromTo(intro, 1.5, {height: "0%"}, {height: "100%", ease: Power2.easeInOut})
  .fromTo(logo, 0.5, {y: 15, opacity: 0}, {y: 0, opacity: 1}, "-=0.3")
  .fromTo(menu, 0.5, {y: 15, opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
  .fromTo(info, 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, "-=0.2");

  