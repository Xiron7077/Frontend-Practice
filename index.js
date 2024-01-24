document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-button").addEventListener(
        "click",
        () => {
            document.getElementById("menu").hidden = true;
            document.getElementById("hidden-menu").hidden = false;
        },
        false
    );

    document.getElementById("hidden-menu-button").addEventListener(
        "click",
        () => {
            document.getElementById("menu").hidden = false;
            document.getElementById("hidden-menu").hidden = true;
        },
        false
    );
    }
);
