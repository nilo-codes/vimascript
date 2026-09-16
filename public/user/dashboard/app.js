
const $ = document

const menuIcon = $.querySelector(".icon-bar")
const menu = $.querySelector(".items-bar")
const theme = $.querySelector(".theme")
const html = $.querySelector("html")



// show nav bar in mobile
let openOrCloseMenu = false
const showBar = () => {
    if (openOrCloseMenu){
        menuIcon.classList.add("close-hamburger-menu")
        menuIcon.classList.remove("open-hamburger-menu")
        menu.classList.add("hidden")
        openOrCloseMenu = false
    } else {
        menuIcon.classList.add("open-hamburger-menu")
        menuIcon.classList.remove("close-hamburger-menu")
        menu.classList.remove("hidden")
        openOrCloseMenu = true
    }
}
$.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target) && openOrCloseMenu) {
        menuIcon.classList.remove("open-hamburger-menu")
        menuIcon.classList.add("close-hamburger-menu")
        menu.classList.add("hidden")
    } 
})

// theme
const themeSymbol = $.querySelector(".theme i")

const changeTheme = () => {
    html.classList.toggle("dark");
    themeSymbol.classList.toggle("ri-moon-line")
    themeSymbol.classList.toggle("ri-sun-line")
    
    const theme = html.classList.contains("dark") ? "dark" : "light";

    localStorage.setItem("theme", theme);
};


const closedUserPanel = $.querySelector(".closed-user-panel")
const userPanel = $.querySelector(".user-panel")

closedUserPanel.addEventListener("click", () => {
    userPanel.classList.toggle("opacity-0")
    userPanel.classList.toggle("invisible")
    userPanel.classList.toggle("-translate-y-2")
})


const getDataFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
    
};
getDataFromLocalStorage()


menuIcon.addEventListener("click", showBar)
theme.addEventListener("click", changeTheme)