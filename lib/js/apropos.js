/* 
 * apropos.js
 * 
 * A propos : affichage des informations relatives aux auteurs et aux sources
 * ( c ) 2012-2019 Patrick Cardona - 
 * Version 2.0.0
 * 
 * @source: https://github.com/pcardona34/exercice_jmemor/
 * 
 */

/* =================================================================== */
/* LICENCE
/* =================================================================== */
/*
@licstart  The following is the entire license notice for the 
    JavaScript code in this page.

Copyright (C) 2012-2019  Patrick CARDONA - A propos

    The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
    
@licend  The above is the entire license notice
    for the JavaScript code in this page.    
*/

function oApropos( _auteur, _annee, _nom_appli, _version) {
	this.merci = new Array();
	this.auteur = _auteur;
	this.nom_appli = _nom_appli;
	this.annee = _annee;
	this.version = _version;	
}

oApropos.prototype.ajoute = function(_app, _url_site, _lic, _url_source) {
	var ref = new Array(_app, _url_site, _lic, _url_source);
	this.merci.push( ref );	
}

oApropos.prototype.licence = function(_type){
	switch (_type){
		case "GPL":
			var lic = "Licence GPL: http://www.gnu.org/licenses/gpl-3.0.html";
			return lic;
		break;
		
		case "MIT":
			var lic = "Licence MIT: http://www.opensource.org/licenses/mit-license.php";
			return lic;
		break;
		
		case "BOTH":
			var lic = "Licence GPL: http://www.gnu.org/licenses/gpl-3.0.html et ";
			lic += "Licence MIT: http://www.opensource.org/licenses/mit-license.php";
			return lic;
		break;
		
		case "CC":
			var lic = "Licence CC-By-NC: http://creativecommons.org/licenses/by-nc/2.0/fr/";
			return lic;
		break;
		
		default:
			var lic = "Licence inconnue !";
			return lic;
	}
}

oApropos.prototype.affiche = function() {
	var msg = "À propos de "+ this.nom_appli +" "+ this.version +"\n\n";
	msg += "©"+ this.annee +" "+ this.auteur +"\n";
	msg += "Cette application est un logiciel libre, réalisé grâce à :\n\n";
	for (var i = 0; i < this.merci.length ; i++){
		msg	+= this.merci[i][0] +" : "+ this.merci[i][1] +"\n";
		msg += this.licence(this.merci[i][2]) +"\nCode source: " + this.merci[i][3] + "\n\n";
	}
	alert ( msg );	
}

var apropos = new oApropos("Patrick Cardona", "2012-2019", "exercice_jmemor", "3.0.0");

// App ou API courantes :

apropos.ajoute("jQuizMe de Larry Battle", "http://bateru.com/news/2009/12/jquizme-2-1-release-page/", "MIT", "http://code.google.com/p/jquizme/");
apropos.ajoute("Exercice JMemor de Patrick Cardona", "https://pcardona34.github.io/jmemor/", "GPL", "https://github.com/pcardona34/jmemor/");

