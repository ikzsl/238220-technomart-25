var backLink = document.querySelector(".buy");
var backPopup = document.querySelector(".modal-back");
var backClose = backPopup.querySelector(".modal-close");

backLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  backPopup.classList.add("modal-back-show");
})

backClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  backPopup.classList.remove("modal-back-show");
})
