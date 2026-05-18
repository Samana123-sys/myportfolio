console.log("Portfolio loaded");
// SCROLL REVEAL ANIMATION

window.addEventListener("scroll", reveal);

function reveal(){

    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}
// TYPING EFFECT

const texts = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner"
];

const typingText = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

function type(){

    if(charIndex < texts[textIndex].length){

        typingText.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    }

    else{

        setTimeout(erase, 1500);

    }

}

function erase(){

    if(charIndex > 0){

        typingText.innerHTML =
        texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    }

    else{

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        setTimeout(type, 500);

    }

}

window.onload = type;
// MOBILE MENU

const menuBtn =
document.querySelector(".menu-btn");

const navbar =
document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});