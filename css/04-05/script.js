//Créer les éléments
var newHeading = document.createElement("h1");//
var newParagraph = document.createElement("p");//

// Pour ajouter du contenu, on peut utiliser innerHtml()
//newHeading.innerHTML = "Le saviez-vous ?";
//newParagraph.innerHTML = "La Californie produit plus de 17 millions de gallons de vin chaque année !";

// OU, créer les noeuds de texte manuellement
var h1Text = document.createTextNode("Le saviez-vous ?");//
var paraText = document.createTextNode("La Californie produit plus de 17 millions de gallons de vin chaque année !");//
// Et ajoutez-les en tant que noeuds enfants des nouveaux éléments 
newHeading.appendChild(h1Text);//
newParagraph.appendChild(paraText);//

// Pour terminer, attacher les éléments créés au document
document.getElementById("trivia").appendChild(newHeading);//
document.getElementById("trivia").appendChild(newParagraph);//

var divTP2 = document.createElement("div");
document.body.appendChild(divTP2);
divTP2.setAttribute("id", "divTP2");
var para = document.createElement("p");
var liste = document.createElement("ul"), item;

var langages = [
	document.createTextNode("Javascript"), 
	document.createTextNode("JScript"),
	document.createTextNode("ActionScript"),
	document.createTextNode("EX4")

];


divTP2.appendChild(liste);

for (var i = 0; i < langages.length; i++) {
	item = document.createElement("li");
	item.appendChild(langages[i]);
	liste.appendChild(item);

}

/*var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
li1.appendChild(document.createTextNode("Javascript"));
li2.appendChild(document.createTextNode("JScript"));
li3.appendChild(document.createTextNode("ActionScript"));
li4.appendChild(document.createTextNode("EX4"));

liste.appendChild(li1);
liste.appendChild(li2);
liste.appendChild(li3);
liste.appendChild(li4);*/
