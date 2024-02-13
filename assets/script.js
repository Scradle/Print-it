const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Bloc flêches
const Arrow = document.querySelector('.arrow');
Arrow.style.setProperty('display', 'flex');
Arrow.style.setProperty('flex-direction', 'row');

//flêche gauche
const ArrowLeft = document.getElementById("arrow_left");
ArrowLeft.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche gauche");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche gauche");
    }
});

//flêche droite
const ArrowRight = document.getElementById("arrow_right");
ArrowRight.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche droite");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche droite");
    }
});

//nombre de dots grâce au nombre de slides du tableau slides
const nombreSlides = slides.length;
console.log("Nombre d'éléments dans le tableau :", nombreSlides);

for (let i = 0; i < nombreSlides; i++) {

	let Dot = document.createElement("div");
    // Récupérer un élément parent existant
	let Dots = document.getElementById("dots");

	// Ajouter le nouvel élément au parent
	Dots.appendChild(Dot);
	//ajout de classe sur élément crée
	Dot.classList.add("dot");

}