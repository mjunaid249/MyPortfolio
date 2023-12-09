var typed = new Typed("#element", {
  strings: [
    "Web developer",
    "React developer",
    "Node Js developer",
    "Js developer",
  ],
  typeSpeed: 50,
  loop: true,
  showCursor: false,
});

//Menu

const header = document.querySelector(".header");
const menu_btn = document.querySelector(".mobile-navbar-btn");

function toggle() {
  header.classList.toggle("active");
}

menu_btn.addEventListener("click", toggle);

const menu_links = document.querySelectorAll(".navbar-link");

Array.from(menu_links).forEach((link) => {
  link.addEventListener("click", toggle);
});
