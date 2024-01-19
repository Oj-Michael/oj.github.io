// the javascript
// to toggle the menu
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
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

// page transitioning
window.onload = () => {
  const transitionElement = document.querySelector(".transition");
  const transitionElement2 = document.querySelector(".abc");
  const achors = document.querySelectorAll(".a-links");
  setTimeout(() => {
    transitionElement.classList.remove("is-active");
    transitionElement2.classList.remove("is-active");
  }, 500);
  for (let i = 0; i < achors.length; i++) {
    const ach = achors[i];
    ach.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transitionElement.classList.add("is-active");
      transitionElement2.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
