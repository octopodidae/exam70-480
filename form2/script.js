// Afficher et masquer des sections de formulaire
function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			// utiliser un style CSS pour afficher
			document.getElementById("tourSelection").style.display = "block";
		} else {
			// ou pour masquer le div
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	// Cacher le div au chargement initial de la page.
	document.getElementById("tourSelection").style.display = "none";
}

window.onload =  function() {
	preparePage();
};

