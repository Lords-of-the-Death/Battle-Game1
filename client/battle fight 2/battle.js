fetch("http://localhost:8080/battle",{
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => response.json())
.then(data => handleData(data))

let team1  = [];
let team2  = [];

function handleData(data) {
    for (let i = 0; i < data.length; i++) {
        const el = data[i];
        if (el.Team == "Team1") {
            team1.push(el);
            
        } else {
            team2.push(el);
            
        }
    }

    for (let i = 0; i < team1.length; i++) {

        const el = team1[i];

        let container = document.getElementById("team1");

        let divElement = document.createElement("div");
        divElement.id = "T1hero"+`${i}`;
        divElement.style.position = "absolute";
        container.appendChild(divElement);

        let container1 = document.getElementById("T1hero"+`${i}`);

        let lifebar = document.createElement("div");
        lifebar.id = "T1life"+`${i}`;
        container1.appendChild(lifebar);

        let imgElement = document.createElement("img");            
        imgElement.src = "../imgperso/"+  el.imgIdlePerso + "-left.gif";
        imgElement.alt = el.NamePerso;
        imgElement.id = "imgT1Hero"+`${i}`;
        imgElement.style.width = "184px";
        imgElement.style.height = "152px";
        container1.appendChild(imgElement);
    }

    for (let i = 0; i < team2.length; i++) {

        const el = team2[i];

        let container = document.getElementById("team2");

        let divElement = document.createElement("div");
        divElement.id = "T2hero"+`${i}`;
        divElement.style.position = "absolute";
        container.appendChild(divElement);

        let container1 = document.getElementById("T2hero"+`${i}`);

        let lifebar = document.createElement("div");
        lifebar.id = "T2life"+`${i}`;
        container1.appendChild(lifebar);

        let imgElement = document.createElement("img");            
        imgElement.src = "../imgperso/"+  el.imgIdlePerso + "-right.gif";
        imgElement.alt = el.NamePerso;
        imgElement.id = "imgT2Hero"+`${i}`;
        imgElement.style.width = "184px";
        imgElement.style.height = "152px";
        container1.appendChild(imgElement);
    }
}

const go = document.getElementById('go');

go.addEventListener('click', function () {

    let iT1 = indice(team1);
    let iT2 = indice(team2);

    function moveCharacter(team1, team2) {
            

            let character = document.getElementById('T1hero'+`${iT1}`);
            let gif = document.getElementById('imgT1Hero'+`${iT1}`);
            let lifebar = document.getElementById('T1life'+`${iT1}`);

            let character2 = document.getElementById('T2hero'+`${iT2}`);
            let gif2 = document.getElementById('imgT2Hero'+`${iT2}`);
            let lifebar2 = document.getElementById('T2life'+`${iT2}`);

            character.classList.add('move-mid_team1');
            let URLidle = gif.src;
            let URLatt = gif.src.replace("idle", "attack");
            let URLdef = gif.src.replace("idle", "defence");
            let URLdie = gif.src.replace("idle", "die");
            gif.src = URLatt;

            character2.classList.add('move-mid_team2');
            let URLidle2 = gif2.src;
            let URLatt2 = gif2.src.replace("idle", "attack");
            let URLdef2 = gif2.src.replace("idle", "defence");
            let URLdie2 = gif2.src.replace("idle", "die");
            gif2.src = URLdef2;
            
            setTimeout(() => {gif.src = URLdef;},1000)

            setTimeout(() => {gif2.src = URLatt2;},1000)

            setTimeout(() => {

                character.classList.remove('move-mid_team1');
                character2.classList.remove('move-mid_team2');

                team1[iT1].LevelPlayer = team1[iT1].LevelPlayer - (team1[iT1].DefPlayer - team1[iT1].Attplayer);
                gif.src = URLidle;

                team2[iT2].LevelPlayer = team2[iT2].LevelPlayer - (team2[iT2].DefPlayer - team1[iT1].Attplayer);
                gif2.src = URLidle2;

                lifebar.style.width = (team1[iT1].LevelPlayer)*10 + 'px';
                lifebar2.style.width = (team2[iT2].LevelPlayer)*10 + 'px';

                if (team1[iT1].LevelPlayer < 0) {
                    gif.src = URLdie;
                    team1.splice(iT1, 1);
                    lifebar.style.width = "0px";
                    team1[iT1].Attplayer = 0;
                }
                if (team2[iT2].LevelPlayer < 0) {
                    gif2.src = URLdie2;
                    team2.splice(iT2, 1);
                    lifebar2.style.width = "0px";
                    team2[iT2].Attplayer = 0;
                }

            }, 2000);
    }

    console.log('lancement du combat !');
    moveCharacter(team1,team2);
    if (team1[iT1].LevelPlayer < 0) {
        team1.splice(iT1);
        console.log(team1);
    };
})

function sumLife(equipe) {

    var somme = 0;
    equipe.forEach(el => {
        somme += el.LevelPlayer;
    })    
    return somme

}

function indice(equipe) {
    let ind
    if (equipe.length == 1) {
        ind = 0;
    }else{
        ind = Math.floor(Math.random() * equipe.length);
    }
    // return equipe[ind];
    return ind;
}

