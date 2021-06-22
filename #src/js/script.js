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

@@include('slider.js');
