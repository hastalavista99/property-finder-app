

document.addEventListener("DOMContentLoaded", function() {

  const passwordField = document.getElementById("password-field");
  const togglePasswordCheckbox = document.getElementById("toggle-password-checkbox");

  togglePasswordCheckbox.addEventListener("change", function() {
    passwordField.type = togglePasswordCheckbox.checked ? "text" : "password";

  });


});

let showTelButton = document.getElementById("show-tel");
showTelButton.addEventListener("click", function() {
  let span = this.querySelector("span");
  span.textContent = this.getAttribute("data-telephone");

});

let openModalButton = document.getElementById("openModal");
let closeModalButton = document.getElementById("closeModal");
let closeButton = document.getElementById("closeButton");
let sendButton = document.getElementById("sendButton");
let emailModal = document.getElementById("emailModal");

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
  const agent_id = document.getElementById("agent_id").value;
  const first_name = document.getElementById("message-first-name").value;
  const last_name = document.getElementById("message-last-name").value;
  const email = document.getElementById("message-email").value;
  const message = document.getElementById("message-text").value;

  fetch("/agent/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id,
      first_name,
      last_name,
      email,
      message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error sending the message:", error);
    });

  // Close the modal
  emailModal.style.display = "none";
});

const toggleDetailsButton = document.getElementById("toggleDetails");
toggleDetailsButton.addEventListener("click", function() {
  let details = document.getElementById("prop-details");
  details.classList.toggle("open");
  if (details.classList.contains("open")) {
    this.textContent = "Show less";
  } else {
    this.textContent = "Show more";
  }
});


