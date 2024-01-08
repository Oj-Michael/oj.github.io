// the javascript
// to toggle the menu
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const bar = document.querySelector(".bar");
let isOpen = false;

btn.addEventListener("click", () => {
  if (isOpen === false) {
    btn.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-expanded", "true");
    isOpen = true;
  } else {
    btn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-expanded", "false");
    isOpen = false;
  }
});

// paralax
const targets = document.querySelectorAll(".paralax");

window.addEventListener("scroll", function () {
  let index = 0;
  const length = targets.length;

  for (index; index < length; index++) {
    const pos = window.pageYOffset * targets[index].dataset.rate;

    if (targets[index].dataset.direction === "vertical") {
      targets[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      const posX = window.pageXOffset * targets[index].dataset.ratex;
      const posY = window.pageYOffset * targets[index].dataset.ratey;

      targets[index].style.transform =
        "translate3d(" + posX + "px," + posY + "px, 0px)";
    }
  }
});

// Initial positioning on page load
window.dispatchEvent(new Event("scroll"));
