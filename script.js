document
  .getElementById("click-to-hide")
  .addEventListener("click", hiddenCloseclick);
function hiddenCloseclick() {
  let x = document.getElementById("hidden-element");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const btn = document.querySelector(".filter-btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", () => {
  modalOverlay.classList.add("modal-overlay--visible");
  modals.classList.add("modal--visible");
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});
closeModal.addEventListener("click", (e) => {
  modalOverlay.classList.remove("modal-overlay--visible");
  modals.classList.remove("modal--visible");
});
