(() => {
  const refs = {
    openModalBtn: document.querySelector('.contact-us-btn'),
    closeModalBtn: document.getElementById('close'),
    backdrop: document.querySelector('.backdrop'),
  };

  if(refs.openModalBtn)refs.openModalBtn.addEventListener('click', toggleModal);
  if( refs.closeModalBtn)refs.closeModalBtn.addEventListener('click', toggleModal);
  if(refs.backdrop)refs.backdrop.addEventListener('click', e => onClickBackdrop(e));

  function toggleModal(e) {
    refs.backdrop.classList.toggle('is-hidden');
  }

  function onClickBackdrop(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }
})();
