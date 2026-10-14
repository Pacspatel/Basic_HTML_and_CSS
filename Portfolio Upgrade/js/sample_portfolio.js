
/* SLIDESHOW VARIABLES */

let slideIndex = 1;


/* SHOW THE SLIDES */

function showSlides(number) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        return;
    }

    if (number > slides.length) {
        slideIndex = 1;
    }

    if (number < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }
}


/* GO TO THE NEXT OR PREVIOUS SLIDE */

function plusSlides(number) {
    showSlides(slideIndex += number);
}


/* OPEN A PARTICULAR SLIDE */

function currentSlide(number) {
    showSlides(slideIndex = number);
}


/* OPEN THE CONTACT FORM */

function openForm() {
    document.getElementById("myForm").style.display = "block";
}


/* CLOSE THE CONTACT FORM */

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


/* CHECK THE CONTACT FORM */

function submitForm(event) {
    event.preventDefault();

    document.getElementById("form-message").textContent =
        "Thank you! This is a demo form and your message has not been sent.";

    event.target.reset();
}


/* START THE SLIDESHOW */

showSlides(slideIndex);


/* CHANGE SLIDES AUTOMATICALLY */

setInterval(function () {
    plusSlides(1);
}, 4000);
