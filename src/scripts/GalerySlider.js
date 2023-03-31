import sliderContent from "./Images.json";

let galleryContainer = document.querySelector(".div-slider--container");
let images = [];

//ukoliko kod mora da sadrzi 36 razlicitih slika povecati broj iteracija i koristiti zakomentarisan kod umesto, taj kod nazalost samo generise slike, nisam uspeo da smislim kako da napravim kvalitetan slider za svih 36.

for (let i = 0; i < 8; i++) {
  let image = sliderContent;
  images.push(image);
}

// let sliderGenerator = () => {
//   let galleryPageUpper = document.createElement("div");
//   galleryPageUpper.classList = "gallery-page";
//   let galleryPageLower = document.createElement("div");
//   galleryPageLower.classList = "gallery-page";
//   let counter = 0;
//   images.forEach((img) => {
//     let image = document.createElement("img");
//     image.classList = img.name;
//     image.src = img.src;
//     image.alt = img.alt;
//     counter++;
//     if (counter <= 16) {
//       galleryPageUpper.append(image);
//     } else {
//       galleryPageLower.append(image);
//     }
//   });
//   galleryContainer.append(galleryPageUpper);
//   galleryContainer.append(galleryPageLower);
// };

let sliderGenerator = () => {
  let pageGenerator = (num) => {
    for (let i = 1; i <= num; i++) {
      let fullGalleryPage = document.createElement("div");
      fullGalleryPage.classList = `gallery-page`;
      galleryContainer.append(fullGalleryPage);
      let counter = 1;
      images.forEach((img) => {
        let image = document.createElement("img");
        image.classList = "slider-img";
        image.src = img.src;
        image.alt = img.alt;
        counter++;
        let x = 0;
        fullGalleryPage.append(image);
        if (counter == 5) {
          let brTag = document.createElement("br");
          fullGalleryPage.append(brTag);
          counter = 1;
        }
      });
    }

    $(galleryContainer).slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
    });
  };

  pageGenerator(5);
};

export { sliderGenerator };
