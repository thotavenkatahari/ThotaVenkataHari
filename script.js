// Mobile Menu
let menuButton = document.getElementById("menuButton");
let navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

let links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Typing Effect
let typingText = document.getElementById("typingText");
let text = "Full Stack Java Developer";
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeText, 85);
    }
}

typingText.textContent = "";
typeText();

// Scroll Reveal Animation
let revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function(element) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Scroll Progress Bar
let scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
    let scrollTop = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = 0;

    if (pageHeight > 0) {
        progress = (scrollTop / pageHeight) * 100;
    }

    scrollProgress.style.width = progress + "%";
}

window.addEventListener("scroll", updateScrollProgress);
updateScrollProgress();

// Contact Form - Open WhatsApp With Filled Message
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill all the fields.";
        formMessage.style.color = "#d90429";
        return;
    }

    let whatsappMessage = "Hello Thota Venkata Hari,\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;
    let whatsappUrl = "https://wa.me/918978144929?text=" + encodeURIComponent(whatsappMessage);

    formMessage.textContent = "Opening WhatsApp...";
    formMessage.style.color = "#1746a2";

    window.open(whatsappUrl, "_blank");
    contactForm.reset();
});

// Current Year
let year = document.getElementById("year");
year.textContent = new Date().getFullYear();
