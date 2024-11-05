const myName = "Amir Raza";
const h1 = document.querySelector(".hero-main-heading");
console.log(myName);
console.log(h1);
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });
///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Sticky Top Scroll

const homeScrollEl = document.querySelector(".hero");

const scrollobs = new IntersectionObserver(
  function (entries) {
    const scrollEnt = entries[0];
    console.log(scrollEnt);

    if (scrollEnt.isIntersecting === false) {
      document.body.classList.add("sticky-scroll");
    }

    if (scrollEnt.isIntersecting === true) {
      document.body.classList.remove("sticky-scroll");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
scrollobs.observe(homeScrollEl);
