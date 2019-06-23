var backLink = document.querySelectorAll(".buy");
var backPopup = document.querySelector(".modal-back");
var backClose = backPopup.querySelector(".modal-close");

for (var i = 0; i < backLink.length; i += 1) {
backLink[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  backPopup.classList.add("modal-back-show");
})
}

backClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  backPopup.classList.remove("modal-back-show");
})
