document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (name === "" || email === "" || message === "") {
    status.innerText = "Please fill in all fields.";
    status.style.color = "red";
  } else {
    status.innerText = "Message sent successfully!";
    status.style.color = "green";
    this.reset();
  }
});
