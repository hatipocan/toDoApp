const themeChanger = () => {
const themeButton = document.getElementById("theme-button");
const mainHtml = document.getElementById("html-base")

themeButton.addEventListener("click", () => {
    if (mainHtml.getAttribute("data-theme") === "light"){
        mainHtml.setAttribute("data-theme", "dark")
    } else {mainHtml.setAttribute("data-theme", "light")}

}); }

export default themeChanger;