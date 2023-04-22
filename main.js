// Handing scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

const scrollTO = document.querySelector(link);
scrollTO.scrollIntoView({behavior: "smooth"});
})
