

document.addEventListener("DOMContentLoaded", function() {
  var showTelButton = document.getElementById("show-tel");
  showTelButton.addEventListener("click", function() {
    var span = this.querySelector("span");
    span.textContent = this.getAttribute("data-telephone");

  });


  var toggleDetailsButton = document.getElementById("toggleDetails");
  toggleDetailsButton.addEventListener("click", function() {
    var details = document.getElementById("prop-details");
    details.classList.toggle("open");
    if (details.classList.contains("open")) {
      this.textContent = "Show less";
    } else {
      this.textContent = "Show more";
    }
  });

  var openModalButton = document.getElementById("openModal");
  var closeModalButton = document.getElementById("closeModal");
  var closeButton = document.getElementById("closeButton");
  var sendButton = document.getElementById("sendButton");
  var emailModal = document.getElementById("emailModal");

  openModalButton.addEventListener("click", function() {
    emailModal.style.display = "block";
  });

  closeModalButton.addEventListener("click", function() {
    emailModal.style.display = "none";
  });

  closeButton.addEventListener("click", function() {
    emailModal.style.display = "none";
  });

  sendButton.addEventListener("click", function() {
    // Handle send message functionality
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform further actions (e.g., AJAX request, form submission)

    // Close the modal
    emailModal.style.display = "none";
  });



});


