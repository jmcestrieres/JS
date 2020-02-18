//Déclarer un tableau contenant les jours de la semaine

let semaine = [
    "lundi",
    "mardi", 
    "mercredi", 
    "jeudi", 
    "vendredi", 
    "samedi", 
    "dimanche"
];


//Afficher tous les éléments du tableau

//affichage console.log simple
console.groupCollapsed("affichage console.log simple")
console.log(semaine)
console.groupEnd()

//affichage du tableau avec for...of
console.groupCollapsed("affichage des jours avec for...of")
for (let jour of semaine){
console.log(jour);
}
console.groupEnd();

//affichage du tableau avec for..i
console.groupCollapsed("affichage des jours avec for...i")
for(let i = 0; i<semaine.length; i++){
    console.log(semaine[i]);
}
console.groupEnd();

//affichage du talbeau avec for..in
console.groupCollapsed("affichage des jour avec for...in")
for(let index in semaine){
console.log(semaine[index]);
}
console.groupEnd();

//affichage du tableau avec forEach
console.groupCollapsed("affichage desjours avec forEach")
semaine.forEach(function(jours){
    console.log(jours)
});
console.groupEnd();

//affichage du tableau forEach et notation fléchée
console.groupCollapsed("affichage avec forEach et notation fléchée")
semaine.forEach( jour => {
    console.log(jour);
    }
);
console.groupEnd();

//affichage du tableau avec forEach et notation fléchée concise
console.groupCollapsed("affichage des jours avec foreach et notation fléchée consise")
semaine.forEach( jour => console.log(jour) );
console.groupEnd();

