// Mobile Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save dark mode preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Load saved preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
}
