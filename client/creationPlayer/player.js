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

        const idPerso = image.id
        modal.style.display = "block";
        modalImage.src = image.src;
        modalImage.alt = idPerso;

        

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

            let attchar = document.getElementById('attchar')
            attchar.innerHTML = data[0].AttPerso

            let defchar = document.getElementById('defchar')
            defchar.innerHTML = data[0].DefPerso            

        }
    });
});

document.getElementById('user-form').addEventListener('submit', function(event) {

    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
    
    const inputName = document.getElementById('inputName').value;
    const Deef = defchar.innerHTML;
    const Attk = attchar.innerHTML;
    const level = 1;

    const userData = {
        NamePlayer: inputName,
        AttPlayer: Attk,
        DefPlayer: Deef,
        LevelPlayer: level,
        idPerso: modalImage.alt
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


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
