window.addEventListener('load', evt => {
  headerSmoothHide();
  accordionList();
  setMenuScrollNavigation();
  setScrollToStartPage();
});
// header scripts
function headerSmoothHide() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("js-navigation-bar").style.top = "0";
    } else {
      document.getElementById("js-navigation-bar").style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
  }
}

function setMenuScrollNavigation() {
  const smoothLinks = document.querySelectorAll('.js-menu-item');
  smoothLinks.forEach(smoothLink => {
    smoothLink.addEventListener('click', evt => {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    });
  });
}

function accordionList() {
  const accordionsList = document.querySelectorAll('.faq__accordion');
  const accordionButton = document.querySelectorAll('.faq__button');
  accordionsList.forEach(element => {
    element.addEventListener('click', evt => {
      const accordionTrigger = element.querySelector('.faq__accordion_hide');
      accordionTrigger.classList.toggle('hidden');
      const animatedArrow = element.querySelector('.faq__arrow');
      animatedArrow.classList.toggle('rotate');
    })
  });
}

function setScrollToStartPage() {
  const button = document.getElementById('scrollToStart');
  window.addEventListener('scroll', function (evt){
    let offsetYPosition = window.pageYOffset.toFixed();
    const offsetYToButtonVisible = 750;
    if (offsetYPosition >= offsetYToButtonVisible ) {
      button.classList.remove('visually-hidden');
    } else {
      button.classList.add('visually-hidden');
    }
  })

  button.addEventListener('click', function (evt){
    evt.preventDefault();
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  })
}

/* Индекс слайда по умолчанию */
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("teachers-feedback__item");
  var dots = document.getElementsByClassName("slider-dots_item");
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


@@include('slider.js');
