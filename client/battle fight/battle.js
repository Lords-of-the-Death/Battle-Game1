const hero1 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero1lb').offsetWidth,
    gif : document.getElementById('hero1img'),
    position : document.getElementById('hero1')
}
console.log(hero1);
const hero2 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero2lb'),
    gif : document.getElementById('hero2img'),
    position : document.getElementById('hero2')
}
const hero3 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero3lb'),
    gif : document.getElementById('hero3img'),
    position : document.getElementById('hero3')
}
const hero4 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero4lb'),
    gif : document.getElementById('hero4img'),
    position : document.getElementById('hero4')
}
const hero5 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero5lb'),
    gif : document.getElementById('hero5img'),
    position : document.getElementById('hero5')
}
const hero6 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero6lb'),
    gif : document.getElementById('hero6img'),
    position : document.getElementById('hero6')
}
const hero7 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero7lb'),
    gif : document.getElementById('hero7img'),
    position : document.getElementById('hero7')
}
const hero8 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero8lb'),
    gif : document.getElementById('hero8img'),
    position : document.getElementById('hero8')
}
const hero9 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero9lb'),
    gif : document.getElementById('hero9img'),
    position : document.getElementById('hero9')
}
const hero10 = {
    atk : Math.floor(Math.random() * 10) + 1,
    def : Math.floor(Math.random() * 10) + 1,
    life : document.getElementById('hero10lb'),
    gif : document.getElementById('hero10img'),
    position : document.getElementById('hero10')
}

const team1 = [hero1, hero3, hero5, hero7, hero9];
const team2 = [hero2, hero4, hero6, hero8, hero10];

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



