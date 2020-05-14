
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBnt = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBnt.addEventListener('click', switchModal);
});



document.addEventListener('keydown', function (event) {
  var modal = document.querySelector('.modal')
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
})



