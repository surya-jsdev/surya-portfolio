const skillSection = document.querySelector('.skill-section');
const progressBars = document.querySelectorAll('.progressbar');
let animated = false;

window.addEventListener('scroll', () => {
    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (sectionPosition < screenHeight - 100 && !animated) {
        animated = true;
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-progress');
            bar.style.width = value;
        });
    }
});

// menu Tab
const menu = document.getElementById("menutab");
const navlink = document.getElementById("navbar")
menu.addEventListener("click", () => {
    navlink.classList.toggle("active");
});
// auto close tab
const links = document.querySelectorAll("#navbar a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navlink.classList.remove("active");
    });
});
 


