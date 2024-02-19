let submitBtn = document.getElementsByClassName("submitBtn");
let firstName = "";
let lastName = "";
for (let i = 0; i < submitBtn.length; i++) {
    submitBtn[i].addEventListener('click', function(event) {
        firstName = document.getElementById("firstName").value;
        lastName = document.getElementById("lastName").value;
        displayName.textContent = `Hello, ${firstName} ${lastName}!`;
    });
}