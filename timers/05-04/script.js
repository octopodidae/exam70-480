// Deux méthodes pour les timers - setTimeout() et SetInterval() (uique / répétitif)

function simpleMessage() {
	alert("Je suis une simple alerte !");
}

//window.setTimeout(simpleMessage, 5000);


// settimeout est en milisecondes

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;
//var len = imageArray.length;


function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}/**/

// setInterval est aussi en milisecondes
var imageInterval = setInterval(changeImage,5000);//

console.log(imageInterval);

myImage.onmouseover = function() {
	clearInterval(imageInterval);
}

myImage.onmouseout = function() {
	imageInterval = setInterval(changeImage,5000);
}

