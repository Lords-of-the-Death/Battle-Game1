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
        lifebar.id = "life";
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
        lifebar.id = "life";
        container1.appendChild(lifebar);

        let imgElement = document.createElement("img");            
        imgElement.src = "../imgperso/"+  el.imgIdlePerso + "-left.gif";
        imgElement.alt = el.NamePerso;
        imgElement.id = "imgT2Hero"+`${i}`;
        imgElement.style.position = "relative";
        imgElement.style.width = "184px";
        imgElement.style.height = "152px";
        container1.appendChild(imgElement);
    }
}

const go = document.getElementById('go');

go.addEventListener('click', function () {

    console.log('lancement du combat !');  
    moveCharacter(team1, team2); 

    function sumLife(equipe) {

        var somme = 0;
        equipe.forEach(el => {
            somme += el.LevelPlayer;
        });
        return somme

    }
    
    function fight(attaquant, defenseur) {

    }


    // if (sumLife(team2) > 0 || sumLife(team1) > 0) {
    
    //     fight(indice(team1),indice(team2));
    //     fight(indice(team2),indice(team1));
    // } else {
    //     console.log('fini');
    // }
    
})

function indice(equipe) {

        const ind = Math.floor(Math.random() * equipe.length);
        console.log(ind);
        // return equipe[ind];
        return ind;

}

function moveCharacter(team1, team2) {

        let iT1 = indice(team1);
        let iT2 = indice(team2);
        
        let characterTeam1 = document.getElementById('T1hero'+`${iT1}`);
        characterTeam1.classList.add('move-mid_team1');

        let characterTeam2 = document.getElementById('T2hero'+`${iT2}`);
        characterTeam2.classList.add('move-mid_team2');

        setTimeout(() => {

            characterTeam1.classList.remove('move-mid_team1');
            characterTeam2.classList.remove('move-mid_team2');

        }, 2000);

}

