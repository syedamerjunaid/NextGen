// Mobile Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    function toggleMenu() {
        let menu = document.getElementById("mobileMenu");
        menu.classList.toggle("active");
    }

    let menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    // Form Validation
    function validateForm(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMessage = "";
        
        if (name === "") {
            errorMessage += "Name is required.\n";
        }
        if (email === "") {
            errorMessage += "Email is required.\n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage += "Invalid email format.\n";
        }
        if (message === "") {
            errorMessage += "Message cannot be empty.\n";
        }
        
        if (errorMessage !== "") {
            alert(errorMessage);
            return false;
        }
        
        alert("Form submitted successfully!");
        return true;
    }

    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    console.log("JavaScript Loaded Successfully!"); // Debugging log
});
