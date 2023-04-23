// Handing scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoViews(link);
})

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
  navbarMenu.classList.toggle('open')
})

//Handle click on 'contact me" button on home
function scrollIntoViews(selector) {
  const scrollTO = document.querySelector(selector);
  scrollTO.scrollIntoView({behavior: "smooth"});
} 

const contactUs = document.querySelector('.home__contact');
contactUs.addEventListener("click", () => {
  scrollIntoViews('#contact');
})

// Make home slowly fade to transparent as the widow scrolls down.
  const home = document.querySelector('#home');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    home.style.opacity = 1- window.scrollY/homeHeight;
  })

// const trans = document.querySelectorAll('.navbar__menu li');
// console.log(trans[0].getAttribute('data-link'));

// for (let i = 0; i < trans.length; i++) {
//   const transItem = trans[i].getAttribute('data-link');
//   const item = document.querySelector(transItem);
//   const itemHeight = item.getBoundingClientRect().height;
//   document.addEventListener('scroll', () => {
//     item.style.opacity = 1- window.scrollY/itemHeight;
//   })
// }

//show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY>homeHeight/2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoViews('#navbar')
})



