// Navbar scroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger smooth
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
});

// Klik di luar: tutup menu
window.addEventListener("click", function (e) {
  if (!navMenu.contains(e.target) && e.target !== hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("show");
  }
});

// Carousel
let index = 0;

function showSlide() {
  const carousel = document.getElementById("carousel");
  const total = carousel.children.length;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index++;
  showSlide();
}
function prevSlide() {
  index--;
  showSlide();
}

// Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  const arrow = document.getElementById("dropdown-arrow");

  if (dropdown.style.maxHeight === "" || dropdown.style.maxHeight === "0px") {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    dropdown.style.opacity = "1";
    arrow.style.transform = "rotate(180deg)";
  } else {
    dropdown.style.maxHeight = "0px";
    dropdown.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
  }
}

window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("dropdown");
  const arrow = document.getElementById("dropdown-arrow");

  if (!e.target.closest(".relative")) {
    dropdown.style.maxHeight = "0px";
    dropdown.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
  }
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const body = document.querySelector("body");

darkToggle.addEventListener("click", function () {
  document.documentElement.classList.add("transitioning");
  if (darkToggle.checked) {
    html.classList.add("dark");
    body.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    body.classList.remove("dark");
    localStorage.theme = "light";
  }

  setTimeout(() => {
    document.documentElement.classList.remove("transitioning");
  }, 500);
});

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
  html.classList.add("dark");
  body.classList.add("dark");
} else {
  darkToggle.checked = false;
  html.classList.remove("dark");
  body.classList.remove("dark");
}
