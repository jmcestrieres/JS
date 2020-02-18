// Gérer le over sur l'image dans le aside
let logo = document.querySelector("aside > div");
logo.addEventListener('mouseenter', function(e){
    e.target.style.borderRadius = 0;
});
logo.addEventListener('mouseleave', function(e){
    e.target.style.borderRadius = "50%";
});
// Gérer l'ouverture automatisée des articles
// On récupère la liste des headers de l'ensemble des articles
let headers_ar = document.querySelectorAll("main>section>section>article>header");
// On applique une méthode permettant d'itérer dans les headers pour ajouter un clic à chacun d'eux
headers_ar.forEach(
    f => {
        f.addEventListener('click', function (e) {
            console.log(e.currentTarget.nextElementSibling);
            let div = e.currentTarget.nextElementSibling;
            if (div.style.visibility == "hidden") {
                div.style.visibility = "visible";
                div.style.height = "auto";
            } else {
                div.style.visibility = "hidden";
                div.style.height = "0px";
            }
        })
    }
);

// On s'occupe maintenant des menus
// D'abord, récupérons le fichier JSON
let menus;

// On utilise fetch pour faire une requête Ajax. Fetch renvoie une promesse que nous chaînons pour récupérer les données JSON
fetch('data/menu.json')
.then(data => data.json())
.then(json => {
    // Les données du fichier JSON sont maintenant disponibles dans la variable json
    // Nous pouvons maintenant itérer dans le JSON pour créer notre fichier
    // Nous passons par une fonction pour avoir quelque chose de plus lisible
    creeMenus(json);
})
.catch(function(){
    console.log("Erreur dans le chargement du fichier JSON")
});

// Fonction traitant le menu pour l'ajouter au DOM
function creeMenus(dataMenus){
    let navPrincipale = document.querySelector('main>header>nav');
    dataMenus.principal.forEach((m) => {
        let a = document.createElement('a'); // On crée une balise a
        a.textContent = m.nom;
        a.setAttribute('href', m.lien);
        navPrincipale.appendChild(a);
    });

    let navPied = document.querySelector('main>footer');
    dataMenus.pied.forEach((m) => {
        let a = document.createElement('a'); // On crée une balise a
        a.textContent = m.nom;
        a.setAttribute('href', m.lien);
        navPied.appendChild(a);
    });
}