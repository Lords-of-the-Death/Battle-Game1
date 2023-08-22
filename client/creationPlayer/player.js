const newUser = {
    NamePlayer : "Dydy",
    AttPlayer : 55,
    DefPlayer : 45,
    LevelPlayer : 5
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify(newUser);
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("http://localhost:8080/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

const modal = document.getElementById("card");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".modal-image");
const closeModal = document.querySelector(".close");

if (modalImage.src) {
    modal.style.display = "block";
} else {
    modal.style.display = "none";
}

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = image.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});