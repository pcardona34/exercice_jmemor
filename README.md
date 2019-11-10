# exercice_jmemor

Exercice de mémorisation (flashcards) conçu au moyen du générateur de JMemor


## Origine du projet

Il s'agit d'une reprise de l'exercice conçu en 2013 et initialement hébergé sur [SourceForge](https://sourceforge.net/projects/exercice-jmemor/). 

Il s'agit de dépoussiérer le code (suppression des dépendances à JQuery, etc.)

## Nouvelle version

+ Seul l'exercice de mémorisation (Flashcards : exercice exécuté au moyen de `JFC.html`) est mis à jour.

+ La compatibilité avec l'exercice de Quiz n'est plus maintenue en raison de la trop forte dépendance de celui-ci vis-à-vis de JQuery.

Si vous cherchez un exercice de Quiz, considérez plutôt l'utilisation de l'excellent exerciseur Dyris, par exemple.


## Nouvelle syntaxe

+ Placez votre fichier de données nommé avec le préfixe `cartes`, par exemple `cartesxx.json` dans le dossier `json`.

+ L'exécution se fera ainsi via l'URL : `http://votre_serveur/jmemor/JFC.html?numero=xx` où `xx` est votre numéro d'exercice.

+ Le fichier `index.html` permet de constituer un menu pour regrouper vos différents exercices de mémorisation.

## Exemple

<https://pcardona34.github.io/exercice_jmemor/>

## Format de fichier de données

+ Vous pouvez éditer le fichier `json` vous-même ou bien le produire au moyen du générateur JMemor.
