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
    
    let heroatt = indice(team1);
    let herodef = indice(team2);
    let resetSRC = heroatt.gif.src;

    while (heroatt.life < 0) {

        let resetPosX = getComputedStyle(heroatt.position).left;
        let resetPosY = getComputedStyle(heroatt.position).bottom;
        
        let URLatt = heroatt.gif.src.replace("idle", "attack");
        let URLdef = heroatt.gif.src.replace("idle", "defence");
        let URLdie = heroatt.gif.src.replace("idle", "die");
        // 
        // heroatt.life = heroatt.life - 50;
        // console.log(heroatt.life);
        //   
        heroatt.position.style.left = "290px";
        heroatt.position.style.bottom = "-200px";
        heroatt.gif.src = URLatt;

        setTimeout(() => {

            heroatt.position.style.left = resetPosX;
            heroatt.position.style.bottom = resetPosY;
            heroatt.gif.src = resetSRC;
            

        }, 2000);
    }
    
});

function indice(tableau) {
    const ind = Math.floor(Math.random() * tableau.length);
    return tableau[ind];
}