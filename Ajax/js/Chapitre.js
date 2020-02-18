class Chapitre{
    constructor(titre, texte){
        this.titre = titre
        this.texte = texte
    }
    afficher(){
        let section = document.querySelector('section');
        let maDiv = document.createElement("div");
        let monTitre = document.createElement("h1");
        let monParagraphe = document.createElement("p");
        monTitre.innerText = this.titre;
        monParagraphe.innerText = this.texte;
        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        section.appendChild(maDiv);
    }
}