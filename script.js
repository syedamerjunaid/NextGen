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

// Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
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

// Event Listener for Form Submission
const contactForm = document.getElementById("contactForm");
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
