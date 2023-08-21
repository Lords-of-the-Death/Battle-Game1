
/*
let a1=document.getElementById('player1');
a1.innerText='Godfroy';

let a2=document.getElementById('player2');
a2.innerText='Cyclamen';

let a3=document.getElementById('player3');
a3.innerText='Concombre';

let a4=document.getElementById('player4');
a4.innerText='AAAAAA';

let a5=document.getElementById('player5');
a5.innerText='AAAAAA';*/

const url = 'http://localhost:8080/top';

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((body) => { createCards(body); })
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });
});

async function fetchData() {
  var headers = new Headers();

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  console.log('Données Hearders ', headers);

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


/*<div class="players player1" id="player1">
                        fdgdf
                    </div>*/

function createCards(body){
    var cardsContainer = document.getElementById("listeplayer");
    var cards = body.data;

    cards.forEach((card) => {
        var cardElement = document.createElement("div");
        cardElement.classList.add("players");
    
        addHTML =  card.NamePlayer + ' Lvl: ' + card.LevelPlayer;
    
        cardElement.innerHTML = addHTML;
    
        cardElement.addEventListener("click", () => { showPopup(card); });
    
        cardsContainer.appendChild(cardElement);
      });

}