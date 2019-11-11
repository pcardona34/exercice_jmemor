'use strict'

/*
 * interface.js
 *
 * ( c ) 2012-2019 Patrick Cardona
 * exercice_jmemor : exerciseur de mémorisation conçu au moyen de JMemor.
 * Gestion des événements de l'interface
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

// Récupération du paramètre "numero" : d'après MSDN
function obtenirParametre(sVar) {
  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var numero = obtenirParametre('numero');
if (!numero) {
	alert("Syntaxe : http://votre_serveur/cartes/JFC.html?numero=100 pour charger la série de cartes 100 (c-à-d cartes100.json).");
}
else
    {
	var donnees = 'json/cartes' + numero + '.json';
}



/* ****************************************** */
/* Gestion effective des données de JMemor */

// On charge les données de cet exercice dans le modèle d'interface à partir du fichier de données obtenu via la variable 'donnees'
// Gestion du modèle (template)
var template = document.getElementById('modele').innerHTML;

fetch(donnees)
	.then(function(response) {
	if (!response.ok) {
		throw new Error("Erreur HTTP, statut = " + response.status);
       }
       return response.json();
     })
     .then(function(json) {
		if(json.app_name == "jmemor"){
			var nouvel = document.createElement("div");
			nouvel.innerHTML = template;
			// On récupère les données
			auteur = json.auteur;
			theme = json.theme;
			series = json.series;
			cartes = json.series.length;
		
		/*
		 * On affiche ces données
		 */
		
		nouvel.querySelector("#appli").style.display = 'block';
		nouvel.querySelector("#titre").innerHTML = "Je mémorise " + theme.toLowerCase() + "."; 
		nouvel.querySelector("#nombre").innerHTML = cartes + " cartes à mémoriser";
		
		// On mélange aléatoirement la série de cartes à mémoriser :
		series.sort(function() {return 0.5 - Math.random()})
		document.getElementById("conteneur").innerHTML = "";
    	document.getElementById("conteneur").appendChild(nouvel);	
		}
		else{
			alert("Une erreur s'est produite : le fichier de données n'est pas conforme.");
		}
	
	/* Licence */
	document.querySelector("a[title='licence']").addEventListener('click', function(e){
		alert(lic);
		e.preventDefault();
	});
	
	
	/* Gestion du lien 'à propos' dans l'interface */
	document.querySelector("a[title=apropos]").addEventListener('click', function(e){
		apropos.affiche();
		e.preventDefault(); // Pour ne pas suivre le lien.
	});
	
	/* Auteur de la série */
	document.querySelector("a[title='auteur']").addEventListener('click', function(e){
		alert("Auteur de la série : " + auteur);
		e.preventDefault();
	});
	
	/*  On masque la pile de cartes au début… ainsi que les contrôles de mémorisation */
	document.getElementById("boite").style.display = 'none';
	let reactions = document.querySelectorAll(".reaction");
	for (let i = 0;i < reactions.length; i++){
		reactions[i].style.display = 'none';
	}
	document.getElementById("retourner").style.display = 'none';

	/* Fonctions de traitement de l'affichage */
	
	/* Série terminée */
	function finir(){
		document.getElementById("boite").classList.remove("ombre");
		document.getElementById("boite").innerHTML = '<img src="img/happy.png" alt="Série terminée" style="vertical-align:middle;" />  Série mémorisée !';
		document.getElementById("boite").classList.toggle("bleu");
		document.getElementById("retourner").style.display = 'none';
	}
	
	/* Commencer ou continuer */
	function commencer(){
		// On affiche la pile... :
		document.getElementById("boite").style.display = 'inline-block';
		document.getElementById("retourner").style.display = 'block';
		document.getElementById("actions").style.display = 'none';
		// On masque ce qui peut détourner l'attention :
		document.getElementById( "titre" ).style.display = 'none';
		
		cartes = series.length;
		if(cartes == 0){
			finir();
		}else{
			series.sort(function() {return 0.5 - Math.random()});	
			i=0;
			document.getElementById("boite").classList.remove("ombre");
			document.getElementById("boite").innerHTML = series[i]['ques'];
			document.getElementById("boite").classList.toggle("vert");
			document.getElementById("boite").classList.toggle("blanc");
			document.getElementById("boite").classList.add("ombre");
		}
	}
	
	/* On débute la série … */
	document.querySelector("a[title='Cliquez sur la pile pour commencer.']").addEventListener('click', commencer, false);

	/* On retourne la carte */
	document.querySelector("a[title='Retourner la carte']").addEventListener('click', function(e){
		
		document.getElementById("retourner").style.display = 'none';
		if(i < cartes){
			document.getElementById("boite").classList.remove("ombre");
			document.getElementById("boite").innerHTML = series[i]['ans'];
			document.getElementById("boite").classList.toggle("blanc");
			document.getElementById("boite").classList.toggle("vert");
			document.getElementById("boite").classList.add("ombre");
			
			// On montre les contrôles de mémorisation
			let reactions = document.querySelectorAll(".reaction");
			for ( let i = 0; i < reactions.length; i++){
					reactions[i].style.display = 'inline-block';
				}
		}else{
			finir();
		}
		
		e.preventDefault();
	});
	
  
  document.querySelector("a[title='Je ne le sais pas encore!']").addEventListener('click', function(e){
		
		// On masque les contrôles :
		reactions = document.querySelectorAll(".reaction");
		for ( let i = 0; i < reactions.length; i++){
			reactions[i].style.display = 'none';
		}
		document.getElementById("retourner").style.display = 'block'
			
			
		if(i == (cartes - 1)){
			commencer();
		}else{
			i = i+1;
			commencer();
		}
		
	e.preventDefault();
  });
  
	/* On a mémorisé une carte */
	document.querySelector("a[title='Je le sais déjà!']").addEventListener('click', function(e){
		
		// On masque les contrôles :
		reactions = document.querySelectorAll(".reaction");
		for ( let i = 0; i < reactions.length; i++){
			reactions[i].style.display = 'none';
		}
		document.getElementById("retourner").style.display = 'block';
		
		series.splice(i,1);
		cartes = series.length;
		document.getElementById("nombre").innerHTML = cartes + " carte(s) à mémoriser";
		if(cartes == 0){
			finir();
		}else{
			commencer();
		}
	
	e.preventDefault();
  });

	
}); // Fin du chargement de l'interface
