
var emailField = document.getElementById("email");

emailField.onfocus = function() {
	if ( this.value == "Votre e-mail") {
		this.value = "";
	}
};

emailField.onblur = function() {
	if ( this.value == "") {
		this.value = "Votre e-mail";
	}
};
