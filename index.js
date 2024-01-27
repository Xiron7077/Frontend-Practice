document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener(
        "click",
        () => {
            buttonText = document.getElementById("menu-button").textContent;
            if(buttonText === "☰") {
                document.getElementById("hidden-menu").hidden = false;
                document.getElementById("menu-button").textContent = "⚟";
            } else {
                document.getElementById("hidden-menu").hidden = true;
                document.getElementById("menu-button").textContent = "☰";
            }
        },
        false
    );
    }
);
