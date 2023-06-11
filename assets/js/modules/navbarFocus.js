// navbarFocus.js

const navbarFocusModule = () => {
    // Get all the <a> tags in the navbar list
    var links = document.querySelectorAll(".nav-link");

    // Loop through each <a> tag and add a "click" event
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Remove the "focus-css" class from all other <a> tags
            links.forEach(function (otherLink) {
                otherLink.classList.remove("focus-css");
            });

            // Add the "focus-css" class to the clicked <a> tag
            link.classList.add("focus-css");

            // Stop the click event from propagating to the outer elements
            event.stopPropagation();
        });
    });

    // Add a "click" event on the entire page
    document.addEventListener("click", function (event) {
        // Check if the user clicked outside the <a> tag area
        var isClickedOutside = true;
        event.composedPath().forEach(function (element) {
            if (element.classList && element.classList.contains("nav-link")) {
                isClickedOutside = false;
            }
        });

        // If the user clicked outside the <a> tag area, remove the "focus-css" class from all <a> tags
        if (isClickedOutside) {
            links.forEach(function (link) {
                link.classList.remove("focus-css");
            });
        }
    });
};

export default navbarFocusModule;
