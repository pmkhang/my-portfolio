const contactFormModule = () => {
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
};

export default contactFormModule;