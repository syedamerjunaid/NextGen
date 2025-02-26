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

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".animated-text");
    const text = "Empowering the Next Generation of Muslim Leaders";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeText, 100);
        }
    }

    textElement.innerHTML = ""; // Clear initial text
    typeText();
});

function searchBooks() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

function filterBooks() {
    let category = document.getElementById("categoryFilter").value;
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let bookCategory = book.getAttribute("data-category");
        if (category === "all" || bookCategory === category) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

function openPDF(pdfUrl) {
    let modal = document.getElementById("pdfModal");
    let viewer = document.getElementById("pdfViewer");

    viewer.src = pdfUrl;
    modal.style.display = "flex";
}

function closePDF() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfViewer").src = "";
}

// Fix PDFs opening in modal instead of downloading
function openPDF(pdfUrl) {
    let modal = document.getElementById("pdfModal");
    let viewer = document.getElementById("pdfViewer");

    viewer.src = pdfUrl;
    modal.style.display = "flex";
}

function closePDF() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfViewer").src = "";
}

// Book Upload Feature (Simulated Storage)
function uploadBook() {
    let title = document.getElementById("bookTitle").value;
    let category = document.getElementById("bookCategory").value.toLowerCase();
    let cover = document.getElementById("bookCover").files[0];
    let pdf = document.getElementById("bookPDF").files[0];

    if (!title || !category || !cover || !pdf) {
        alert("All fields are required!");
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(cover);
    reader.onload = function (event) {
        let bookHTML = `
            <div class="book" data-title="${title}" data-category="${category}" onclick="openPDF('${URL.createObjectURL(pdf)}')">
                <img src="${event.target.result}" alt="Book Cover">
                <h3>${title}</h3>
                <p>Category: ${category}</p>
                <a href="${URL.createObjectURL(pdf)}" class="download-btn" download>Download PDF</a>
            </div>
        `;

        document.getElementById("libraryGrid").innerHTML += bookHTML;
        alert("Book uploaded successfully!");
    };
}

function filterPrograms(category) {
    let programs = document.querySelectorAll(".program-card");

    programs.forEach(program => {
        if (category === "all" || program.getAttribute("data-category") === category) {
            program.style.display = "block";
        } else {
            program.style.display = "none";
        }
    });
}
