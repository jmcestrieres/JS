window.onload = function() {
    // Identification des éléments du menu
    let menuCol = document.querySelector(".liste");
    let menuLigne = document.querySelector(".module");
    let menuMax = document.querySelector(".maximise");
    // Récupérer le main pour changer sa classe
    let main = document.querySelector("main");
        // Vidéo à 100%
    menuMax.onclick = function() {
            main.classList.toggle("videoMax");
        }
        // Vue en colonne
    menuCol.onclick = function() {
            console.log(main.className);
            if (main.className != "vueColonne") {
                main.classList.add("vueColonne");
            }
        }
        // Vue en ligne
    menuLigne.onclick = function() {
        if (main.className == "vueColonne") {
            main.classList.remove("vueColonne");
        }
    }
}