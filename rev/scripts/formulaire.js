function changeCasse(champ, isIn){
	if(isIn){
		if (champ.value == champ.defaultValue) {
			champ.value = '';
		}
		champ.style.color = 'black';
		champ.style.fontStyle = 'normal';
	}
	else{
		if (champ.value == '') {
			champ.value = champ.defaultValue;
			champ.style.color = '';
			champ.style.fontStyle = '';
		}
	}
}
function isAlpha(valeurChamp){
	var pattern = /^[a-zéçàèùâëïöüâêûî\-\s]+$/i;
	return pattern.test(valeurChamp);
}
function isTel(valeurChamp){
	var pattern = /^0[\d]{9}$/;
	return pattern.test(valeurChamp);
}
function isDate(valeurChamp){
	var pattern = /^(\d{2}\/){2}\d{4}$/;
	var dateElems = valeurChamp.split('/');
	var objDate = new Date(dateElems[2],--dateElems[1],dateElems[0]);
	var trueDate = objDate.getFullYear() == dateElems[2] && objDate.getMonth() == dateElems[1] && objDate.getDate() == dateElems[0]
	return pattern.test(valeurChamp) && trueDate;
}
function isMail(valeurChamp){
	var pattern = /^[-+.\w]{1,64}@[-.\w]{1,64}\.[-.\w]{2,6}$/;
	return pattern.test(valeurChamp);
}
function isValide(){
	var resultat = true;
	if(!isAlpha(_$('contact-nom').value) || _$('contact-nom').value == _$('contact-nom').defaultValue){
		resultat = false;
		_$('contact-nom-err').style.display = 'inline';
	}
	else{
		_$('contact-nom-err').style.display = '';
	}
	if(!isAlpha(_$('contact-prenom').value) || _$('contact-prenom').value == _$('contact-prenom').defaultValue){
		resultat = false;
		_$('contact-prenom-err').style.display = 'inline';
	}
	else{
		_$('contact-prenom-err').style.display = '';
	}
	if(!isTel(_$('contact-tel').value)){
		resultat = false;
		_$('contact-tel-err').style.display = 'inline';
	}
	else{
		_$('contact-tel-err').style.display = '';
	}
	if(!isDate(_$('contact-naissance').value)){
		resultat = false;
		_$('contact-naissance-err').style.display = 'inline';
	}
	else{
		_$('contact-naissance-err').style.display = '';
	}
	if(!isMail(_$('contact-mail').value)){
		resultat = false;
		_$('contact-mail-err').style.display = 'inline';
	}
	else{
		_$('contact-mail-err').style.display = '';
	}
	return resultat;
}
