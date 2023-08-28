const battleArena = [
  'Fond-arena1.jpg',
  'Fond-arena2.jpg',
  'Fond-arena3.jpg,'
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function changeArena() {
  const randomIndex = getRandomIndex(battleArena);
  const randomImageURL = wallpaperImages[randomIndex];
  const wallpaperElement = document.getElementById('arenaBattle');
  wallpaperElement.src = randomImageURL;
}

generateButton.addEventListener('click', changeWallpaper);

changeWallpaper();

// ctrl + ù = ouvrir le terminal
// crtl + l = supprimer tout dans le terminal 