(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-menu-open]'),
    closeModalBtn: document.querySelector('[data-header-menu-close]'),
    modal: document.querySelector('[data-header-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();