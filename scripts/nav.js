const menuButton = document.getElementById("phone-menu-button");
const menu = document.querySelector("nav > ul");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});