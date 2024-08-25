// /Бургер/ 
document.querySelector('.header__burger-btn').addEventListener('click', ()=>{
 document.querySelector('.header').classList.toggle('open')
})

// /Слайдер/ 
window.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide"); //все элементы с классом slide
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  //длина слайда плюс отступ
  const slideWidth = slides[0].offsetWidth + 24;

  function goToSlide(index) {
    currentIndex = index;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  }

  function goToPrevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(slides.length - 2);
    }
  }

  function goToNextSlide() {
    if (currentIndex < slides.length - 2) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);
});
