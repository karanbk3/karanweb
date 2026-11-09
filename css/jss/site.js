
// =====================================
// 1. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// =====================================
// 2. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".content-section, .project-card, .skill"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


// =====================================
// 3. ACTIVE NAVIGATION LINK
// =====================================

const navigationLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


// =====================================
// 4. DYNAMIC FOOTER YEAR
// =====================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// =====================================
// 5. PAGE LOADED MESSAGE
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Karan's Portfolio Loaded Successfully!");

});
