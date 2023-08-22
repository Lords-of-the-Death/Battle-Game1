// OUVERTURE ET FERMETURE MODAL 

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
        let idPerso = image.id
        fetch(`http://localhost:8080/hero/${idPerso}`,{
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
        })
        .then(response => response.json())
        .then(data => handlePlayer(data))
        function handlePlayer(data) {
            let namechar = document.getElementById('namechar')
            namechar.innerHTML = data[0].NamePerso
        }
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// FETCH CREATION PERSO

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
    
    const inputName = document.getElementById('inputName').value;
    const randomDef = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const randomAtt = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const level = 1;
    
    const userData = {
        NamePlayer: inputName,
        AttPlayer: randomAtt,
        DefPlayer: randomDef,
        LevelPlayer: level
    };
    
    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Données envoyées avec succès', data);
    })
    .catch(error => {
        console.error('Erreur lors de l\'envoi des données', error);
    });

    modal.style.display = "none";
});