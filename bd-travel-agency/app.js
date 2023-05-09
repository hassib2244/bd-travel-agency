const btnDiscover = document.querySelector("#discover");
const sectionTour = document.querySelector(".section-tours");
const navs = document.querySelectorAll(".navigation__link");
btnDiscover.addEventListener("click", function (e) {
  e.preventDefault();
  sectionTour.scrollIntoView({ behavior: "smooth" });
});
navs.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
