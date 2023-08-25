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
    HTML= '<div class="cardTeamPic">';
    HTML += '<img src="./asset/epee.png" width="60px" height="60px"/></div>';
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









/*document.getElementById('#arrow-epee-gauche').addEventListener ("click", () => {
    console.log('epee');

    cardTeamLeft.innerHTML = `<img src="./asset/epee.png"/>`;

})*/





