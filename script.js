const contactForm = document.getElementById("contactForm");

const yearSpan = document.getElementById("year")

yearSpan.textContent = new Date().getFullYear();

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById("message").value.trim();

    window.location.href="mailto:jaskaran@shergill.dev?subject=Contact Form - " + name + "&body=" + message;

    contactForm.reset();
})