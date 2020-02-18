class Voiture{
    //Ce qui caractérise la voiture
    constructor(marq, coul, boite, modele){
        this.marque = marq;
        this.couleur = coul;
        this.boiteVitesse = "auto";
        this.modele = "3";
    }
    //Ces que sait faire la voiture
    klaxonner(){
        console.log("ihn ihn; tut, tut");
    }
    rouler(){
        console.log("is alive");
    }
    tourner(){
        console.log("hiiiihiiihhhiiii");
        
    }
}


// // Meme voiture en code procédurale

// let couleur = "rouge";
// let marque = "tesla";
// let couleur = "rouge";
// let boiteVitesse = "automatique";
// let model = "3";

// let couleur2 = "vert";
// let marques2 = "honda";
// let boiteVitesse = "manuelle";
// let mdele ="civic";

//   //Ces que sait faire la voiture
// function klaxonner(){
//     console.log("ihn ihn; tut, tut");
// }
// function rouler(){
//     console.log("is alive");
// }
// function tourner(){
//     console.log("hiiiihiiihhhiiii");
    
// }