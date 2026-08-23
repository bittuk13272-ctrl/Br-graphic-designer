// ===== IMAGE POPUP =====

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {

img.addEventListener("click",()=>{

popup.style.display="flex";
popupImg.src=img.src;

});

});

closeBtn.onclick=()=>{

popup.style.display="none";

};

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};

// ===== SCROLL ANIMATION =====

const items=document.querySelectorAll(".box,.gallery img,.about");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

items.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s";

observer.observe(item);

});

// ===== HEADER SHADOW =====

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>30){

header.style.boxShadow="0 5px 20px rgba(255,215,0,.3)";

}else{

header.style.boxShadow="none";

}

});

// ===== ACTIVE MENU =====

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});

// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
