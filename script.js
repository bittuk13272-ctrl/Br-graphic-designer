// Image Popup

const galleryImages = document.querySelectorAll(".gallery img");

// Popup Create
const popup = document.createElement("div");
popup.className = "popup";

const popupImg = document.createElement("img");

const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.className = "close";

popup.appendChild(closeBtn);
popup.appendChild(popupImg);
document.body.appendChild(popup);

// Open Popup
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

// Close Popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// Scroll Animation
const boxes = document.querySelectorAll(".box,.gallery img,.about");

function reveal() {
    boxes.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

boxes.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".7s";
});

window.addEventListener("scroll", reveal);
reveal();

// Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 20px rgba(255,215,0,.25)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Active Menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});
