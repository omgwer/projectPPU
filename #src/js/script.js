window.addEventListener('load', evt => {
  headerSmoothHide();
  accordionList();
  setMenuScrollNavigation();
  setScrollToStartPage();
  customDropList();
  contactsHide();
  });
// header scripts
function headerSmoothHide() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("js-navigation-bar").style.top = "0";
      prevScrollpos = currentScrollPos;
    } else {
      document.getElementById("js-navigation-bar").style.top = "-110px";
      prevScrollpos = currentScrollPos;
    }

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
      // accordionTrigger.classList.toggle('hidden');
      //
      // animatedArrow.classList.toggle('rotate');
    })
  });
}

function customDropList() {
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");

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



function contactsHide() {
  const contactsBlock = document.querySelector('.contacts');
  const contactsButton = document.querySelector('.contacts__button');

  let trigger =  function (evt) {
    if (contactsBlock.classList.contains('contacts_hidden')) {
      contactsBlock.classList.remove('contacts_hidden');
    } else {
      contactsBlock.classList.add('contacts_hidden');

    }
  }
  contactsButton.addEventListener('click', trigger);
}

@@include('feedbackSlider.js');
@@include('slider.js');
