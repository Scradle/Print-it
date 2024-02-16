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
];



//flêche gauche
const ArrowLeft = document.querySelector(".arrow_left");
ArrowLeft.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche gauche");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche gauche");
    }
});

//flêche droite
const ArrowRight = document.querySelector(".arrow_right");
ArrowRight.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche droite");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche droite");
    }
});

//nombre de dots grâce au nombre de slide du tableau slides
const nombreSlides = slides.length;
console.log("Nombre d'éléments dans le tableau :", nombreSlides);
for (let i = 0; i < nombreSlides; i++) {
	let Dot = document.createElement("div");
    // Récupérer un élément parent existant
	const Dots = document.querySelector(".dots");
	// Ajouter le nouvel élément au parent
	Dots.appendChild(Dot);
	//ajout de classe sur élément crée
	Dot.classList.add("dot");
}


//initialisation du slide et du dot correspondant
let Slide = 0;
let SlideIndex = slides[Slide];
console.log("Slide affiché :", SlideIndex);
const Dot = document.querySelector(".dot");
const DotIndex = Dot[Slide];
console.log("Dot correspondant :", Slide);
Dot.classList.add("dot_selected");
let index = 0;


// changement d'image et texte
function showSlide(index) {

	if (index < 0) {
        Slide = nombreSlides - 1;
    } else if (index >= nombreSlides) {
        Slide = 0;
    } else {
        Slide = index;
    }

    // Affiche l'image correspondante
    const bannerImage = document.querySelector(".banner-img");
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;

    // Affiche le texte correspondant
    const tagLine = document.querySelector("#banner p");
    tagLine.innerHTML = slides[index].tagLine;

}

function prevSlide() {
		showSlide(Slide - 1);
}
	
function nextSlide() {
	showSlide(Slide + 1);
}

ArrowLeft.addEventListener("click", prevSlide);
ArrowRight.addEventListener("click", nextSlide);
