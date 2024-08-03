document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const container = document.querySelector('.depoimentos-container');
    const slides = document.querySelectorAll('.depoimento');
    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        container.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    setInterval(showNextSlide, 5000); 
});