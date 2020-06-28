const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("menu--mobile");

  hamburger.classList.add("hamburger--close");

  hamburger.style.position = "fixed";
  hamburger.style.zIndex = "1000";

  hamburger.addEventListener("click", e => {
    menu.classList.remove("menu--mobile");
    hamburger.classList.remove("hamburger--close");
    hamburger.removeAttribute("style");
  })

})


// const menu = document.querySelector(".menu");
// const hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click", e => {
//   e.preventDefault();
//   menu.classList.add("menu--mobile");

//   const closeElement = document.createElement("div");
//   closeElement.classList.add("close");
//   closeElement.innerHTML = "x";

//   closeElement.addEventListener("click", e => {
//     menu.classList.remove("menu--mobile");
//     menu.removeChild(closeElement);
//   })

//   menu.appendChild(closeElement);
// })