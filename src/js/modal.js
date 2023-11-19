
  const refs = {
    openModalHeroBtn: document.querySelector('.contact-us-btn-hero'),

    openModalBtn: document.querySelector('.contact-us-btn'),
    closeModalBtn: document.getElementById('close'),
    backdrop: document.querySelector('.backdrop'),
  };

  if (refs.openModalHeroBtn) {
    refs.openModalHeroBtn.addEventListener('click', toggleModal);
  }

  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener('click', toggleModal);
  }
  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }
  if (refs.backdrop) {
    refs.backdrop.addEventListener('click', e => onClickBackdrop(e));
  }

  function toggleModal(e) {
    // e.stopPropagation()
    refs.backdrop.classList.toggle('is-hidden');
  }

  function onClickBackdrop(e) {
    // e.stopPropagation()
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }

