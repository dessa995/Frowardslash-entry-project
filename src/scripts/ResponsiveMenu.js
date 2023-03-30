let menuIcon = document.querySelector(".js-header--responsive-icon-div");
let hiddenMenu = document.querySelector(".header-navbar--wrapper");
let hero = document.querySelector(".section-hero--wrapper");

let openResponsiveMenu = () => {
  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hiddenMenu.classList.toggle("active");

    if (hiddenMenu.classList.contains("active")) {
      menuIcon.innerHTML = `
      <a href="javascript:;">
        <i class="fa fa-times" aria-hidden="true"></i>
      </a>
      `;
      document.body.style.backgroundColor = "#666";
    } else {
      menuIcon.innerHTML = `
      <a href="javascript:;">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      `;
      document.body.style.backgroundColor = "#fff";
    }
  });
};

export { openResponsiveMenu };
