
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");
    const year = document.getElementById("year");

    // Check navigation elements
    if (!menuToggle || !navigation) {
        console.error("Menu elements not found!");
        return;
    }

    // Open and close hamburger menu
    menuToggle.addEventListener("click", function (event) {

        event.stopPropagation();

        navigation.classList.toggle("open");
        menuToggle.classList.toggle("active");

        const isOpen = navigation.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navigation.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

    // Close menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    // Automatically update copyright year
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
