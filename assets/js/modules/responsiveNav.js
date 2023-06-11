const responsiveNavModule = () => {
    document.addEventListener("DOMContentLoaded", function () {
        var navLinks = document.querySelectorAll("#nav-responsive a");
        var navOverlay = document.getElementById("nav-overlay");
        var navResponsive = document.getElementById("nav-responsive");
        var isNavVisible = false;

        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function () {
                isNavVisible = false;
                hideNav();
            });
        }

        navOverlay.addEventListener("click", function () {
            if (isNavVisible) {
                isNavVisible = false;
                hideNav();
            }
        });

        document.querySelector(".btn-menu").addEventListener("click", function () {
            if (isNavVisible) {
                isNavVisible = false;
                hideNav();
            } else {
                isNavVisible = true;
                showNav();
            }
        });

        document
            .querySelector(".btn-close-menu")
            .addEventListener("click", function () {
                if (isNavVisible) {
                    isNavVisible = false;
                    hideNav();
                }
            });

        function hideNav() {
            navOverlay.style.display = "none";
            navResponsive.style.transform = "translateX(120%)";
            document.body.style.overflow = "auto";
        }

        function showNav() {
            navOverlay.style.display = "block";
            navResponsive.style.transform = "translateX(0%)";
            document.body.style.overflow = "hidden";
        }
    });
};

export default responsiveNavModule;