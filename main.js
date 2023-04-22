// Handing scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoViews(link);
})

const contactUs = document.querySelector('.home__contact');
contactUs.addEventListener("click", () => {
  scrollIntoViews('#contact');
})

function scrollIntoViews(selector) {
  const scrollTO = document.querySelector(selector);
  scrollTO.scrollIntoView({behavior: "smooth"});
} 