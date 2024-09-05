document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("side-menu");
    const menuIcon = document.getElementById("menu-icon");

    // Bascule l'état du menu
    menu.classList.toggle("open");
    

    // Change l'icône en fonction de l'état du menu
    if (menu.classList.contains("open")) {
        menuIcon.src = "img/svg/close.svg"; // Remplace par l'icône de croix
    } else {
        menuIcon.src = "img/svg/menu.svg"; // Remet l'icône hamburger
    }
});

// Dark Mode 

let darkModeEnabled = false;

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("change", () => {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
}
