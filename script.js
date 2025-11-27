// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-links");
hamburger.onclick = () => { navMenu.classList.toggle("active"); };

// Scroll Reveal Animation
const sections = document.querySelectorAll(".fade-in");
const revealOnScroll = () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) sec.classList.add("visible");
    });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Project Modals
const modalBtns = document.querySelectorAll('.project-card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.style.display = 'block';
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = (e) => {
    modals.forEach(modal => {
        if(e.target === modal) modal.style.display = 'none';
    });
};
