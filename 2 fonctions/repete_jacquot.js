// Votre collègue développeur maîtrise visiblement le copier-coller.

// Lorsqu'il aura créé 20 chapitres, son code approchera les 200 lignes !

// De plus, s'il souhaite modifier la structure des chapitres, il devra tous les modifier, un par un !

// Aidez-le à automatiser son code !





//déclaration de la fonction
// function chapitre(titre, texte){
//     let maDiv = document.createElement("div");
//     let monTitre = document.createElement("h1");
//     let monParagraphe = document.createElement("p");
//     monTitre.innerText = titre;
//     monParagraphe.innerText = texte;
//     maDiv.appendChild(monTitre);
//     maDiv.appendChild(monParagraphe);
//     document.body.appendChild(maDiv);
// }

// //appel de la fonction
// chapitre("Bienvenue !", "Bienvenue sur mon site ! Plein de lroem ipsum...");
// chapitre("Chapitre 1 : un chapitre pour débuter", "Paragraphe chapitre 1");
// chapitre("Chapitre 2 : un autre chapitre", "Paragraphe chapitre 2");
// chapitre("Chapitre 3 : encore un chapitre", "Paragraphe chapitre 3");

// let maDiv = document.createElement("div");
// let monTitre = document.createElement("h1");
// let monParagraphe = document.createElement("p");
// monTitre.innerText = "Bienvenue !";
// monParagraphe.innerText = "Bienvenue sur mon site ! Plein de lorem ipsum...";
// maDiv.appendChild(monTitre);
// maDiv.appendChild(monParagraphe);
// document.body.appendChild(maDiv);

// let maDiv1 = document.createElement("div");
// let monTitre1 = document.createElement("h1");
// let monParagraphe1 = document.createElement("p");
// monTitre1.innerText = "Chapitre 1 : un chapitre pour débuter";
// monParagraphe1.innerText = "Paragraphe chapitre 1";
// maDiv1.appendChild(monTitre1);
// maDiv1.appendChild(monParagraphe1);
// document.body.appendChild(maDiv1);

// let maDiv3 = document.createElement("div");
// let monTitre3 = document.createElement("h1");
// let monParagraphe3 = document.createElement("p");
// monTitre3.innerText = "Chapitre 2 : un autre chapitre";
// monParagraphe3.innerText = "Paragraphe chapitre 2";
// maDiv3.appendChild(monTitre3);
// maDiv3.appendChild(monParagraphe3);
// document.body.appendChild(maDiv3);

// let maDiv4 = document.createElement("div");
// let monTitre4 = document.createElement("h1");
// let monParagraphe4 = document.createElement("p");
// monTitre4.innerText = "Chapitre 3 : encore un chapitre";
// monParagraphe4.innerText = "Paragraphe chapitre 3";
// maDiv4.appendChild(monTitre4);
// maDiv4.appendChild(monParagraphe4);
// document.body.appendChild(maDiv4);










// // la meme chose un peu plus automatisé
// function chapitre(chap){
//     let maDiv = document.createElement("div");
//     let monTitre = document.createElement("h1");
//     let monParagraphe = document.createElement("p");
//     monTitre.innerText = chap.titre;
//     monParagraphe.innerText = chap.texte;
//     maDiv.appendChild(monTitre);
//     maDiv.appendChild(monParagraphe);
//     document.body.appendChild(maDiv);
// }

// let chapitre1 = {
//     titre: "Chapitre 1 : un chapitre pour débuter",
//     texte: "Paragraphe chapitre 1"
// };
// let chapitre2 = {
//     titre: "Chapitre 2 : un chapitre pour débuter",
//     texte: "Paragraphe chapitre 2"
// };
// let chapitre3 = {
//     titre: "Chapitre 3 : un chapitre pour débuter",
//     texte: "Paragraphe chapitre 3"
// };
// let chapitre4 = {
//     titre: "Chapitre 4 : un chapitre pour débuter",
//     texte: "Paragraphe chapitre 4"
// };

// //appel de la fonction
// chapitre(chapitre1);
// chapitre(chapitre2);
// chapitre(chapitre3);
// chapitre(chapitre4);


//la meme chose en json

document.querySelector('body').style.textAlign = "center"

class Chapitres {
    constructor(titre, texte, cible) {
        this.titre = titre
        this.texte = texte
        this.cible = cible //cible = ou je souahite ajouter mes données
        this.ajoutChapitre()
    }
    ajoutChapitre() {
        let article = document.createElement('article')
        let titre = document.createElement('h2')
        article.textContent = this.texte
        titre.textContent = this.titre
        this.cible.appendChild(titre)
        this.cible.appendChild(article)
    }
}
let section = document.querySelector('section')

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    console.log(request.status)
    if (request.readyState === 4) {
        let response = JSON.parse(this.response) // Si non stockées dans une variable this.response.chapitre est undefined. Json.parse sert a rendre le fichier Json parcourable. sans cela il serait lu comme une chaine de caractere.
        let titreLivre = document.createElement('h1')//ajout du titre unique du livre
        titreLivre.textContent = response.Livre //
        section.appendChild(titreLivre)
        for (let i = 0; i < response.chapitre.length; i++) {
            let article = new Chapitres(response.chapitre[i].titre, response.chapitre[i].contenu, section)
        }
    }
}
request.open('GET', "repete_jacquot.json", true);
request.send()
