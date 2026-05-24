let path = "assets/gallery/";
let ext = ".jpg";
let currentImg = 1;
let element = document.getElementById("orderImage");

function changeImage(d) {
    if (d) {
        currentImg++;
    } else {
        currentImg--;
    }

    if (currentImg >= 4) {
        currentImg = 1;
    } else if (currentImg <= 0) {
        currentImg = 3;
    }

    element.setAttribute("src", `${path}${currentImg}${ext}`);
}
