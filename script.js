// === Image Slider Functionality ===
let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Show specific image based on index
function showImage(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Navigation buttons
document.getElementById("prevBtn").addEventListener("click", () => {
    showImage(currentIndex - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    showImage(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    showImage(currentIndex + 1);
}, 5000);

// === Login/Signup Floating Labels & Validation ===
document.addEventListener("DOMContentLoaded", function () {
    // Floating labels trigger
    const inputs = document.querySelectorAll("form input");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                input.classList.add("filled");
            } else {
                input.classList.remove("filled");
            }
        });
    });

    // Form validation
    function validateForm(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.querySelector("input[name='email']");
        const password = form.querySelector("input[name='password']");

        if (!email.value || !password.value) {
            alert("Please fill in all fields.");
            return false;
        }

        alert("Form submitted successfully!");
        form.reset();
        return true;
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", validateForm);
    }

    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", validateForm);
    }
});
