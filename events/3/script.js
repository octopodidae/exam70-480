
var emailField = document.getElementById("email");

emailField.onfocus = function() {
	if ( emailField.value == "Votre e-mail") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if ( emailField.value == "") {
		emailField.value = "Votre e-mail";
	}
};
