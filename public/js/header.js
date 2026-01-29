const mediaQuery = window.matchMedia("(max-width: 950px)");

function isMobile() {
    if (mediaQuery.matches) {
        return 1;
    } else {
        return 0;
    }
}

let navX = -100
let sideX = 100

function dynamicNav() {
    if (navX === 0) {
        document.getElementById("navbarOpen").style.transform = "translateX(-100%)";
        navX = -100
    } else {
        document.getElementById("navbarOpen").style.transform = "translateX(0)";
        navX = 0
    }
}

function dynamicSide() {
    if (sideX === 100) {
        document.getElementById("sidebarOpen").style.transform = "translateX(0)";
        sideX = 0
    } else {
        document.getElementById("sidebarOpen").style.transform = "translateX(100%)"
        sideX = 100
    }
}


function responsiveSides(i) {
    if (isMobile() !== 1) {
        return i === 1 ? dynamicNav() : dynamicSide();
    }

    if (i === 1) {
        if (sideX === 0) {
            dynamicSide()
        }
        return dynamicNav()
    }

    if (navX === 0) {
        dynamicNav()
    }
    dynamicSide()
}
