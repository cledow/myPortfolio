// Handing scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === "#home") {
    scrollIntoViews("#navbar");
  } else {
    scrollIntoViews(link);
  }
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

const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1- window.scrollY/homeHeight;
})

// const aboutHeight = about.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//   if (aboutHeight < window.scrollY) {
//     about.style.opacity = 1 - window.scrollY / (homeHeight + aboutHeight);
//   } else if (parseInt(window.scrollY) > 1026) {
//     skills.classList.add('.active')
//   } else {
//     about.style.opacity = 1
//   }
// })

// test
const targets = document.querySelectorAll(".section");
const options = { root: null, threshold: 0.15, rootMargin: "0px" };
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    const container = entry.target;
    if (entry.isIntersecting) {
      container.classList.add("fade-in");
    } else {
      container.classList.remove("fade-in");
    }
    
  });
}, options);

targets.forEach((target) => {
  observer.observe(target);
});


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
});

//project hovering
