

/************************ Gestion des buff ****************************/
const arrow_epee_gauche = document.getElementById('fleche-epee-gauche');
const arrow_epee_droite = document.getElementById('fleche-epee-droite');
const cardTeamLeft = document.getElementById('cardTeam1');
const cardTeamRight = document.getElementById('cardTeam2');

const arrow_bouclier_gauche = document.getElementById('fleche-bouclier-gauche');
const arrow_bouclier_droite = document.getElementById('fleche-bouclier-droite');

const arrow_cercle_gauche = document.getElementById('fleche-cercle-gauche');
const arrow_cercle_droite = document.getElementById('fleche-cercle-droite');

/**
 * Buffs- 1 épée -2 bouclier -3 orbe
 */
let buff1 = 0;
let buff2 = 0;

let HTML = "";



arrow_epee_gauche.addEventListener("click" , () =>{
    HTML = '<img src="./asset/epee.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
    buff1 = 1;
})


arrow_epee_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/epee.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
    buff2 = 1
})

arrow_bouclier_gauche.addEventListener("click" , () =>{
    HTML= '<img src="./asset/bouclier.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
    buff1 = 2;
})


arrow_bouclier_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/bouclier.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
    buff2 = 2
})

arrow_cercle_gauche.addEventListener("click" , () =>{
    HTML= '<img src="./asset/cercle.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 1</div>'
    cardTeamLeft.innerHTML = HTML;
    buff1 = 3;
})


arrow_cercle_droite.addEventListener("click" , () =>{
    HTML = '<img src="./asset/cercle.png" width="60px" height="60px"/>';
    HTML += '<div class="cardTeamText">TEAM 2</div>'
    cardTeamRight.innerHTML = HTML;
    buff2 = 3
})



const tableBody = document.getElementById("tableBody");


/********************* Fetch ***********************/

const url = 'http://localhost:8080/getplayerperso';

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((data) => { console.log(data) ; })
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
  
  let addHTML = '<td><div id="left'+ user.Idplayer +'"><img src="./asset/gauche.png" width="20px" height="20px" alt="fleche" class="player-fleche-left"/></div></td>';
  addHTML += '<td>' + user.NamePlayer + '</td>';
  addHTML += '<td>' + user.AttPlayer + '</td>';
  addHTML += '<td>' + user.DefPlayer + '</td>';
  addHTML += '<td>' + user.LevelPlayer + '</td>';
  addHTML += '<td>' + user.personame + '</td>';
  addHTML += '<td><div id="right'+ user.Idplayer +'"><img src="./asset/droite.png" width="20px" height="20px" alt="fleche" class="player-fleche-right"/></div></td>';

  
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
    if (team1Left.length <=4){
      console.log('team1Left ',team1Left);
      team1Left.push([user.Idplayer,user.personame]);
      document.getElementById("left"+user.Idplayer).style.display ="none";
      document.getElementById("right"+user.Idplayer).style.display ="none";
      fillTeam();
    }else{
      message('La liste est pleine')
    }
    
  }else {
    if (team2Right.length <=4){
        team2Right.push([user.Idplayer,user.personame])
        console.log(team2Right);
        fillTeam();
        document.getElementById("left"+user.Idplayer).style.display ="none";
        document.getElementById("right"+user.Idplayer).style.display ="none";
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
  document.getElementById('message').innerHTML = "<div>"+mesText+"</div>";
  setTimeout(() => {
    document.getElementById('message').style.display = "none";
  },2000)
}

/**
 * Remplisage des Zones Equipes
 */

function fillTeam(){
  
  let i;
  let addHTML;

  for(i=0;i<=team1Left.length-1;++i ){

    console.log('team left ',team1Left[i][1])
    
    addHTML = '<img src="../imgperso/'+team1Left[i][1] +'-idle-left.gif" class="modal-image"></img>'
    document.querySelector('.playerT1-'+team1Left.length).innerHTML = addHTML;

  
  }
  
  for(i=0;i<=team2Right.length-1;++i ){
    addHTML = '<img src="../imgperso/'+team2Right[i][1] +'-idle-right.gif" class="modal-image"></img>'
    document.querySelector('.playerT2-'+team2Right.length).innerHTML = addHTML;
  }

}


document.getElementById('cardEmptyText1').addEventListener("click", () => {unFillTeam("left");})
document.getElementById('cardEmptyText2').addEventListener("click", () => {unFillTeam("right");})


/**
 * Vide les zones Team
 * @param {string} direction 
 */
function unFillTeam(direction){

  let i;
  if(direction ==="left"){
    for(i=0; i<=team1Left.length-1; ++i){
      document.getElementById("right"+team1Left[i][0]).style.display ="block";
      document.getElementById("left"+team1Left[i][0]).style.display ="block";
      document.querySelector('.playerT1-'+(i+1)).innerHTML = "";
    }
    team1Left = [];

    

  }else{
    for(i=0; i<=team2Right.length-1; ++i){
      document.getElementById("right"+team2Right[i][0]).style.display ="block";
      document.getElementById("left"+team2Right[i][0]).style.display ="block";
      document.querySelector('.playerT2-'+(i+1)).innerHTML = "";
    }
    team2Right = [];
    
  }

}



document.getElementById('btn_start').addEventListener("click", () =>{

  let valide = true;

  if (buff1 == 0){
    message("Buff1 manquant");
    valide= false
  }

  if (buff2 == 0){
    message("Buff2 manquant");
    valide= false
  }

  if (team1Left.length === 0){
    message("Team 1 vide");
    valide= false
  }

  if (team2Right.length === 0){
    message("Team 2 vide");
    valide= false
  }

  if(valide){
    
    const team1Data = {
      Buff1: buff1
    };
    
    fetch('http://localhost:8080/team1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(team1Data)
    })
    
    .then(response => response.json())
    .then(data => {console.log('Données envoyées avec succès', data);})
    
    .catch(error => {console.error('Erreur lors de l\'envoi des données', error);});
    
    
    const team2Data = {
      Buff2: buff2
    };
    
    fetch('http://localhost:8080/team2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(team2Data)
    })
    
    .then(response => response.json())
    .then(data => {console.log('Données envoyées avec succès', data);})
    
    .catch(error => {console.error('Erreur lors de l\'envoi des données', error);});




/***********************Récupération des indexs*****************************/
    let indexTeam1 = 0;
    let indexTeam2 = 0;
    
    fetch(`http://localhost:8080/getteam1`,{
      method: "GET",
      headers: {
          "Content-type": "application/json"
      }
      })
      .then(response => response.json())
      .then(data1 => aa(data1))

      function aa(){
        indexTeam1 = data1[0].MaxIdT1;
      }
    



    fetch(`http://localhost:8080/getteam2`,{
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
    })
    .then(response => response.json())
    .then(data2 => console.log('Index T2 ',data2[0].MaxIdT2))
    




/************************ Peuplemnt des équipes *****************************************/
    console.log('indexTeam1 ',indexTeam1)

    const team1playerData = {
      IdTeam1: indexTeam1,
      Idplayer: team1Left[0][0]
    };
    
    fetch('http://localhost:8080/creatteam1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(team1playerData)
    })
    
    .then(response => response.json())
    .then(data => {console.log('Données envoyées avec succès', data);})
    
    .catch(error => {console.error('Erreur lors de l\'envoi des données', error);});



  }
});




















