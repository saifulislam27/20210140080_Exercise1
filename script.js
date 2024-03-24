function show(){
    alert("UDAH DONE YA BANGG!!")
}
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(-100%)';
        }
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= document.querySelectorAll('.slides img').length) {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slides img').length - 1;
    }
    showSlides();
}

showSlides();