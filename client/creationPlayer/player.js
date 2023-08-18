function openModal(param) {
    let card = document.getElementById("card");
    let select = document.getElementById(param)
  
    if (card.style.visibility === "visible") {
        card.style.visibility = "hidden";
    } else {
        card.style.visibility = "visible";
    }
}