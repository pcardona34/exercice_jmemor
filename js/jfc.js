// jfc.js


// ( c ) 2012-2019 Patrick cardona
// Version : 2.0.0

/* =================================================================== */
/* LICENCE
/* =================================================================== */
/*
@licstart  The following is the entire license notice for the 
    JavaScript code in this page.

Copyright (C) 2012-2019  Patrick CARDONA - exercice_jmemor

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


// On prépare les variables permettant de gérer les données
// On leur donne une valeur par défaut...
// Et on les associe au type 'flash cards' :
var series = [
	{"ques": "recto", "ans": "verso"},
	{"ques": "Première lettre", "ans": "A"}
	];
var options = "null";

var quiz = { "cards":series };
/* Auteur de la série */
var auteur = "Anonyme";
/* Thème de la série ou du test */
var theme = "Exemple";

var face=[];
var pile=[];
var cartes = 0;
var i=0;
