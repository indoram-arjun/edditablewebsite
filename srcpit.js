let Getradius = document.getElementById("Getradius");
let GetColorsecond = document.getElementById("GetColorsecond");
let GetColormain = document.getElementById("GetColormain");
let DesignMode = document.getElementById("DesignMode");

// setedit by js 

GetColormain.addEventListener("input", () => {
    document.documentElement.style.setProperty("--main-color", GetColormain.value)
})
GetColorsecond.addEventListener("input", () => {
    document.documentElement.style.setProperty("--secondary-color", GetColorsecond.value)
})
Getradius.addEventListener("input", () => {
    document.documentElement.style.setProperty("--image-rounding", Getradius.value + "%")
})
let isOn = false;

DesignMode.addEventListener("click", () => {
    isOn = !isOn;
    document.designMode = isOn ? "on" : "off";
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


let menuIcon = document.getElementById("menu-icon");
let menu = document.querySelector(".menu");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});