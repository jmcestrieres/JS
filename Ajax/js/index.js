let bouton = document.getElementById("bouton");
bouton.addEventListener('click', () => {
    afficherChapitres();
});

function afficherChapitres() {
    let xhr = new XMLHttpRequest();

    //destination de la requête ajax
    xhr.open('GET', 'datas/datas.php');//pour renvoyer au fichier json mettre /chapitres.json
    xhr.responseType = 'json';

    //réagir losrque le serveur répond
    xhr.addEventListener('load', function () {
        let section = document.querySelector('section');
        section.innerHTML = "";
        let chapitresJson = this.response;
        chapitresJson.forEach(element => {
            let chapitre = new Chapitre(element.titre, element.texte);
            chapitre.afficher();
        });
    });

    //envoyer la requête ajax
    xhr.send();
}







