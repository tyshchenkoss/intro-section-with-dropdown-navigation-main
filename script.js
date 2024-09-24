const headerNavEl = document.querySelector(".header__nav");

headerNavEl.addEventListener("click", (e) => {
  console.log("enter");
  const navEl = e.target.closest(".header__nav--arrow");

  if (!navEl) {
    return;
  }

  const icons = Array.from(navEl.querySelectorAll(".arrow"));
  icons.forEach((icon) => icon.classList.toggle("hidden"));

  const dropdown = navEl.querySelector(".dropdown");
  dropdown.classList.toggle("hidden");
});

const headerMobileEl = document.querySelector(".header__mobile");
const sidebarEl = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  sidebarEl.classList.toggle("open");
  overlay.classList.toggle("hidden");
});

headerMobileEl.addEventListener("click", (e) => {
  sidebarEl.classList.toggle("open");
  overlay.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  const el = e.target.closest(".sidebar__nav--arrow");
  if (!el) {
    return;
  }

  const sidebarDropdownEl = el.querySelector(".sidebar__dropdown");
  sidebarDropdownEl.classList.toggle("sidebar__dropdown--open");
});
