//Bouton Paragraphe Spoiler
const spoilerBouton = document.getElementById("spoiler");
const spoilerPara = document.getElementById("spoiler-para");

spoilerBouton.addEventListener("click", function (e) {
  e.preventDefault();
  spoilerPara.classList.toggle("show");
});

//Bouton Favoris changement de couleurs

const btnFav = document.getElementById("btn-fav");

btnFav.addEventListener("click", function (e) {
  e.preventDefault();
  btnFav.classList.toggle("btn-fav-clic");
});


