class Fromage{
    constructor(nom, type, pays, classement){
        this.nom = nom
        this.type = type
        this.pays = pays
        this.classement = classement
        this.afficher()
    }

    afficher(){
        let section = document.querySelector('section');
        let maDiv = document.createElement('div');
        let leNom = document.createElement('h2');
        let leType = document.createElement('p');
        let lePays = document.createElement('p');
        let monArticle = document.createElement('article');
        this.classementStars = document.createElement('p');
        this.etoile();

        
        leNom.innerHTML = this.nom;
        leType.innerHTML = "Type : " + this.type;
        lePays.innerHTML = "Pays : " + this.pays;
        
        
        section.appendChild(maDiv);
        maDiv.appendChild(leNom);
        maDiv.appendChild(leType);
        maDiv.appendChild(lePays);
        maDiv.appendChild(this.classementStars);
        maDiv.appendChild(monArticle);
        monArticle.appendChild(leType);
        monArticle.appendChild(lePays);
                
    }
    etoile(){
        for (let i=0; i<this.classement; i++ ){
        let stars = document.createElement('img')
        stars.src = 'etoile.png'
        this.classementStars.appendChild(stars)    
        }
    }
};
