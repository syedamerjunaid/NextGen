// Mobile Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

console.log("✅ JavaScript Loaded Successfully!");
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript Loaded Successfully!");

    // Mobile Menu Toggle
    function toggleMenu() {
        console.log("🔹 Menu Toggle Clicked!");
        let menu = document.getElementById("mobileMenu");
        menu.classList.toggle("active");
    }

    let menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        console.log("🔹 Menu Toggle Found!");
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.log("❌ Menu Toggle Not Found!");
    }
});


function validateForm(event) {
    event.preventDefault();
    console.log("🔹 Form Submission Triggered!");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        console.log("❌ Form Validation Failed: Missing Fields");
        alert("All fields are required!");
        return false;
    }

    console.log("✅ Form Validation Passed!");
    alert("Form submitted successfully!");
    return true;
}

document.querySelectorAll(".nav-links a").forEach(anchor => {
    console.log("🔹 Smooth Scroll Activated!");
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        console.log("🔹 Scrolling to:", targetId);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

