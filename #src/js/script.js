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