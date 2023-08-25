const go = document.getElementById('go');

go.addEventListener('click', function () {
    
    this.style.display = "none";

    const info = document.getElementById('infoGame');
    info.style.display = "block";

    const hero1 = document.getElementById('hero1');
    const hero1img = document.getElementById('hero1img');
    const hero1lb = document.getElementById('hero1lb');
    
    const hero2 = document.getElementById('hero2');
    const hero2img = document.getElementById('hero2img');
    const hero2lb = document.getElementById('hero2lb');
    
    const hero3 = document.getElementById('hero3');
    const hero3img = document.getElementById('hero3img');
    const hero3lb = document.getElementById('hero3lb');
    
    const hero4 = document.getElementById('hero4');
    const hero4img = document.getElementById('hero4img');
    const hero4lb = document.getElementById('hero4lb');
    
    const hero5 = document.getElementById('hero5');
    const hero5img = document.getElementById('hero5img');
    const hero5lb = document.getElementById('hero5lb');
    
    const hero6 = document.getElementById('hero6');
    const hero6img = document.getElementById('hero6img');
    const hero6lb = document.getElementById('hero6lb');
    
    const hero7 = document.getElementById('hero7');
    const hero7img = document.getElementById('hero7img');
    const hero7lb = document.getElementById('hero7lb');
    
    const hero8 = document.getElementById('hero8');
    const hero8img = document.getElementById('hero8img');
    const hero8lb = document.getElementById('hero8lb');
    
    const hero9 = document.getElementById('hero9');
    const hero9img = document.getElementById('hero9img');
    const hero9lb = document.getElementById('hero9lb');
    
    const hero10 = document.getElementById('hero10');
    const hero10img = document.getElementById('hero10img');
    const hero10lb = document.getElementById('hero10lb');

    const team1 = [hero1,hero3,hero5,hero7,hero9];
    const team1img = [hero1img,hero3img,hero5img,hero7img,hero9img];
    const lifeBarT1 = [hero1lb, hero3lb, hero5lb, hero7lb, hero9lb];

    const team2 = [hero2,hero4,hero6,hero8,hero10];
    const team2img = [hero2img,hero4img,hero6img,hero8img,hero10img];
    const lifeBarT2 = [hero2lb, hero4lb, hero6lb, hero8lb, hero10lb];

    let i1 = 0;
    let i2 = 0;
    hero1lb.style.width = "20px"
    let name = team1[i1].id;
    let name2 = team2[i2].id;
    let text = document.getElementById('textInfos');

    function moveNextItem() {

        if (i1 < team1.length){

            let reset1 = team1[i1].style.left;
            let reset2 = team1[i1].style.bottom;

            let reset3 = team1img[i1].src;
            let URLatt = team1img[i1].src.replace("idle", "attack");
            let URLdie = team1img[i1].src.replace("idle", "die");

            let lifepoint = lifeBarT1[i1].offsetWidth - 20;

            text.innerHTML += `<li>${name} attaque ${name2}</li>`;
            team1[i1].style.left = "290px";
            team1[i1].style.bottom = "-200px";
            team1img[i1].src = URLatt;
            
            i1++;

            setTimeout(() => {
                if (i1 < (team1.length)*2) {
                    team1[i1 - 1].style.left = reset1;
                    team1[i1 - 1].style.bottom = reset2;
                    team1img[i1 - 1].src = reset3;
                    lifeBarT1[i1 - 1].style.width = lifepoint +"px";
                    
                    if (lifeBarT1[i1 - 1].style.width == "0px") {
                        team1img[i1 - 1].src = URLdie;
                    }
                    console.log(hero1lb.style.width);
                    moveNextItem();
                }
            }, 2000);
        }

    }

    function moveNextItem2() {

        if (i2 < (team2.length)*2){

            let reset11 = team2[i2].style.left;
            let reset22 = team2[i2].style.bottom;

            let reset33 = team2img[i2].src;
            let URLatt2 = team2img[i2].src.replace("idle", "defence");
            let URLdie2 = team2img[i2].src.replace("idle", "die");

            let lifepoint2 = lifeBarT2[i2].offsetWidth - 20;

            text.innerHTML += `<li>${name2} se defend face ${name}</li>`;
            team2[i2].style.left = "-500px";
            team2[i2].style.bottom = "-40px";
            team2img[i2].src = URLatt2;

            i2++;

            setTimeout(() => {
            if (i2 <= team2.length) {
                team2[i2 - 1].style.left = reset11;
                team2[i2 - 1].style.bottom = reset22;
                team2img[i2 - 1].src = reset33;
                lifeBarT2[i2 - 1].style.width = lifepoint2 +"px";

                if (lifeBarT2[i2 - 1].style.width == "0px") {
                    team2img[i2 - 1].src = URLdie2;
                }
                moveNextItem2();
            }
            }, 2000);
        }
    }

    moveNextItem();
    moveNextItem2();
});
