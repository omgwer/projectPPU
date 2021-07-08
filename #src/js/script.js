window.addEventListener('load', evt => {
  headerSmoothHide();
  accordionList();
  menuScrollNavigation();
  scrollToStartPage();
  //customDropList();
  feedbackSlider();
  initHeaderMenu();
  });

function headerSmoothHide() {
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("js-navigation-bar").style.top = "0";
      prevScrollpos = currentScrollPos;
      hideHeaderMenu();
    } else {
      document.getElementById("js-navigation-bar").style.top = "-110px";
      prevScrollpos = currentScrollPos;
      hideHeaderMenu();
    }
  }
}

function hideHeaderMenu() {
  const navigationMenu = document.querySelector('.header__nav-menu');
  const burgerMenu = document.querySelector('.js-menu-burger');
  navigationMenu.style.top = "-380px";
  burgerMenu.classList.remove('open');
}

function initHeaderMenu() {
  const burgerMenu = document.querySelector('.js-menu-burger');
  const navigationMenu = document.querySelector('.header__nav-menu');

  burgerMenu.addEventListener('click', () =>{
    if (!burgerMenu.classList.contains('open')) {
      navigationMenu.style.top = "109px";
      //navigationMenu.classList.remove('js-menu-nav');
      burgerMenu.classList.add('open');
    } else {
      burgerMenu.classList.remove('open');
      navigationMenu.style.top = "-380px";
      //navigationMenu.classList.add('js-menu-nav');
    }

  });
}


function menuScrollNavigation() {
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
      const animatedArrow = element.querySelector('.faq__arrow');
      if (accordionTrigger.classList.contains('target')) {
        accordionTrigger.style.height = getComputedStyle(accordionTrigger).height;
        accordionTrigger.classList.remove('target');
        getComputedStyle(accordionTrigger).height; // reflow
        accordionTrigger.style.height = '';
        animatedArrow.classList.remove('rotate');
      } else {
        accordionTrigger.classList.add('target');
        let h = getComputedStyle(accordionTrigger).height;
        accordionTrigger.style.height = '0';
        getComputedStyle(accordionTrigger).height; // reflow
        accordionTrigger.style.height = h;
        setTimeout(function () { accordionTrigger.style.height = '' }, 1000);
        animatedArrow.classList.add('rotate');
      }
    })
  });
}

// function customDropList() {
//   const selected = document.querySelector(".selected");
//   const optionsContainer = document.querySelector(".options-container");
//   const optionsList = document.querySelectorAll(".option");
//
//   selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
//   });
//
//   optionsList.forEach(option => {
//     option.addEventListener("click", () => {
//       selected.innerHTML = option.querySelector("label").innerHTML;
//       optionsContainer.classList.remove("active");
//     });
//   });
// }

function scrollToStartPage() {
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

function feedbackSlider() {

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
}





@@include('slider.js');