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
        divElement.style.position = "relative";
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

    function sumLife(equipe) {

        var somme = 0;
        equipe.forEach(el => {
            somme += el.LevelPlayer;
        });
        return somme
    }
    function indice(equipe) {

        const ind = Math.floor(Math.random() * equipe.length);
        return equipe[ind];
    }
    function fight(attaquant, defenseur) {

        defenseur.LevelPlayer = defenseur.LevelPlayer - 0.5;
        console.log(defenseur.LevelPlayer)
    }
    if (sumLife(team2)> 0) {
        fight(indice(team1),indice(team2))
    } else {
        console.log('fini');
    }
    
})
