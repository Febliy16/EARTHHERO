document.addEventListener("DOMContentLoaded", () => {
    console.log("EARTH HERO SIAP DIGUNAKAN");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    sections.forEach(sections => {
        const top = window.scrollY;
        const offset = sections.offsetTop - 100;
        const height = sections.offsetHeight;
        const id = sections.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(Link => {
                link,classList.remove("active")
                document.querySelector('nav a[herf*=${id}]').classList.add("active")
            });
        }
    });
});

const iframes = document.querySelectorAll("iframe");

iframes.forEach(iframes => {
    iframes.onerror = () => {
        alert("Konten Ini Tidak Dapat Dimuat")
    };
});
