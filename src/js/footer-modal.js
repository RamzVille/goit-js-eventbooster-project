

// const teamLink = document.querySelector("[data-team]");
// const closeModalBtn = document.querySelector('[data-team-modal-close]');
// const modalTeam = document.querySelector('[data-team-modal]');
// const backdrop = document.querySelector("body");

// const closeModal = () => {
//     modalTeam.classList.add("is-hidden");
//     backdrop.removeEventListener("keydown", closeEscKey);
// };

// const openModal = () => {
//     modalTeam.classList.remove("is-hidden");
//     backdrop.addEventListener("keydown", closeEscKey);
// };

// const closeEscKey = (event) => {
//     let keyCode = event.keyCode;
//     if (keyCode === 27) {
//         closeModal();
//     }
// };
// const closeByClick = (event) => {
//     if (event.target === modalTeam) {
//         closeModal();
//     }
// };
// closeModalBtn.addEventListener("click", closeModal);
// modalTeam.addEventListener("click", closeByClick);
// teamLink.addEventListener("click", openModal);

// export default modalTeam

(() => {
  const refs = {
    openModalBtn:
      document.querySelector(
        '[data-modal-open]'
      ) /*The Attribute [data-modal-open] links the openModalBtn selector 
      to the HTML element that has [data-modal-open] as an attribute, the samething applies to the two other selectors (below) inside this object */,

    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  //These two event listeners above call the "toggleModal()" function when they are triggered.

  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');
  }
  //This function "toggleModal()" adds and removes the class "backdrop__is-hidden" to the HTML element that has the attribute [data-modal]
})();
