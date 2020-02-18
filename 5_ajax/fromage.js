function afficherFromages(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'fromages.json',true);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function(){
        let fromagesJson = this.response;
        fromagesJson.forEach(element => {
            let fromage = new Fromage(element.nom, element.type, element.pays, element.classement);
            // fromage.afficher();Si pas déclaré ds le constructeur avec this.afficher(), obligé de l'appeler ici
        });
    });
    
    xhr.send();
};

afficherFromages();