console.log("fonctions");


//Déclaration de fonction
function direBonjour(nom){
    console.log("Bonjour " + nom);
    
}

//appel de la fonction
direBonjour("Junior");
direBonjour("JMC");
direBonjour("maman");
direBonjour("Sidi");


//--------------------//


//Déclaration de fonction
function direBonjour(nom, prenom){
    return `Bonjour ${prenom} ${nom} !`;
    
}
//appel de la fonction
let message = direBonjour("Cestrières", "Jean-Marc");
console.log(message);