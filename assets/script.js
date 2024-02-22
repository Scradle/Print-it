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

// initialisation de la valeur slide et mesure du nombre d'éléments dans le tableau
let slide = 0;
const nombreSlides = slides.length;

// affichage du bon nombre de dots grâce au nombre de slide du tableau slides
const dots = document.querySelector(".dots");
for (let i = 0; i < nombreSlides; i++) {
    // création du dot
	const dot = document.createElement("div");
    // ajout de classe 
    dot.classList.add("dot");
    // attachement du div à un container parent
    dots.appendChild(dot);
    // Ajout d'un écouteur et affichage du slide correspondant si click sur dot
    dot.addEventListener('click', function() {
        showSlide(i); 
    });
}

// fonction pour affiché le bon dot sélectionné
function updateDotSelected(slide) {
    const dotDiv = document.querySelectorAll(".dot");
    dotDiv.forEach((dot, dotIndex) => {
        // conditions pour enlever ou ajouter la classe css spécifique
        if (dotIndex === slide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// fonction de changement d'image et texte
function showSlide(index) {
    // condition pour défilement infini
	if (index < 0) {
        slide = nombreSlides - 1;
    } else if (index >= nombreSlides) {
        slide = 0;
    } else {
        slide = index;
    }
    // affiche l'image correspondante
    const bannerImage = document.querySelector(".banner-img");
    bannerImage.src = `./assets/images/slideshow/${slides[slide].image}`;
    // affiche le texte correspondant
    const tagLine = document.querySelector("#banner p");
    tagLine.innerHTML = slides[slide].tagLine;
    // affiche le dot sélectionné en fonction du slide correspondant
    updateDotSelected(slide);
}

//flêche gauche avec écouteur
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('click', function() {
        showSlide(slide - 1);
});

//flêche droite avec écouteur
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', function() {
        showSlide(slide + 1);
});

// initialisation du premier dot sélectionné
showSlide(0);