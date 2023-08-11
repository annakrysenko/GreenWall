(() => {
  const refs = {
    openModalHeroBtn: document.querySelector('.contact-us-btn-hero'),


    openModalBtn: document.querySelector('.contact-us-btn'),
    closeModalBtn: document.getElementById('close'),
    backdrop: document.querySelector('.backdrop'),

    openModalBurgerBtn: document.querySelector('.icon-menu'),
    closeModalBurgerBtn: document.getElementById('close-burger'),
    modalBurger: document.querySelector('.burger-menu'),

    burgerLinks :document.querySelectorAll('.burger-nav-list__item')

  };

  if(refs.openModalHeroBtn)
    refs.openModalHeroBtn.addEventListener('click', toggleModal);


  if (refs.openModalBtn)
    refs.openModalBtn.addEventListener('click', toggleModal);
  if (refs.closeModalBtn)
    refs.closeModalBtn.addEventListener('click', toggleModal);
  if (refs.backdrop)
    refs.backdrop.addEventListener('click', e => onClickBackdrop(e));

  if (refs.closeModalBurgerBtn)
    refs.closeModalBurgerBtn.addEventListener('click', toggleModalBurger);
  if (refs.openModalBurgerBtn)
    refs.openModalBurgerBtn.addEventListener('click', toggleModalBurger);

  function toggleModalBurger() {
    refs.modalBurger.classList.toggle('is-hidden');
  }

  function toggleModal(e) {
    refs.backdrop.classList.toggle('is-hidden');
  }

  function onClickBackdrop(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }


refs.burgerLinks.forEach((link) => {
    if(link){
        link.addEventListener('click', () => {
          toggleModalBurger()
          const anchor = link.getAttribute('data-section');
          console.log(anchor)
          // window.location.hash= anchor;
          pageSlider.slideTo(anchor, 800);

        })
    }
})

})();
