const path = "assets/gallery/";
const ext = ".jpg";
const maxImages = 3;

let currentImg = 1;
const element = document.getElementById("orderImage");

function changeImage(next) {
    if (next) {
        currentImg++;
    } else {
        currentImg--;
    }

    if (currentImg > maxImages) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = maxImages;
    }

    element.style.opacity = "0";

    setTimeout(() => {
        element.setAttribute("src", `${path}${currentImg}${ext}`);
        element.style.opacity = "1";
    }, 150);
}