var Menu = function(container, opts){
	this.topElement = container;
	this.speed = opts.speed || 5;
	this.subElements = opts.classeCSS ? getByClass(this.topElement, opts.classeCSS) : this.topElement.getElementsByTagName('li');
	this.init();
};
Menu.prototype.init = function(){
	var nb = this.subElements.length, that = this, subLi, subLiNb;
	while(nb--){
		this.subElements[nb].subConteneur = this.subElements[nb].getElementsByTagName('ul')[0];
		this.subElements[nb].subConteneur.style.display = 'block';
		this.subElements[nb].hauteur = this.subElements[nb].subConteneur.offsetHeight - 11;
		this.subElements[nb].className = this.subElements[nb].className.replace('noscript','script');
		this.subElements[nb].subConteneur.style.height = 0;
		this.subElements[nb].style.cssText += ';overflow: visible;border-bottom: none';
		this.subElements[nb].actuel = 0;
		this.subElements[nb].onmouseover = function(){
			var elem = this;
			this.style.backgroundColor = '#F2F2F2';
			this.subConteneur.style.paddingTop = '7px';
			this.getElementsByTagName('a')[0].style.cssText += ';background-color: #4C4C4C;color: white;';
			if(this.timer){
				clearInterval(this.timer);
			}
			this.timer = setInterval(function(){that.expand(elem,1);},25);
		};
		this.subElements[nb].onmouseout = function(){
			var elem = this;
			if(this.timer){
				clearInterval(this.timer);
			}
			this.timer = setInterval(function(){that.expand(elem,-1);},25);
		};
		subLi = this.subElements[nb].subConteneur.getElementsByTagName('li');
		subLiNb = subLi.length;
		while(subLiNb--){
			subLi[subLiNb].onmouseover = function(){
				this.className += ' hover';
			};
			subLi[subLiNb].onmouseout = function(){
				this.className = this.className.replace(' hover','');
			};
		}
	}
};
Menu.prototype.expand = function(elem,sens){
	if(sens==1){
		if(elem.hauteur-elem.actuel<this.speed){
			elem.actuel = elem.hauteur;
			clearInterval(elem.timer);
		}
		else{
			elem.actuel += this.speed;
		}
	}
	else{
		if(elem.actuel<=this.speed){
			elem.style.backgroundColor = '';
			elem.subConteneur.style.paddingTop = '';
			clearInterval(elem.timer);
			elem.actuel = 0;
			elem.getElementsByTagName('a')[0].style.backgroundColor = '';
			elem.getElementsByTagName('a')[0].style.color = '';
		}
		else{
			elem.actuel -= this.speed;
		}
	}
	elem.subConteneur.style.height = elem.actuel + 'px';
};
var getStyle = function(obj,regle){
	if(window.getComputedStyle){
		getStyle = function(obj,regle){
			return window.getComputedStyle(obj,'')[regle];
		};
		return window.getComputedStyle(obj,'')[regle];
	}
	else{
		getStyle = function(obj,regle){
			return obj.currentStyle[regle];
		};
		return obj.currentStyle[regle];
	}
};
var getByClass = function(conteneur,cl){
	if(typeof conteneur === 'string'){
		conteneur = _$(conteneur);
	}
	if(conteneur.getElementsByClassName){
		getByClass = function(conteneur,cl){
			if(typeof conteneur === 'string'){
				conteneur = _$(conteneur);
			}
			return conteneur.getElementsByClassName(cl);
		};
		return conteneur.getElementsByClassName(cl);
	}
	else{
		getByClass = function(conteneur,cl){
			if(typeof conteneur === 'string'){
				conteneur = _$(conteneur);
			}
			var tabElems = [], allElems = conteneur.getElementsByTagName('*'), allLength = allElems.length;
			while(allLength--){
				if(allElems[allLength].className.indexOf(cl)>-1){
					tabElems.push(allElems[allLength]);
				}
			}
			return tabElems.reverse();
		};
		var tabElems = [], allElems = conteneur.getElementsByTagName('*'), allLength = allElems.length;
		while(allLength--){
			if(allElems[allLength].className.indexOf(cl)>-1){
				tabElems.push(allElems[allLength]);
			}
		}
		return tabElems.reverse();
	}
};
var addEvent = function(element, type, callback){
	if (element.attachEvent) {
        element.attachEvent("on" + type, callback);
		addEvent = function(element, type, callback){
			element.attachEvent("on" + type, callback);
		}
    }
    else {
        element.addEventListener(type, callback, false);
		addEvent = function(element, type, callback){
			element.addEventListener(type, callback, false);
		}
    }
};
var removeEvent = function(element, type, callback){
	if (element.detachEvent) {
        element.detachEvent("on" + type, callback);
		removeEvent = function(element, type, callback){
			element.detachEvent("on" + type, callback);
		}
    }
    else {
        element.removeEventListener(type, callback, false);
		removeEvent = function(element, type, callback){
			element.removeEventListener(type, callback, false);
		}
    }
};
function _$(un_id){
	return document.getElementById(un_id);
}
/*function setFooter(){
	_$('footer').style.position = '';
	var yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (yMax > document.body.offsetHeight) {
    	_$('footer').style.position = 'absolute';
    }
	addEvent(window, 'resize', setFooter);
}
function initialisation(){
	setFooter();
	new Menu(_$('menu'), {classeCSS: 'submenu', speed: 10});
}
addEvent(window, 'load', initialisation);*/

function setFooter() {
	//document.getElementById("footer").style.position = "";
	document.getElementById("footer").style.position = "absolute";

	//window.onresize = setFooter;
}

window.onload = function() {
	setFooter();
};