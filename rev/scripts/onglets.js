function onglets(numeroOnglet){
	var i = 0;
	while(_$('page-' + i)){
		_$('page-' + i).style.display = i == numeroOnglet ? '' : 'none';
		i++;
	}
}
function initOnglets(){
	var allOnglets = _$('onglets').getElementsByTagName('a'), allOngletsNb = allOnglets.length;
	while(allOngletsNb--){
		allOnglets[allOngletsNb].rang = allOngletsNb;
		allOnglets[allOngletsNb].onclick = function(){
			onglets(this.rang);
			return false;
		}
	}
	onglets(0);
}
addEvent(window, 'load', initOnglets);
