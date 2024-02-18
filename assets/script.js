let slides = [
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

let slide = 0;
const nombreSlides = slides.length;
console.log("Nombre d'éléments dans le tableau :", nombreSlides);

//nombre de dots grâce au nombre de slide du tableau slides
const dotsDiv = document.querySelector(".dots");
for (let i = 0; i < nombreSlides; i++) {
	const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsDiv.appendChild(dot);

    dot.addEventListener("click", () => {
        showSlide(i);
    });
}

// fonction de changement d'image et texte

function showSlide(index) {

	if (index < 0) {
        slide = nombreSlides - 1;
    } else if (index >= nombreSlides) {
        slide = 0;
    } else {
        slide = index;
    }

    // Affiche l'image correspondante
    const bannerImage = document.querySelector(".banner-img");
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;

    // Affiche le texte correspondant
    const tagLine = document.querySelector("#banner p");
    tagLine.innerHTML = slides[index].tagLine;

    dotSelected();
}

function prevSlide() {
		showSlide(slide - 1);
}
	
function nextSlide() {
	showSlide(slide + 1);
}

function dotSelected() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === slide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
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

// au click changement de slide
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);


// initialisation de la valeur index de la fonction showSlide à 0
showSlide(0);