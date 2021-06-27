
const prevs = document.querySelector('.teachers-feedback__prev');
prevs.addEventListener('click', evt=> {
  minusSlide();
});
const nexts = document.querySelector('.teachers-feedback__next');
nexts.addEventListener('click', evt=> {
  plusSlide();
});

const allDots = document.querySelectorAll('.slider-dots_item');
for (let i = 0; i < allDots.length ; i++) {
  allDots[i].addEventListener('click', evt => {
    let dotIndex = i + 1;
    currentSlide(dotIndex);
  })
}
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* Основная функция слайдера */
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("teachers-feedback__item");
  const dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}