function openService(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="default" and click on it
document.getElementById("default").click();

var feedbackButton = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var closeFeedback = popup.querySelector(".modal-close");
var names = popup.querySelector("[name=names]");


feedbackButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  names.focus();
});

closeFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});



var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
evt.preventDefault();
mapPopup.classList.add("modal-map-show")
})

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
})
