let searchBtn = document.querySelector(".js-header--search-div");
let searchbox = document.querySelector(".header--searchbox-wrapper");

let activateSearchbox = () => {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchbox.classList.toggle("active");
  });
};

export { activateSearchbox };
