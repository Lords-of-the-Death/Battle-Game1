

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
    .then((data) => { console.log('getplayerperso '); })
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });
});

async function fetchData() {
  await fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
      let users = data;

      users.forEach(user => {
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
  addHTML += '<td>' + user.Attplayer + '</td>';
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
        console.log('remplir left ', user.Attplayer)

      team1Left.push([user.Idplayer,user.personame,user.Attplayer,user.DefPlayer,user.LevelPlayer]);

      console.log('Valeur  team1Left ',team1Left[0][0] ," 1: ", team1Left[0][1]," 2:",team1Left[0][2]," 3:",team1Left[0][3]," 4:",team1Left[0][3]);


      document.getElementById("left"+user.Idplayer).style.display ="none";
      document.getElementById("right"+user.Idplayer).style.display ="none";
      console.log('T1 ',team1Left);
      fillTeam();
    }else{
      message('La liste est pleine')
    }
    
  }else {
    if (team2Right.length <=4){
        team2Right.push([user.Idplayer,user.personame,user.Attplayer,user.DefPlayer,user.LevelPlayer])
        console.log('T2 ',team2Right);
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
    
    prog();
   
  }
});


async function prog(){
  await createTeam1();
  await createTeam2();
  
  await populateTeam()
  await majPlayer();
  await createBattle();

  await getIdBattle();

  window.location.href="http://127.0.0.1:5501/battle%20fight/battle.html"

}



/********************************** Creation des Equipes ***********/

async function createTeam1(){
  const team1Data = {
    Buff1: buff1
  };
  
  await fetch('http://localhost:8080/team1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(team1Data)
  })
  
  .then(response => response.json())
  .then(data => {console.log('Données envoyées avec succès', data);})
  
  .catch(error => {console.error('Erreur lors de l\'envoi des données', error);});
}


async function createTeam2(){
  const team2Data = {
    Buff2: buff2
  };
  
  await fetch('http://localhost:8080/team2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(team2Data)
  })
  
  .then(response => response.json())
  .then(data => {console.log('Données envoyées avec succès', data);})
  
  .catch(error => {console.error('Erreur lors de l\'envoi des données', error);});
}


/***********************Récupération des indexes*****************************/

async function getIndexTeam1(){

  var headers = new Headers();

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  try {
    const response = await fetch(`http://localhost:8080/getteam1`, requestOptions);
    if (!response.ok) {
      throw new Error("Erreur HTTP, statut = " + response.status);
    }
    const body = await response.json();
    console.log('Données getIndexTeam1', body);
    return body;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données : " + error.message);
  }

}





async function getIndexTeam2(){
  var headers = new Headers();

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  try {
    const response = await fetch(`http://localhost:8080/getteam2`, requestOptions);
    if (!response.ok) {
      throw new Error("Erreur HTTP, statut = " + response.status);
    }
    const body = await response.json();
    console.log('Données getIndexTeam2', body);
    return body;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des données : " + error.message);
  }
}
  
  
  /************************ Peuplement des équipes *****************************************/
  
  let team1LeftTab;
  let team2RightTab;

  async function populateTeam(){  let i =0;
    for(i=0 ; i<team1Left.length ;++i){
      
      team1LeftTab = team1Left[i][0];
      console.log('team1LeftTab ',team1LeftTab )
      await fillTeam1(team1LeftTab)
    }
    
    let j=0;
    for(j=0 ; j<team2Right.length ;++j){
      team2RightTab = team2Right[j][0]
      console.log('team1LeftTab ',team2RightTab )
      await fillTeam2(team2RightTab)
  }}
  
  let indexTeam1 = 0;
  let indexTeam2 = 0; 


 
async function fillTeam1(team1LeftTab){
  await getIndexTeam1()
    .then((body) => {indexTeam1 = body[0].MaxIdT1;})
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });


        const data = {
          "IdTeam1": indexTeam1,
          "Idplayer": team1LeftTab
        };
        
        await fetch('http://localhost:8080/creatteam1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        
        .then(response => response.json())
        .then(data => {console.log('Données envoyées avec succès fillTeam1', data);})
        
        .catch(error => {console.error('Erreur lors de l\'envoi des données fillTeam1', error);});
        console.log('fillTeam1 ',indexTeam1);
 
}
  



async function fillTeam2(team2RightTab){
  await getIndexTeam2()
    .then((body) => {indexTeam2 = body[0].MaxIdT2;})
    .catch((error) => { console.log("Erreur de récupération des données : " + error.message); });

        const data = {
          "IdTeam2": indexTeam2,
          "Idplayer": team2RightTab
        };
        
        await fetch('http://localhost:8080/creatteam2', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        
        .then(response => response.json())
        .then(data => {console.log('Données envoyées avec succès fillTeam2', data);})
        
        .catch(error => {console.error('Erreur lors de l\'envoi des données fillTeam2', error);});
        console.log('fillTeam2 ',indexTeam2);
 
}
  


  /*************************** mise a jour player avant la bataille **************************/
  

  async function majPlayer(){
    let att;
    let def;
    let lvl;
    let id;
  
    let i=0;
    let j=0;

    for(i=0 ; i<team1Left.length ;++i){
      console.log('Boucle left  ',team1Left[i][0] ," ", team1Left[i][2]," ",team1Left[i][3]);

      id = team1Left[i][0];
      att = team1Left[i][2];
      def = team1Left[i][3];
      lvl = team1Left[i][4];

      switch(buff1){
        case 1:
          att = att + 5;
          break;
        case 2:
          def = def + 5;
          break;
        case 3:
          lvl = lvl + 5;
          break;
      }

      await updatePlayer(att,def,lvl,id)
    }



    for(j=0 ; j<team2Right.length ;++j){
      console.log('Boucle right  ',team1Left[j][0] ," ", team1Left[j][2]," ",team1Left[j][3]);

      id = team2Right[j][0];
      att = team2Right[j][2];
      def = team2Right[j][3];
      lvl = team2Right[j][4];

      switch(buff2){
        case 1:
          att = att + 5;
          break;
        case 2:
          def = def + 5;
          break;
        case 3:
          lvl = lvl + 5;
          break;
      }


      await updatePlayer(att,def,lvl,id)

    }
  }



  async function updatePlayer(att,def,lvl,id){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = {
      "Attplayer": att,
      "DefPlayer": def,
      "LevelPlayer": lvl
    };

    await fetch(`http://localhost:8080/setplayervalue/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    
    })
  
    .then(response => response.json())
    .then(data => {console.log('Données envoyées avec succès updatePlayer', data);})

    .catch(error => {console.error('Erreur lors de l\'envoi des données updatePlayer', error);});
    console.log('updatePlayer ',att ," ", def," ",lvl," ",id);


  }
  
    
  async function getIdBattle(){
    var headers = new Headers();
    
    console.log('Index Team 1 ',indexTeam1);
    console.log('Index Team 2 ',indexTeam2);

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`http://localhost:8080/getidbattle`, requestOptions);
      if (!response.ok) {
        throw new Error("Erreur HTTP, statut = " + response.status);
      }
      const body = await response.json();
      console.log('Données Id Battle Max', body[0].maxBattle);
      return body;
    } catch (error) {
      throw new Error("Erreur lors de la récupération des données : " + error.message);
    }
  }


  async function createBattle(){
        let Index1 = indexTeam1;
        let Index2 = indexTeam2;
        
    const team1Data = {
      "IdTeam1":Index1,
      "IdTeam2":Index2
    };
    
    await fetch('http://localhost:8080/setbattle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(team1Data)
    })
    
    .then(response => response.json())
    .then(data => {console.log('Données envoyées createBattle ', data);})
    
    .catch(error => {console.error('Erreur lors de l\'envoi des données createBattle ', error);});

  }



