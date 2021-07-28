window.addEventListener('load', evt => {
  headerSmoothHide();
  accordionList();
  menuScrollNavigation();
  scrollToStartPage();
  customDropList();
  feedbackSlider();
  initHeaderMenu();
  setTrainingBlockElement();
});

function headerSmoothHide() {
  let prevScrollpos = window.pageYOffset;
  const burgerMenu = document.querySelector('.js-menu-burger');

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("js-navigation-bar").style.top = "0";
      prevScrollpos = currentScrollPos;
    } else {
      document.getElementById("js-navigation-bar").style.top = "-110px";
      prevScrollpos = currentScrollPos;
    }
    if (burgerMenu.classList.contains('open')) {
      hideHeaderMenu('close');
    }
  }
}

function hideHeaderMenu(command) {
  const navigationMenu = document.querySelector('.header__nav-menu');
  const burgerMenu = document.querySelector('.js-menu-burger');

  if (command === 'open') {
    navigationMenu.style.top = "97px";
    burgerMenu.classList.add('open');
  } else {
    navigationMenu.style.top = "-390px";
    burgerMenu.classList.remove('open');
  }
}

function initHeaderMenu() {
  const burgerMenu = document.querySelector('.js-menu-burger');

  burgerMenu.addEventListener('click', () =>{
    if (!burgerMenu.classList.contains('open')) {
      hideHeaderMenu('open')
    } else {
      hideHeaderMenu('close');
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

function setTrainingBlockElement() {
  const trainingBlocks = document.querySelectorAll('.training-block__block');
  const trainingButtons = document.querySelectorAll('.training-block__menu-list');

  function showBlock(element) {
    let id = element.dataset.number;
    const deleteActiveClass = document.querySelector('.training-block__block_active');
    deleteActiveClass.classList.remove('training-block__block_active');
    trainingBlocks[id - 1].classList.add('training-block__block_active');
  }

  trainingButtons.forEach(element =>{
    element.addEventListener('click', evt => {
      if (element.classList.contains('training-block__menu-list_active')) {
        return null;
      } else {
        const deleteActiveClass = document.querySelector('.training-block__menu-list_active');
        deleteActiveClass.classList.remove('training-block__menu-list_active');
        element.classList.add('training-block__menu-list_active');
        showBlock(element);
      }
    })
  })
}

function accordionList() {
  const accordionsList = document.querySelectorAll('.faq__accordion');
  const accordionButton = document.querySelectorAll('.faq__button');
  accordionsList.forEach(element => {
    element.addEventListener('click', evt => {
      const accordionTrigger = element.querySelector('.faq__accordion_hide');
      const animatedArrow = element.querySelector('.faq__open-button');
      const closedButton = element.querySelector('.faq__close-button');
      if (accordionTrigger.classList.contains('faq__target')) {
        accordionTrigger.style.height = getComputedStyle(accordionTrigger).height;
        accordionTrigger.classList.remove('faq__target');
        getComputedStyle(accordionTrigger).height; // reflow
        accordionTrigger.style.height = '';
        animatedArrow.classList.add('faq__rotate');
        animatedArrow.classList.remove('faq__button-hide');
        closedButton.classList.remove('faq__rotate');
        closedButton.classList.add('faq__button-hide');
      } else {
        accordionTrigger.classList.add('faq__target');
        let h = getComputedStyle(accordionTrigger).height;
        accordionTrigger.style.height = '0';
        getComputedStyle(accordionTrigger).height; // reflow
        accordionTrigger.style.height = h;
        setTimeout(function () { accordionTrigger.style.height = '' }, 1000);
        animatedArrow.classList.remove('faq__rotate');
        animatedArrow.classList.add('faq__button-hide');
        closedButton.classList.add('faq__rotate');
        closedButton.classList.remove('faq__button-hide');
      }
    })
  });
}

function customDropList() {
  const selected = document.querySelector(".join-form__selected");
  const optionsContainer = document.querySelector(".join-form__options-container");
  const optionsList = document.querySelectorAll(".join-form__option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
}

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
  const allDots = document.querySelectorAll('.teachers-feedback__dots-item');
  const nexts = document.querySelector('.teachers-feedback__next');
  const navNumber = document.querySelector('.js-feedback-number');
  let slideIndex = 1;

  prevs.addEventListener('click', evt=> {
    minusSlide();
  });

  nexts.addEventListener('click', evt=> {
    plusSlide();
  });

  for (let i = 0; i < allDots.length ; i++) {
    allDots[i].addEventListener('click', evt => {
      let dotIndex = i + 1;
      currentSlide(dotIndex);
    })
  }

  showSlides(slideIndex);

  function plusSlide() {
    showSlides(slideIndex += 1);
  }

  function minusSlide() {
    showSlides(slideIndex -= 1);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("teachers-feedback__item");
    const dots = document.getElementsByClassName("teachers-feedback__dots-item");
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
      dots[i].className = dots[i].className.replace("teachers-feedback__active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " teachers-feedback__active";
    navNumber.textContent = `${slideIndex}/6`;
  }
}