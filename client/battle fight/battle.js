let IdBattle;

let totalLifet1 = 0;
let totalLifet2 = 0;

//[fighter.IdBattle,fighter.Buff1,fighter.Idplayer,fighter.NamePlayer,fighter.Attplayer,fighter.DefPlayer,fighter.LevelPlayer,fighter.imgIdlePerso]
let team1 = [];
let team2 = [];


prog(); //la fonction la plus importante du module

async function prog(){
    await getIdBattle();
    await getFighterT1(IdBattle);
    await getFighterT2(IdBattle)
}


/********************************* Récupération des informations ************************************/

async function getIdBattle(){
    var headers = new Headers();
    

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
      IdBattle = body[0].maxBattle;
      return body;
    } catch (error) {
      throw new Error("Erreur lors de la récupération des données : " + error.message);
    }
  }

/********************************* Récupération des informations T1 ************************************/

async function getFighterT1(IdBattle){
    let myHeaders = new Headers();
    const id = IdBattle;

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    try {
    const response = await fetch(`http://localhost:8080/getbattleteam1/${id}`, requestOptions);
    if (!response.ok) {
        throw new Error("Erreur HTTP, statut = " + response.status);
    }
    const body = await response.json();
    createTeam1(body);
    
    } catch (error) {
    throw new Error("Erreur lors de la récupération des données getFighterT1 : " + error.message);
    }

}

function createTeam1(body){
    let fighters = body;

    fighters.forEach((fighter) => {
        team1.push([fighter.IdBattle,fighter.Buff1,fighter.Idplayer,fighter.NamePlayer,fighter.Attplayer,fighter.DefPlayer,fighter.LevelPlayer,fighter.imgIdlePerso]);
        totalLifet1 = totalLifet1 + fighter.LevelPlayer
        document.getElementById('buff1').innerHTML = '<img src="./asset/buff'+ team1[0][1] +'.png" alt="" />'
      });
}


/********************************* Récupération des informations T2 ************************************/

async function getFighterT2(IdBattle){
    let myHeaders = new Headers();
    const id = IdBattle;

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    try {
    const response = await fetch(`http://localhost:8080/getbattleteam2/${id}`, requestOptions);
    if (!response.ok) {
        throw new Error("Erreur HTTP, statut = " + response.status);
    }
    const body = await response.json();
    createTeam2(body);
    
    } catch (error) {
    throw new Error("Erreur lors de la récupération des données getFighterT2 : " + error.message);
    }

}

function createTeam2(body){
    let fighters = body;

    fighters.forEach((fighter) => {
        team1.push([fighter.IdBattle,fighter.Buff2,fighter.Idplayer,fighter.NamePlayer,fighter.Attplayer,fighter.DefPlayer,fighter.LevelPlayer,fighter.imgIdlePerso]);
        totalLifet2 = totalLifet2 + fighter.LevelPlayer
        document.getElementById('buff2').innerHTML = '<img src="./asset/buff'+ team2[0][1] +'.png" alt="" />'
      });
}



