export default (function () {
    if (!window.location.pathname.includes("theme.html")) return

    if (window.matchMedia("(prefers-color-scheme: dark)").matches 
        && localStorage.getItem("theme") !== "") {
        localStorage.setItem("theme", "darkTheme")
    }

    // const BUTTON = document.querySelector(".themeButton")
    const BUTTON = document.querySelector(".switch__checkbox")

    BUTTON.addEventListener("click", clickHandler)

    function clickHandler() {
        const CLASS_LIST = document.body.classList
        CLASS_LIST.toggle("darkTheme")
        localStorage.setItem("theme", CLASS_LIST.contains("darkTheme")
        ? "darkTheme"
        : "")
    }

    if(!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "")
    } 

    document.body.classList.add(localStorage.getItem("theme"))

})()