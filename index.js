gsap.registerPlugin(Flip);

const option_menu = document.querySelector(".option-menu");

document.querySelector(".menu-button").textContent = "☰";

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-button").addEventListener(
        "click" ,
        () => {
            let buttonText = document.querySelector(".menu-button").textContent;
            if (buttonText === "☰") {
                document.querySelector(".menu-button").textContent = "⚟";
            } else {
                document.querySelector(".menu-button").textContent = "☰";
            }

            const state = Flip.getState(".option-menu");

            option_menu.classList.toggle("active");

            Flip.from(state, {
                duration: 0,
                fade: true,
                absolute: true,
                toggleClass: "flipping",
                ease: "power1.inOut"
            });
        }
    );
});     
