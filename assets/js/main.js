// Data-contactForm
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzZBVjGp28Io4c5e7IZM0RxA0axh7fFGEfEwk-PHXniVUleyJdz_52NbQD-pwobt0-u/exec";
const form = document.querySelector("#contact-form");
const alertMessage = document.querySelector("#alert-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alertMessage.style.display = "block";
  alertMessage.textContent = "Cảm ơn bạn đã liên hệ cho tôi!";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Gửi Thành Công!", response))
    .catch((error) => console.error("Error!", error.message));

  form.reset();
});

//Btn Turn OFF nav-menu when click Categories
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

//add focus for navbar-link

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
