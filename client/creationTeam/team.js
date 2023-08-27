

/************************ Gestion des buff ****************************/
const arrow_epee_gauche = document.getElementById('fleche-epee-gauche');
const arrow_epee_droite = document.getElementById('fleche-epee-droite');
const cardTeamLeft = document.getElementById('cardTeam1');
const cardTeamRight = document.getElementById('cardTeam2');

const arrow_bouclier_gauche = document.getElementById('fleche-bouclier-gauche');
const arrow_bouclier_droite = document.getElementById('fleche-bouclier-droite');

const arrow_cercle_gauche = document.getElementById('fleche-cercle-gauche');
const arrow_cercle_droite = document.getElementById('fleche-cercle-droite');


let HTML = "";



arrow_epee_gauche.addEventListener("click" , () =>{
    HTML = '<img src="./asset/epee.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
})


arrow_epee_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/epee.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
})

arrow_bouclier_gauche.addEventListener("click" , () =>{
    HTML= '<img src="./asset/bouclier.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
})


arrow_bouclier_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/bouclier.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
})

arrow_cercle_gauche.addEventListener("click" , () =>{
    HTML= '<img src="./asset/cercle.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
})


arrow_cercle_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/cercle.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
})



const tableBody = document.getElementById("tableBody");


/********************* Fetch ***********************/

const url = 'http://localhost:8080/getplayerperso';

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((data) => { console.log() ; })
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });
});

async function fetchData() {
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
      let users = data;

      users.forEach(user => {
          console.log('User ', user.IdPlayer);
          let ligneTb = createRow(user);
          tableBody.appendChild(ligneTb);

           /******** Ajouter des listerner ****************/
          const arrowleft = ligneTb.querySelector(".player-fleche-left");
          const arrowright= ligneTb.querySelector(".player-fleche-right");


          // Add click event listeners for edit and delete icons
          arrowleft.addEventListener("click", (event) => {
              event.stopPropagation();
              addPlayer(user,'left');
          });

          arrowright.addEventListener("click", (event) => {
              event.stopPropagation();
              addPlayer(user,'right');
          })
      });
  })
 
  .catch((error) => {
          console.error("Error fetching data:", error);
      });
}

/**
 * 
 * @param {object} user 
 * @returns HTMLElement 
 */
function createRow(user) {
  let ligneTb = document.createElement("tr");
  ligneTb.classList.add("lignData");
  
  let addHTML = '<td><img src="./asset/gauche.png" width="20px" height="20px" alt="fleche" id="left'+ user.IdPlayer +'" class="player-fleche-left"/></td>';
  addHTML += '<td>' + user.NamePlayer + '</td>';
  addHTML += '<td>' + user.AttPlayer + '</td>';
  addHTML += '<td>' + user.DefPlayer + '</td>';
  addHTML += '<td>' + user.LevelPlayer + '</td>';
  addHTML += '<td>' + user.personame + '</td>';
  addHTML += '<td><img src="./asset/droite.png" width="20px" height="20px" alt="fleche" id="right'+ user.IdPlayer +'" class="player-fleche-right"/></td>';

  
  ligneTb.innerHTML = addHTML;
  
  return ligneTb;
}


/************** Choix des équipes *************************/

let team1Left = [];
let team2Right = [];



/**
 * 
 * @param {object} user 
 * @param {string} direction 
 */


function addPlayer(user, direction){
    if(direction ==="left"){
      if (team1Left.length <=5){
        team1Left.push([user.IdPlayer,user.personame])
      }else{
        message('La liste est pleine')
      }
      
    }else {
      if (team2Right <=5){
        team2Right.push([user.IdPlayer,user.personame])
      }else{
        message('La liste est pleine')
      }

    }

}

/**
 * 
 * @param {string} mesText 
 */
function message(mesText){
  document.getElementById('message').style.display = "flex";
  document.getElementById('message').innerText = mesText;
  setTimeout(() => {
    document.getElementById('message').style.display = "none";
  },2000)
}

function fillTeam(){
  

}










