const url = 'http://localhost:8080/top';

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((body) => { createCards(body); })
    /*.then((body) => {console.log(body);})*/
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });
});

async function fetchData() {
  var headers = new Headers();

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Erreur HTTP, statut = " + response.status);
    }
    const body = await response.json();
    console.log('Données fetch', body);
    return body;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données : " + error.message);
  }
}


function createCards(body){
    let cardsContainer = document.getElementById("listeplayer");
    let cards = body;
    let addHTML;


    cards.forEach((card) => {
        var cardElement = document.createElement("div");
        cardElement.classList.add("players");
    
        addHTML =  card.NamePlayer + ' PV: ' + card.LevelPlayer;

        console.log('Element ',addHTML);
    
        cardElement.innerHTML = addHTML;
    
        cardElement.addEventListener("click", () => { showPopup(card); });
    
        cardsContainer.appendChild(cardElement);
      });

}