const go = document.getElementById('go');

go.addEventListener('click', function () {
    
    this.style.display = "none";

    const info = document.getElementById('infoGame');
    info.style.display = "block";

    const hero1 = document.getElementById('hero1');
    const hero1img = document.getElementById('hero1img');
    
    const hero2 = document.getElementById('hero2');
    const hero2img = document.getElementById('hero2img');
    
    const hero3 = document.getElementById('hero3');
    const hero3img = document.getElementById('hero3img');
    
    const hero4 = document.getElementById('hero4');
    const hero4img = document.getElementById('hero4img');
    
    const hero5 = document.getElementById('hero5');
    const hero5img = document.getElementById('hero5img');
    
    const hero6 = document.getElementById('hero6');
    const hero6img = document.getElementById('hero6img');
    
    const hero7 = document.getElementById('hero7');
    const hero7img = document.getElementById('hero7img');
    
    const hero8 = document.getElementById('hero8');
    const hero8img = document.getElementById('hero8img');
    
    const hero9 = document.getElementById('hero9');
    const hero9img = document.getElementById('hero9img');
    
    const hero10 = document.getElementById('hero10');
    const hero10img = document.getElementById('hero10img');

    const team1 = [hero1,hero3,hero5,hero7,hero9,"ok"];
    const team1img = [hero1img,hero3img,hero5img,hero7img,hero9img];

    const team2 = [hero2,hero4,hero6,hero8,hero10,"ok"];
    const team2img = [hero2img,hero4img,hero6img,hero8img,hero10img];

    let currentItemIndex = 0;
    let currentItemIndex2 = 0;

    function moveNextItem() {
        if (currentItemIndex < team1.length) {
            let reset1 = team1[currentItemIndex].style.left;
            let reset2 = team1[currentItemIndex].style.bottom;
            let reset3 = team1img[currentItemIndex].src;
            team1[currentItemIndex].style.left = "290px";
            team1[currentItemIndex].style.bottom = "-200px";
            team1img[currentItemIndex].src = "../imgperso/axe-female-attack-left.gif";
            currentItemIndex++;

            setTimeout(() => {
            if (currentItemIndex < team1.length) {
                team1[currentItemIndex - 1].style.left = reset1;
                team1[currentItemIndex - 1].style.bottom = reset2;
                team1img[currentItemIndex - 1].src = reset3;
                moveNextItem();
            }
            }, 3000);
        }
    }
    function moveNextItem2() {
        if (currentItemIndex2 < team2.length) {
            let reset11 = team2[currentItemIndex2].style.left;
            let reset22 = team2[currentItemIndex2].style.bottom;
            let reset33 = team2img[currentItemIndex2].src;
            team2[currentItemIndex2].style.left = "-500px";
            team2[currentItemIndex2].style.bottom = "-40px";
            team2img[currentItemIndex2].src = "../imgperso/axe-female-attack-right.gif";
            currentItemIndex2++;
        
            setTimeout(() => {
            if (currentItemIndex2 < team2.length) {
                team2[currentItemIndex2 - 1].style.left = reset11;
                team2[currentItemIndex2 - 1].style.bottom = reset22;
                team2img[currentItemIndex2 - 1].src = reset33;
                moveNextItem2();
            }
            }, 3000);
        }
    }

    moveNextItem();
    moveNextItem2();

})