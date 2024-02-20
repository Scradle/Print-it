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
console.log("Nombre d'éléments dans le tableau :", nombreSlides);

// affichage du bon nombre de dots grâce au nombre de slide du tableau slides
const dotsDiv = document.querySelector(".dots");
for (let i = 0; i < nombreSlides; i++) {
    // création du dot
	const dot = document.createElement("div");
    // ajout de classe css
    dot.classList.add("dot");
    // attachement du div à un container parent
    dotsDiv.appendChild(dot);
}
// fonction pour affiché le bon dot sélectionné
function dotSelected() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        // conditions pour enlever ou ajouter la classe css spécifique
        if (index === slide) {
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
    dotSelected();
    console.log("valeur de index :", index);
    console.log("slide affiché :", slide);
    console.log("image affichée :", slides[slide].image);
    console.log("texte affiché :", slides[slide].tagLine);
}
//fonctions pour incrémentation du slide affiché
function prevSlide() {
		showSlide(slide - 1);
}
	
function nextSlide() {
	showSlide(slide + 1);
}

//flêche gauche
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche gauche");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche gauche");
    }
});

//flêche droite
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', function(event) {
    // Différenciez le clic gauche du clic droit
    if (event.button === 0) {
        console.log("Clic gauche sur la flèche droite");
    } else if (event.button === 2) {
        console.log("Clic droit sur la flèche droite");
    }
});

// au click sur les flèches changement de slide
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);


// initialisation du premier dot sélectionné
showSlide(0);