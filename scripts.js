let submitBtn = document.getElementsByClassName("submitBtn");
let firstName = "";
let lastName = "";
for (let i = 0; i < submitBtn.length; i++) {
    submitBtn[i].addEventListener('click', function(event) {
        firstName = document.getElementById("firstName").value;
        lastName = document.getElementById("lastName").value;

        let newLink = document.createElement('a');
        newLink.href = 'https://github.com/Smallninja/UnitOneProject.git';
        newLink.textContent = "Click here to go on an adventure!"
        newLink.classList.add('btn', 'btn-white');
        
        displayName.textContent = `Hello, ${firstName} ${lastName}! `;
        let referenceNode = document.getElementById('displayName');
        referenceNode.parentNode.insertBefore(newLink, referenceNode.nextSibling);
    });
}